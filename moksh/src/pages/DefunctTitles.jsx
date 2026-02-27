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
    <div className="bg-light min-vh-100">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="animated-bg"></div>

      {/* INTERNAL CSS */}
      <style>{`
        .animated-bg {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          background: linear-gradient(120deg, #f4f7fb, #e6edf5, #f4f7fb);
          background-size: 200% 200%;
          animation: gradientMove 12s ease infinite;
        }

        .animated-bg::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .prgi-header {
          background: linear-gradient(to right, #385d81, #2f6fb3);
          color: white;
          padding: 45px 30px;
          position: relative;
          z-index: 2;
        }

        .filter-box {
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          padding: 25px;
          position: relative;
          z-index: 2;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }

        .btn-prgi {
          background: linear-gradient(to right, #385d81, #174d8a);
          color: white;
          border-radius: 6px;
          transition: 0.3s;
        }

        .btn-prgi:hover {
          background: linear-gradient(to right, #2f6fb3, #123a6b);
          transform: scale(1.05);
        }

        .table-wrapper {
          position: relative;
          z-index: 2;
        }

        .table-prgi thead {
          background-color: #385d81;
          color: white;
          text-align: center;
        }

        .table-prgi tbody td {
          text-align: center;
          vertical-align: middle;
        }

        .table-prgi tbody tr:nth-child(even) {
          background-color: #f8f9fb;
        }

        .table-prgi tbody tr:hover {
          background-color: #eef4ff;
        }

        .search-box {
          width: 280px;
        }
      `}</style>

      {/* HEADER */}
      <div className="prgi-header">
        <h2 className="fw-bold">Defunct Titles</h2>
        <p className="mb-0">Home &gt; Our Services &gt; Defunct Titles</p>
      </div>

      {/* FILTER */}
      <div className="container mt-4">
        <div className="filter-box">
          <div className="row g-3 align-items-end">

            <div className="col-md-3">
              <label className="form-label fw-semibold">Title</label>
              <input className="form-control" placeholder="Enter Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">Registration Number</label>
              <input className="form-control" placeholder="Enter Registration Number"
                value={form.regNo}
                onChange={(e) => setForm({ ...form, regNo: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">Owner</label>
              <input className="form-control" placeholder="Enter Owner"
                value={form.owner}
                onChange={(e) => setForm({ ...form, owner: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">State</label>
              <input className="form-control" placeholder="Enter State"
                value={form.state}
                onChange={(e) => setForm({ ...form, state: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">District</label>
              <input className="form-control" placeholder="Enter District"
                value={form.district}
                onChange={(e) => setForm({ ...form, district: e.target.value })}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold">Language</label>
              <input className="form-control" placeholder="Enter Language"
                value={form.language}
                onChange={(e) => setForm({ ...form, language: e.target.value })}
              />
            </div>

            <div className="col-md-2">
              <label className="form-label fw-semibold">Items</label>
              <input type="number" className="form-control"
                value={form.items}
                onChange={(e) => setForm({ ...form, items: e.target.value })}
              />
            </div>

            <div className="col-md-1">
              <button className="btn btn-prgi w-100">Search</button>
            </div>

          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="container mt-4 table-wrapper">

        {/* Buttons */}
        <div className="mb-3 d-flex gap-2 flex-wrap">
          {["Copy", "CSV", "Excel", "PDF", "Print"].map((btn) => (
            <button key={btn} className="btn btn-prgi btn-sm">{btn}</button>
          ))}
        </div>

        {/* Search */}
        <div className="d-flex justify-content-end mb-3">
          <input className="form-control search-box"
            placeholder="Type to search all records"
          />
        </div>

        {/* Table */}
        <div className="table-responsive shadow rounded">
          <table className="table table-bordered table-prgi">
            <thead>
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
              {data.map((row) => (
                <tr key={row.id}>
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