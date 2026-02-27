import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function Regularity() {
  return (
    <div className="min-vh-100">

      {/* 🔥 BACKGROUND */}
      <div className="animated-bg"></div>

      {/* CSS */}
      <style>{`
        .prgi-header {
          background: linear-gradient(to right, #385d81, #2f6fb3);
          color: white;
          padding: 50px 30px;
          position: relative;
          z-index: 2;
        }

        .form-card {
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          border-radius: 12px;
          padding: 35px;
          box-shadow: 0 10px 35px rgba(0,0,0,0.08);
          margin-top: -40px;
          position: relative;
          z-index: 2;
          transition: 0.3s ease;
        }

        .form-card:hover {
          transform: translateY(-3px);
        }

        .section-title {
          color: #385d81;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .text-content {
          color: #333;
          line-height: 1.7;
          font-size: 15px;
          margin-bottom: 15px;
        }

        /* 🔥 BACKGROUND ANIMATION */
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
        <h2 className="fw-bold">Regularity of Periodicals</h2>
        <p className="mb-0">
          Home &gt; Our Services &gt; Regularity of Periodicals
        </p>
      </div>

      {/* CONTENT */}
      <div className="container">
        <div className="form-card">

          <h2 className="section-title">Regularity of Periodicals</h2>

          <p className="text-content">
            Under the PRP Act, all publishers must submit a copy of their published 
            newspaper/periodical to the PRG office or their nearest PIB office within 
            48 hours. Using the online submission facility provided under the new Act, 
            publishers can submit a photo of the published copy on the Press Sewa Portal 
            and later take the original copy to the PRG office or PIB office for verification.
          </p>

          <p className="text-content">
            Publishers should note that it is necessary to maintain regularity above the 
            50% limit. Under the new PRP Act, if the regularity of any publication is not 
            above 50%, then it can be suspended and even cancelled.
          </p>

          <p className="text-content">
            Regular copy submission also provides other related benefits to the publisher. 
            The number of published copies indicated in the regularity can be taken directly 
            in the annual statement so that publishers will not need to fill in the facts 
            again in the annual statement, and this regularity will also be checked at the 
            time of circulation verification.
          </p>

          <p className="text-content">
            Approval of application for Circulation Verification will be given only on the 
            basis of regularity. Along with this, any kind of report/certification related 
            to Newsprint will be issued keeping the regularity in mind.
          </p>

        </div>
      </div>
      <Footer />
    </div>
  );
}