import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer className="custom-footer mt-5">
        <div className="container py-4 text-center">

          <div className="d-flex justify-content-center gap-4 flex-wrap fw-semibold">
            <span data-bs-toggle="modal" data-bs-target="#feedbackModal" className="footer-link">
              Feedback
            </span>
            <span data-bs-toggle="modal" data-bs-target="#policyModal" className="footer-link">
              Website Policy
            </span>
            <span data-bs-toggle="modal" data-bs-target="#faqModal" className="footer-link">
              FAQs
            </span>
            <span data-bs-toggle="modal" data-bs-target="#termsModal" className="footer-link">
              Terms & Conditions
            </span>
          </div>

          <div className="mt-3 small footer-copy">
            © 2026 Moksha Publications
          </div>

        </div>
      </footer>

      {/* ================= MODALS ================= */}

      {/* Feedback Modal */}
      <div className="modal fade" id="feedbackModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Feedback</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Write your feedback..."
              ></textarea>

              <h6>Previous Feedback:</h6>
              <ul>
                <li>Very user friendly portal.</li>
                <li>Registration process was smooth.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Website Policy Modal */}
      <div className="modal fade" id="policyModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Website Policy</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>All content is subject to government regulations.</li>
                <li>User data is securely protected.</li>
                <li>No misuse of information is permitted.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Modal */}
      <div className="modal fade" id="faqModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Frequently Asked Questions</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <p><strong>Q: How do I register a title?</strong></p>
              <p>A: Click on Register Titles and follow the process.</p>

              <p><strong>Q: Can I track my application?</strong></p>
              <p>A: Yes, via My Registrations section.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      <div className="modal fade" id="termsModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Terms & Conditions</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <ul>
                <li>Users must provide accurate information.</li>
                <li>Applications may be rejected if guidelines are violated.</li>
                <li>The authority reserves the right to cancel registrations.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* INTERNAL STYLING */}
      <style>{`
        .custom-footer {
          background: linear-gradient(to right, #385d81, #2f6fb3);
          color: white;
          position: relative;
          z-index: 2;
        }

        .footer-link {
          cursor: pointer;
          transition: 0.3s;
        }

        .footer-link:hover {
          text-decoration: underline;
          opacity: 0.85;
        }

        .footer-copy {
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}