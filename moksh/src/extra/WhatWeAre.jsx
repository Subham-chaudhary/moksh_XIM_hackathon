import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
export default function WhatWeAre() {
  return (
    <div className="bg-light min-vh-100">

      {/* INTERNAL CSS */}
      <style>{`
        .prgi-header {
          background: linear-gradient(to right, #385d81, #2f6fb3);
          color: white;
          padding: 45px 30px;
        }

        .content-box {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          margin-top: -40px;
        }

        .content-box h5 {
          font-weight: 600;
        }

        .content-box p {
          color: #444;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .highlight {
          color: #2f6fb3;
          font-weight: 600;
        }

        .hero-img {
          width: 100%;
          border-radius: 10px;
          margin: 20px 0;
        }

        /* subtle background pattern */
        .bg-pattern {
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          background: linear-gradient(120deg, #f4f7fb, #e6edf5);
        }

        .bg-pattern::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>

      {/* BACKGROUND */}
      <div className="bg-pattern"></div>

      {/* HEADER */}
      <div className="prgi-header position-relative">
        <h2 className="fw-bold">What We Are</h2>
        <p className="mb-0">Home &gt; About Us &gt; What We Are</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="container position-relative">

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="Team"
          className="hero-img"
        />

        {/* TEXT CONTENT */}
        <div className="content-box">

          <h5>
            Welcome to the official website of the Press Registrar General of India (PRGI)!
          </h5>

          <p>
            Previously known as the Registrar of Newspapers for India or RNI, 
            PRGI is a statutory body as per the{" "}
            <span className="highlight">
              Press and Registration of Periodicals Act, 2023
            </span>.
          </p>

          <p>
            At PRGI, we are committed to facilitating the allotment of titles 
            and registration of periodicals under the PRP Act, 2023, through an 
            online process on the{" "}
            <span className="highlight">Press Sewa Portal</span>.
          </p>

          <p>
            The important role of the print media, particularly newspapers, in 
            nurturing democracy is universally acknowledged. Newspapers play a 
            key role in projecting and analysing social issues and thereby play 
            a major role in social development.
          </p>

          <p>
            The print media in India has an illustrious history, and it continues 
            to play a vital role in keeping the public informed and engaged with 
            issues that concern them. We, as a body facilitating the registration 
            of periodicals in the country, are partners in the history as well as 
            the present development of India.
          </p>

          <p>
            Whether you are a publisher of a periodical, the owner of a printing 
            press, a media professional, a student of mass communication or an 
            aware and inquisitive citizen, we invite you to explore our website 
            for important updates and insights into the print media.
          </p>

        </div>
      </div>
      <Footer />
    </div>
  );
}