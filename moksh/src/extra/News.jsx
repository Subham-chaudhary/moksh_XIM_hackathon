import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function NewsprintAuth() {
  return (
    <div className="bg-light min-vh-100">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="animated-bg"></div>

      {/* INTERNAL CSS */}
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
          padding: 35px;
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
          margin-bottom: 20px;
        }

        .content-text {
          color: #444;
          line-height: 1.7;
          font-size: 15px;
        }

        .btn-prgi {
          background: linear-gradient(to right, #385d81, #174d8a);
          color: white;
          border: none;
          padding: 10px 25px;
          font-size: 15px;
          border-radius: 6px;
          transition: 0.3s;
        }

        .btn-prgi:hover {
          background: linear-gradient(to right, #2f6fb3, #123a6b);
          transform: scale(1.05);
        }

        .badge-lang {
          background: #6c757d;
          color: white;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 12px;
          margin-left: 10px;
        }

        /* 🔥 Animated BG */
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
        <h2 className="fw-bold">
          Authentication of Self Declaration Certificates for Newsprint Import
        </h2>
        <p>
          Home &gt; Our Services &gt; Authentication of Self Declaration Certificates
        </p>
      </div>

      {/* CONTENT */}
      <div className="container mt-4">

        <div className="form-card">

          <h3 className="section-title">
            Authentication of Self Declaration Certificates
          </h3>

          <p className="content-text">
            Format of Self-declaration certificate by Publisher/Owner for import of Newsprint.
          </p>

          <p className="content-text">
            I, __________ Son/Daughter/Wife of __________ resident of __________ 
            do hereby certify that I am the publisher/owner of __________ 
            registered with PRGI and fulfill all required conditions.
          </p>

          <p className="content-text">
            I solemnly affirm that the publication has imported newsprint 
            and consumed the required quantity as per guidelines.
          </p>

          <p className="content-text">
            I further certify that all information provided is true and correct.
          </p>

          <hr />

          <h5 className="section-title">
            Authentication by PRGI / Designated Officer
          </h5>

          <p className="content-text">
            Certified that the publication holds valid registration 
            and complies with DGFT guidelines.
          </p>

          <hr />

          <h5 className="section-title">
            Letter of Authority Format
          </h5>

          <p className="content-text">
            I hereby authorize __________ to submit documents on my behalf 
            for authentication to PRGI/PIB office.
          </p>

          {/* DOWNLOAD BUTTON */}
          <div className="mt-4">
            <button className="btn btn-prgi">
              Download (117.9 KB) 📄
            </button>

            <span className="badge-lang">PDF Language: English</span>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}