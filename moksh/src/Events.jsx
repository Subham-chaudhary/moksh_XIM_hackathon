import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function Events() {
  const events = [
    { year: "2023", name: "Vigilance Awareness Week" },
    { year: "2023", name: "Rastriya Ekta Diwas" },
    { year: "2023", name: "Swachta Abhiyan" },
  ];

  return (
    <div className="min-vh-100 position-relative">

      {/* 🔥 ANIMATED BACKGROUND */}
      <div className="animated-bg"></div>

      {/* CSS */}
      <style>{`
        .prgi-header {
          background: linear-gradient(to right, #385d81, #2f6fb3);
          color: white;
          padding: 45px 30px;
          position: relative;
          z-index: 2;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          margin-top: -40px;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }

        .form-card:hover {
          transform: translateY(-3px);
        }

        .section-title {
          color: #385d81;
          font-weight: 600;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .table-prgi thead {
          background: linear-gradient(to right, #385d81, #174d8a);
          color: white;
        }

        .table-prgi tbody tr:nth-child(even) {
          background-color: #f5f7fa;
        }

        .btn-prgi {
          background: linear-gradient(to right, #385d81, #174d8a);
          color: white;
          border: none;
          padding: 10px 30px;
          font-size: 16px;
          border-radius: 25px;
          transition: 0.3s;
        }

        .btn-prgi:hover {
          background: linear-gradient(to right, #2f6fb3, #123a6b);
          transform: scale(1.05);
        }

        /* 🔥 BACKGROUND */
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
      `}</style>

      {/* HEADER */}
      <div className="prgi-header">
        <h2 className="fw-bold">Events</h2>
        <p className="mb-0">Home &gt; About Us &gt; Events</p>
      </div>

      {/* CONTENT */}
      <div className="container">

        <div className="form-card">

          <h3 className="section-title">📅 List of Events</h3>

          <div className="table-responsive">
            <table className="table table-bordered table-prgi">
              <thead>
                <tr>
                  <th style={{ width: "120px" }}>Year</th>
                  <th>Events</th>
                </tr>
              </thead>

              <tbody>
                {events.map((e, i) => (
                  <tr key={i}>
                    <td>{e.year}</td>
                    <td>{e.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button className="btn btn-prgi mt-3">
            Archived Events →
          </button>

        </div>
      </div>
      <Footer />
    </div>
  );
}