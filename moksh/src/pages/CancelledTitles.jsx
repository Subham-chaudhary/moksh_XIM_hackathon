import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../extra/footer";

export default function CancelledTitles() {
  const [form, setForm] = useState({
    title: "",
    rnum: "",
    language: "",
    page: 1,
    limit: 10,
  });

  const [data, setData] = useState({
    result: [],
    total_pages: 1,
    total_rows: 0,
  });

  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);

    const query = new URLSearchParams(form).toString();

    fetch(`http://127.0.0.1:5000/cancelled?${query}`)
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
    <div style={{ background: "#eef3f8" }} className="min-vh-100">

      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(135deg,#385d81,#1f344a)",
          color: "white",
          padding: "20px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          letterSpacing: "1px"
        }}
      >
        <h3 style={{ margin: 0, fontWeight: 600 }}>CANCELLED TITLES DIRECTORY</h3>
        <small style={{ opacity: 0.85 }}>Official Registry Records</small>
      </div>

      {/* FILTER PANEL */}
      <div className="container mt-4">
        <div
          className="p-3 rounded-4"
          style={{
            background: "white",
            boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
            border: "1px solid #d9e2ec"
          }}
        >
          <div className="row g-3">

            <div className="col-md-3">
              <label className="fw-semibold">Title</label>
              <input
                className="form-control"
                value={form.title}
                onChange={e => setForm({ ...form, title: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <label className="fw-semibold">Registration No</label>
              <input
                className="form-control"
                value={form.rnum}
                onChange={e => setForm({ ...form, rnum: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <label className="fw-semibold">Language</label>
              <input
                className="form-control"
                value={form.language}
                onChange={e => setForm({ ...form, language: e.target.value })}
              />
            </div>

            <div className="col-md-2">
              <label className="fw-semibold">Records</label>
              <select
                className="form-select"
                value={form.limit}
                onChange={e => setForm({ ...form, limit: Number(e.target.value) })}
              >
                {[10, 20, 50, 100].map(n => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>

            <div className="col-md-1 d-grid">
              <button
                onClick={applyFilters}
                className="btn"
                style={{
                  background: "#385d81",
                  color: "white",
                  fontWeight: 600
                }}
              >
                Go
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="container mt-4">

        <p className="text-muted fw-semibold">
          Page {form.page} of {data.total_pages} | Total Records: {data.total_rows}
        </p>

        <div className="table-responsive">
          <table className="table text-center align-middle" style={{ background: "white" }}>

            <thead
              style={{
                background: "#385d81",
                color: "white"
              }}
            >
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Reg No</th>
                <th>Language</th>
                <th>Periodicity</th>
                <th>State</th>
                <th>District</th>
                <th>Owner</th>
                <th>Publisher</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="9">Loading...</td>
                </tr>
              ) : data.result.length > 0 ? (
                data.result.map(row => (
                  <tr key={row.id} style={{ borderBottom: "1px solid #e6edf3" }}>
                    <td>{row.id}</td>
                    <td>{row.Title}</td>
                    <td>{row.Registration_Number}</td>
                    <td>{row.Language}</td>
                    <td>{row.Periodicity}</td>
                    <td>{row.State}</td>
                    <td>{row.District}</td>
                    <td>{row.Owner}</td>
                    <td>{row.Publisher}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">No results</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">

          <button
            className="btn btn-outline-secondary"
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
                  className="btn"
                  style={{
                    background: p === form.page ? "#385d81" : "white",
                    color: p === form.page ? "white" : "#385d81",
                    border: "1px solid #385d81",
                    fontWeight: 600,
                    minWidth: "42px"
                  }}
                  onClick={() => changePage(p)}
                >
                  {p}
                </button>
              );
            })}

          <button
            className="btn btn-outline-secondary"
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