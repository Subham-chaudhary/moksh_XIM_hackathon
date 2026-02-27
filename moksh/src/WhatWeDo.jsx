import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function WhatWeDo() {
  return (
    <div className="min-vh-100 position-relative">

      {/* 🔥 PREMIUM BACKGROUND */}
      <div className="animated-bg"></div>

      {/* INTERNAL CSS */}
      <style>{`
        .prgi-header {
          background: linear-gradient(to right, #385d81, #2f6fb3);
          color: white;
          padding: 50px 30px;
          position: relative;
          z-index: 2;
        }

        .content-box {
          position: relative;
          z-index: 2;
          padding: 40px;
          background: rgba(255,255,255,0.95);
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          margin-top: -40px;
        }

        .section-title {
          color: #2f6fb3;
          font-weight: 600;
          margin-top: 25px;
        }

        .content-text {
          color: #333;
          line-height: 1.7;
          font-size: 15px;
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
        <h2 className="fw-bold">What We Do</h2>
        <p className="mb-0">Home &gt; About Us &gt; What We Do</p>
      </div>

      {/* CONTENT */}
      <div className="container mt-4">
        <div className="content-box">

          {/* SECTION 1 */}
          <h4 className="section-title">
            Receive Intimation by the Printer / Printing Press
          </h4>
          <p className="content-text">
            As per section 3 of the PRP Act, the printer of a periodical shall,
            within thirty days of starting a printing press, send intimation on
            the Press Sewa Portal. Documents specified must be submitted to both
            the Press Registrar General and the concerned authority.
          </p>

          <p className="content-text">
            Any changes in the submitted details must be updated accordingly
            through the portal.
          </p>

          {/* SECTION 2 */}
          <h4 className="section-title">
            Grant Certificate of Registration to a Periodical
          </h4>
          <p className="content-text">
            Publishers must apply online via the Press Sewa Portal along with
            required documents and fees. Applications are reviewed, and if all
            conditions are satisfied, a certificate is issued.
          </p>

          <p className="content-text">
            If deficiencies exist, applicants must correct them within the
            specified timeframe.
          </p>

          {/* SECTION 3 */}
          <h4 className="section-title">
            Revision in Registration Particulars
          </h4>
          <ul className="content-text">
            <li>Language of the periodical</li>
            <li>Title of the periodical</li>
            <li>Editor details</li>
            <li>Printing press details</li>
            <li>Place of publication</li>
            <li>Periodicity</li>
          </ul>

          {/* SECTION 4 */}
          <h4 className="section-title">
            Transfer of Ownership of a Periodical
          </h4>
          <p className="content-text">
            Ownership can be transferred by applying through the Press Sewa
            Portal with required documents and fees. Approval is granted after
            verification.
          </p>

          {/* SECTION 5 */}
          <h4 className="section-title">
            Delivery of Copies of Periodicals
          </h4>
          <p className="content-text">
            Publishers must upload electronic copies and submit physical copies
            within prescribed timelines to ensure compliance.
          </p>

          {/* SECTION 6 */}
          <h4 className="section-title">Annual Statement</h4>
          <p className="content-text">
            All registered publications must submit an annual statement by 31st
            May each year.
          </p>

          {/* SECTION 7 */}
          <h4 className="section-title">Circulation Verification</h4>
          <p className="content-text">
            PRGI may verify circulation figures through audits and inspections
            to ensure authenticity.
          </p>

          {/* SECTION 8 */}
          <h4 className="section-title">
            Facsimile Edition of a Foreign Periodical
          </h4>
          <p className="content-text">
            Entities may apply for facsimile editions through proper approval
            channels under government guidelines.
          </p>

          {/* SECTION 9 */}
          <h4 className="section-title">
            Suspension and Cancellation of a Periodical
          </h4>
          <p className="content-text">
            Registration may be suspended or cancelled if guidelines are
            violated, false information is provided, or compliance is not met.
          </p>

        </div>
      </div>
      <Footer />
    </div>
  );
}