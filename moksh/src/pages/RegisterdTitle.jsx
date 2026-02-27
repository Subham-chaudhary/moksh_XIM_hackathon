import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";

export default function RegisteredTitles() {
  const [form, setForm] = useState({
    title: "",
    rnum: "",
    language: "",
    state: "",
    district: "",
    owner: "",
    page: 1,
    limit: 10,
  });

  const [data, setData] = useState({
    result: [],
    total_pages: 1,
    total_rows: 0,
  });

  const [loading, setLoading] = useState(false);

  // FETCH API
  const fetchData = () => {
    setLoading(true);

    const query = new URLSearchParams(form).toString();

    fetch(`http://127.0.0.1:5000/registered?${query}`)
      .then(res => res.json())
      .then(res => {
        setData({
          result: res.result || [],
          total_pages: res.total_pages || 1,
          total_rows: res.total_rows || 0,
        });
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [form.page, form.limit]);

  console.log(data.result);
  const applyFilters = () => {
    setForm(prev => ({ ...prev, page: 1 }));
    setTimeout(fetchData, 0);
  };

  const changePage = (p) => {
    if (p >= 1 && p <= data.total_pages) {
      setForm(prev => ({ ...prev, page: p }));
    }
  };

  return (
    <div className="bg-light min-vh-100">

      {/* HEADER */}
      <div className="prgi-header">
        <h2 className="fw-bold">Registered Titles</h2>
        <p className="mb-0">Home &gt; Registered Titles</p>
      </div>

      {/* FILTER */}
      <div className="container mt-4">
        <div className="filter-box row g-3">

          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Registration Number"
              value={form.rnum}
              onChange={e => setForm({ ...form, rnum: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Owner"
              value={form.owner}
              onChange={e => setForm({ ...form, owner: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="State"
              value={form.state}
              onChange={e => setForm({ ...form, state: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="District"
              value={form.district}
              onChange={e => setForm({ ...form, district: e.target.value })}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control"
              placeholder="Language"
              value={form.language}
              onChange={e => setForm({ ...form, language: e.target.value })}
            />
          </div>

          <div className="col-md-2">
            <select
              className="form-select"
              value={form.limit}
              onChange={e =>
                setForm({ ...form, limit: Number(e.target.value) })
              }
            >
              {[10, 20, 50, 100].map(n => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>

          <div className="col-md-1 d-grid">
            <button className="btn btn-prgi" onClick={applyFilters}>
              Search
            </button>
          </div>

        </div>
      </div>

      {/* TABLE */}
      <div className="container mt-4">

        <p className="text-muted">
          Page {form.page} of {data.total_pages} | Total {data.total_rows}
        </p>

        <div className="table-responsive shadow rounded">
          <table className="table table-bordered table-prgi">

            <thead>
              <tr>
                <th>SN</th>
                <th>Title</th>
                <th>Reg No</th>
                <th>Date</th>
                <th>Language</th>
                <th>Periodicity</th>
                <th>Publisher</th>
                <th>Owner</th>
                <th>State</th>
                <th>District</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="10">Loading...</td>
                </tr>
              ) : data.result.length > 0 ? (
                data.result.map(row => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.Title}</td>
                    <td>{row.Registration_Number}</td>
                    <td>{row.Registration_Date}</td>
                    <td>{row.Language}</td>
                    <td>{row.Periodicity}</td>
                    <td>{row.Publisher}</td>
                    <td>{row.Owner}</td>
                    <td>{row.Publication_State}</td>
                    <td>{row.Publication_District}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10">No results found</td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

        {/* PAGINATION */}
        <div className="d-flex justify-content-center gap-2 mt-3">

          <button
            className="btn btn-outline-primary"
            disabled={form.page === 1}
            onClick={() => changePage(form.page - 1)}
          >
            Prev
          </button>

          {[...Array(data.total_pages).keys()]
            .slice(form.page - 1, form.page + 4)
            .map(i => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  className={`btn ${p === form.page
                      ? "btn-primary"
                      : "btn-outline-primary"
                    }`}
                  onClick={() => changePage(p)}
                >
                  {p}
                </button>
              );
            })}

          <button
            className="btn btn-outline-primary"
            disabled={form.page === data.total_pages}
            onClick={() => changePage(form.page + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}