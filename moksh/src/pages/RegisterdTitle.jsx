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
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [form.page, form.limit]);

  const applyFilters = () => {
    setForm(prev => ({ ...prev, page: 1 }));
    setTimeout(fetchData, 0);
  };

  const changePage = p => {
    if (p >= 1 && p <= data.total_pages) {
      setForm(prev => ({ ...prev, page: p }));
    }
  };

  return (
    <div style={{ background: "#eef3f8" }} className="min-vh-100">

      {/* TOP HEADER */}
      <div style={{
        background: "linear-gradient(135deg,#385d81,#1f344a)",
        color: "white",
        padding: "22px",
        textAlign: "center",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        letterSpacing: "1px"
      }}>
        <h4 className="m-0 fw-semibold">PUBLICATION REGISTRY PORTAL</h4>
        <small style={{ opacity: .85 }}>Government Registration Interface</small>
      </div>

      {/* PAGE TITLE */}
      <div className="container mt-4">
        <h5 className="fw-bold text-secondary">Registered Titles</h5>
      </div>

      {/* FILTER CARD */}
      <div className="container mt-3">
        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "14px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
          border: "1px solid #dce6ef"
        }} className="row g-3">

          {[
            ["Title","title"],
            ["Registration Number","rnum"],
            ["Owner","owner"],
            ["State","state"],
            ["District","district"],
            ["Language","language"]
          ].map(([label,key])=>(
            <div className="col-md-3" key={key}>
              <label className="form-label fw-semibold">{label}</label>
              <input
                className="form-control"
                value={form[key]}
                onChange={e=>setForm({...form,[key]:e.target.value})}
              />
            </div>
          ))}

          <div className="col-md-2">
            <label className="form-label fw-semibold">Records</label>
            <select
              className="form-select"
              value={form.limit}
              onChange={e=>setForm({...form,limit:Number(e.target.value)})}
            >
              {[10,20,50,100].map(n=>(<option key={n}>{n}</option>))}
            </select>
          </div>

          <div className="col-md-1 d-grid">
            <button
              className="btn"
              style={{ background:"#385d81", color:"white", fontWeight:600 }}
              onClick={applyFilters}
            >Search</button>
          </div>

        </div>
      </div>

      {/* TABLE */}
      <div className="container mt-4">

        <p className="text-muted fw-semibold">
          Page {form.page} of {data.total_pages} | Total Records: {data.total_rows}
        </p>

        <div className="table-responsive" style={{
          background:"white",
          borderRadius:"14px",
          boxShadow:"0 4px 14px rgba(0,0,0,0.1)",
          overflow:"hidden"
        }}>

          <table className="table table-bordered align-middle text-center m-0">
            <thead style={{ background:"#385d81", color:"white" }}>
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
                <tr><td colSpan="10">Loading...</td></tr>
              ) : data.result.length>0 ? (
                data.result.map(row=>(
                  <tr key={row.id} style={{ borderBottom:"1px solid #e6edf3" }}>
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
                <tr><td colSpan="10">No results found</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div className="d-flex justify-content-center gap-2 mt-3 flex-wrap">

          <button
            className="btn btn-outline-secondary"
            disabled={form.page===1}
            onClick={()=>changePage(form.page-1)}
          >Prev</button>

          {[...Array(data.total_pages).keys()]
            .slice(form.page-1,form.page+4)
            .map(i=>{
              const p=i+1;
              return(
                <button
                  key={p}
                  className="btn"
                  style={{
                    background:p===form.page?"#385d81":"white",
                    color:p===form.page?"white":"#385d81",
                    border:"1px solid #385d81",
                    fontWeight:600,
                    minWidth:"42px"
                  }}
                  onClick={()=>changePage(p)}
                >{p}</button>
              );
            })}

          <button
            className="btn btn-outline-secondary"
            disabled={form.page===data.total_pages}
            onClick={()=>changePage(form.page+1)}
          >Next</button>

        </div>
      </div>

      <Footer />
    </div>
  );
}