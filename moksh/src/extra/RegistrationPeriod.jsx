import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function Registration() {
  return (
    <div className="min-vh-100">

      {/* 🔥 PREMIUM BACKGROUND */}
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
          margin-bottom: 15px;
        }

        .text-content {
          color: #333;
          line-height: 1.7;
          font-size: 15px;
        }

        .btn-prgi {
          background: linear-gradient(to right, #385d81, #174d8a);
          color: white;
          border: none;
          padding: 12px 28px;
          font-size: 16px;
          border-radius: 8px;
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
        <h2 className="fw-bold">Registration of Periodicals</h2>
        <p className="mb-0">
          Home &gt; Our Services &gt; Registration of Periodicals
        </p>
      </div>

      {/* CONTENT */}
      <div className="container">
        <div className="form-card">

          <p className="text-content">
            The Registration of periodicals in India has been simplified and streamlined with the online 
            <b> Press Sewa Portal</b>. The portal was set up after the 
            <b> Press and Registration of Periodicals Act, 2023</b>, which came into effect on 1st March, 2024.
          </p>

          <p className="text-content">
            Any citizen of India or a registered entity can bring out a periodical, provided that they meet the legal conditions.
            Every publisher must obtain a Certificate of Registration from the Press Registrar General.
          </p>

          <p className="text-content">
            The process begins with submitting an online application through the portal. The owner provides title preferences,
            appoints a publisher, and ensures printing press details are correctly registered.
          </p>

          <p className="text-content">
            After submission and fee payment, the application is reviewed by authorities. If all conditions are satisfied,
            the Certificate of Registration is issued.
          </p>

          <hr />

          <h3 className="section-title">Apply on Press Sewa Portal</h3>

          <p className="text-content">
            For more details or to apply on the <b>Press Sewa Portal</b>, click below:
          </p>

          <button className="btn btn-prgi mt-2">
            Go to Press Sewa Portal
          </button>

        </div>
      </div>
      <Footer />
    </div>
  );
}