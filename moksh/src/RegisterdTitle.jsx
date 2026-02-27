import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function RegisteredTitles() {
  const [data] = useState([
    {
      id: 1,
      title: "A",
      regNo: "34415",
      date: "10-04-1982",
      language: "Bengali",
      periodicity: "Quarterly",
      publisher: "SATARUPA SANYAL",
      owner: "SATARUPA SANYAL",
      state: "West Bengal",
      district: "Kolkata",
    },
    {
      id: 2,
      title: "A & D",
      regNo: "MAHENG/2010/34602",
      date: "03-12-2010",
      language: "English",
      periodicity: "Bimonthly",
      publisher: "DHIRAJ BHALERAO",
      owner: "PUBLISH INDUSTRY INDIA PVT LTD",
      state: "Maharashtra",
      district: "Pune",
    },
  ]);

  return (
    <div className="bg-light min-vh-100">

      {/* 🔥 BACKGROUND */}
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
          border: none;
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
        <h2 className="fw-bold">Registered Titles</h2>
        <p className="mb-0">Home &gt; Registered Titles</p>
      </div>

      {/* FILTER */}
      <div className="container mt-4">
        <div className="filter-box row g-3 align-items-end">

          <div className="col-md-3">
            <input className="form-control" placeholder="Enter Title" />
          </div>

          <div className="col-md-3">
            <input className="form-control" placeholder="Enter Registration Number" />
          </div>

          <div className="col-md-3">
            <input className="form-control" placeholder="Enter Owner" />
          </div>

          <div className="col-md-3">
            <input className="form-control" placeholder="Enter Publication State" />
          </div>

          <div className="col-md-3">
            <input className="form-control" placeholder="Enter Publication District" />
          </div>

          <div className="col-md-3">
            <input className="form-control" placeholder="Enter Language" />
          </div>

          <div className="col-md-2">
            <input type="number" className="form-control" placeholder="Records" />
          </div>

          <div className="col-md-1">
            <button className="btn btn-prgi w-100">Search</button>
          </div>

        </div>
      </div>

      {/* TABLE */}
      <div className="container mt-4 table-wrapper">

        {/* Export Buttons */}
        <div className="mb-3 d-flex gap-2 flex-wrap">
          {["Copy", "CSV", "Excel", "PDF", "Print"].map((btn) => (
            <button key={btn} className="btn btn-prgi btn-sm">
              {btn}
            </button>
          ))}
        </div>

        {/* Global Search */}
        <div className="d-flex justify-content-end mb-3">
          <input
            className="form-control search-box"
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
                <th>Registration Date</th>
                <th>Language</th>
                <th>Periodicity</th>
                <th>Publisher</th>
                <th>Owner</th>
                <th>Publication State</th>
                <th>Publication District</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.title}</td>
                  <td>{row.regNo}</td>
                  <td>{row.date}</td>
                  <td>{row.language}</td>
                  <td>{row.periodicity}</td>
                  <td>{row.publisher}</td>
                  <td>{row.owner}</td>
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