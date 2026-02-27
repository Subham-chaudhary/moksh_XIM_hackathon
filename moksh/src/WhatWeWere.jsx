import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function WhatWeWere() {
  return (
    <div className="bg-light min-vh-100">

      {/* 🔥 BACKGROUND */}
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
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(6px);
          border-radius: 12px;
          padding: 35px;
          margin-top: -40px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          position: relative;
          z-index: 2;
        }

        .section-title {
          color: #2f6fb3;
          font-weight: 700;
          font-size: 32px;
          margin-bottom: 20px;
        }

        .content-text {
          color: #333;
          line-height: 1.8;
          font-size: 15px;
        }

        /* 🔥 SAME BACKGROUND AS YOUR OTHER PAGES */
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
        <h2 className="fw-bold">What We Were</h2>
        <p className="mb-0">Home &gt; What We Were</p>
      </div>

      {/* CONTENT */}
      <div className="container">
        <div className="content-box">

          <h3 className="section-title">A Brief History</h3>

          <div className="content-text">

            <p>
              The origin of the Press Registrar General of India (PRGI) is
              inextricably linked to the rise of the print media in India.
            </p>

            <p>
              The nationalist press played a vital role in shaping public opinion
              and in channelizing the energy of people in India’s struggle for
              independence. Aware about the role of the print media in the freedom
              struggle, and the part it could continue to play in strengthening
              democracy, the Government of free India set up the First Press
              Commission in 1956.
            </p>

            <p>
              The commission was mandated to examine the state of the Press in
              India and to make recommendations for its all-round development in
              the long term.
            </p>

            <p>
              The Commission recommended the appointment of a Registrar of
              Newspapers. Accepting the recommendation, the Government amended
              the Press & Registration of Books Act, 1867, and established the
              Registrar of Newspapers for India (RNI).
            </p>

            <p>
              Until 1956, there was no central authority for the registration of
              periodicals in India. The registration record was maintained by the
              respective District Magistrates’ offices. The setting up of RNI
              changed that, making it the central authority responsible for
              maintaining records of newspapers and other periodicals.
            </p>

            <p>
              With its headquarters in New Delhi, the office of RNI changed many
              locations before moving to its current address at Soochna Bhawan.
              Regional offices were also established across India to support
              registration processes.
            </p>

            <p>
              At age 68, RNI was renamed. With the enactment of the Press &
              Registration of Periodicals Act, 2023, which came into force on
              March 1, 2024, the Press Registrar General of India (PRGI) was
              established as a modern statutory body.
            </p>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}