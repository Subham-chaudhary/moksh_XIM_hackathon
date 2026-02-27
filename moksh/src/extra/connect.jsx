import Footer from "./footer";
export default function Connect() {
  return (
    <div className="bg-white min-vh-100">

      {/* Header Section */}
      <div className="prgi-header text-white py-5" style={{ background: "#385d81" }}>
        <div className="container">
          <h2 className="fw-bold">Connect With Us</h2>
          <p>We are here to assist you.</p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="container py-5">

        <div className="row g-4">

          <div className="col-md-6">
            <h5 className="fw-bold" style={{ color: "#385d81" }}>Office Address</h5>
            <p>
              Moksha Publications<br />
              Ministry of Information & Broadcasting<br />
              New Delhi, India
            </p>
          </div>

          <div className="col-md-6">
            <h5 className="fw-bold" style={{ color: "#385d81" }}>Contact Details</h5>
            <p>Email: support@moksha.gov.in</p>
            <p>Phone: +91 1234567890</p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="mt-5">
          <h5 className="fw-bold mb-3" style={{ color: "#385d81" }}>
            Send Us a Message
          </h5>

          <form className="w-75">
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>

            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
            </div>

            <button className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

      </div>
<Footer />
    </div>
  );
}