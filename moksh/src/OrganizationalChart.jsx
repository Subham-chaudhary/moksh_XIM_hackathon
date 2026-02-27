import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function OrganizationalChart() {
  return (
    <div className="bg-light min-vh-100">

      {/* 🔥 INTERNAL CSS */}
      <style>{`
        .prgi-header {
          background: linear-gradient(to right, #385d81, #2f6fb3);
          color: white;
          padding: 45px 30px;
        }

        .section-title {
          color: #2f6fb3;
          font-weight: 600;
          margin-top: 40px;
          margin-bottom: 30px;
        }

        /* 🔷 BACKGROUND */
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

        /* 🔷 CHART STYLING */
        .org-box {
          background: #3f6298;
          color: white;
          padding: 15px 20px;
          border-radius: 8px;
          text-align: center;
          font-weight: 500;
          min-width: 220px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .line {
          width: 2px;
          height: 40px;
          background: #3f6298;
          margin: auto;
        }

        .horizontal-line {
          height: 2px;
          background: #3f6298;
          width: 100%;
        }

        .chart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .row-center {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
        }
      `}</style>

      {/* 🔷 BACKGROUND */}
      <div className="animated-bg"></div>

      {/* 🔷 HEADER */}
      <div className="prgi-header position-relative" style={{zIndex: 2}}>
        <h2 className="fw-bold">Organizational Chart</h2>
        <p>Home &gt; About Us &gt; Organizational Chart</p>
      </div>

      {/* 🔷 CONTENT */}
      <div className="container text-center position-relative" style={{zIndex: 2}}>

        <h2 className="section-title">Organizational Structure</h2>

        {/* LEVEL 1 */}
        <div className="org-box">Press Registrar General</div>
        <div className="line"></div>

        {/* LEVEL 2 */}
        <div className="org-box">Additional Press Registrar General</div>
        <div className="line"></div>

        {/* LEVEL 3 */}
        <div className="row-center mt-3">
          <div className="org-box">Deputy Press Registrar General</div>
          <div className="org-box">Deputy Press Registrar General</div>
        </div>

        <div className="line"></div>

        {/* LEVEL 4 */}
        <div className="row-center mt-3">
          <div className="org-box">Assistant Press Registrars General</div>
          <div className="org-box">Assistant Press Registrars General</div>
          <div className="org-box">Assistant Press Registrars General</div>
          <div className="org-box">Assistant Press Registrars General</div>
        </div>

      </div>
      <Footer />
    </div>
  );
}