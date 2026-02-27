import { useState } from "react";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DefunctTitles() {
  const [form, setForm] = useState({
    title: "",
    regNo: "",
    owner: "",
    state: "",
    district: "",
    language: "",
    items: 10,
  });

  const data = [
    {
      id: 1,
      title: "168 GHANTE",
      regNo: "UPHIN/2009/30619",
      owner: "AVINASH CHANDRA SADH",
      publisher: "AVINASH CHANDRA SADH",
      language: "Hindi",
      periodicity: "Weekly",
      state: "Uttar Pradesh",
      district: "Lucknow",
    },
    {
      id: 2,
      title: "2001 INCORPORATING SCIENCE TODAY",
      regNo: "11542",
      owner: "BENNETT, COLEMAN & CO. LTD",
      publisher: "PRITISH NANDY",
      language: "English",
      periodicity: "Monthly",
      state: "Maharashtra",
      district: "Mumbai",
    },
  ];

  return (
    <div style={{ background: "#eef3f8" }} className="min-vh-100">

      {/* TOP BAR */}
      <div style={{
        background: "linear-gradient(135deg,#385d81,#1f344a)",
        color: "white",
        padding: "22px",
        textAlign: "center",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        letterSpacing: "1px"
      }}>
        <h4 className="m-0 fw-semibold">PUBLICATION REGISTRY PORTAL</h4>
        <small style={{ opacity: .85 }}>Government Records Interface</small>
      </div>

      {/* PAGE TITLE */}
      <div className="container mt-4">
        <h5 className="fw-bold text-secondary">Defunct Titles</h5>
      </div>

      {/* FILTER CARD */}
      <div className="container mt-3">
        <div style={{
          background: "white",
          padding: "25px",
          borderRadius: "14px",
          boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
          border: "1px solid #dce6ef"
        }}>
          <div className="row g-3 align-items-end">

            {[
              ["Title","title"],
              ["Registration Number","regNo"],
              ["Owner","owner"],
              ["State","state"],
              ["District","district"],
              ["Language","language"]
            ].map(([label,key]) => (
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
              <label className="form-label fw-semibold">Items</label>
              <input
                type="number"
                className="form-control"
                value={form.items}
                onChange={e=>setForm({...form,items:e.target.value})}
              />
            </div>

            <div className="col-md-1">
              <button className="btn w-100" style={{
                background:"#385d81",
                color:"white",
                fontWeight:600
              }}>Search</button>
            </div>

          </div>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="container mt-4">

        {/* EXPORT BUTTONS */}
        <div className="mb-3 d-flex gap-2 flex-wrap">
          {["Copy","CSV","Excel","PDF","Print"].map(b=>(
            <button key={b} className="btn btn-sm" style={{
              background:"#385d81",
              color:"white",
              fontWeight:600
            }}>{b}</button>
          ))}
        </div>

        {/* SEARCH BOX */}
        <div className="d-flex justify-content-end mb-3">
          <input className="form-control" style={{ maxWidth:"280px" }} placeholder="Search records" />
        </div>

        {/* TABLE */}
        <div className="table-responsive" style={{
          background:"white",
          borderRadius:"14px",
          boxShadow:"0 4px 14px rgba(0,0,0,0.1)",
          overflow:"hidden"
        }}>

          <table className="table table-bordered align-middle text-center m-0">
            <thead style={{ background:"#385d81", color:"white" }}>
              <tr>
                <th>SN.</th>
                <th>Title</th>
                <th>Registration Number</th>
                <th>Owner</th>
                <th>Publisher</th>
                <th>Language</th>
                <th>Periodicity</th>
                <th>State</th>
                <th>District</th>
              </tr>
            </thead>

            <tbody>
              {data.map(row=>(
                <tr key={row.id} style={{ borderBottom:"1px solid #e6edf3" }}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.regNo}</td>
                  <td>{row.owner}</td>
                  <td>{row.publisher}</td>
                  <td>{row.language}</td>
                  <td>{row.periodicity}</td>
                  <td>{row.state}</td>
                  <td>{row.district}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      <Footer />
    </div>
  );
}