import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [showMiddleTab, setShowMiddleTab] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  return (
    <div className="bg-white min-vh-100">

      {/* ================= TOP TOOLBAR ================= */}
      <div className="top-toolbar">
        <div className="container-fluid d-flex align-items-center justify-content-between py-3 px-4">

          {/* Logo + Name */}
          <div className="d-flex align-items-center gap-3">
            <img src="/logo.png" alt="Logo" width="120" height="100" />
            <h1 className="mb-0 fw-bold text-white brand-font">
              Moksha
            </h1>
          </div>

          {/* Navbar */}
          <nav className="d-none d-md-flex align-items-center gap-3 fs-5">

           <div className="position-relative">
  <span
    className="text-white fw-semibold nav-pop"
    style={{ cursor: "pointer" }}
    onClick={() => setShowAboutDropdown(!showAboutDropdown)}
  >
    About Us ▾
  </span>

 {showAboutDropdown && (
  <div
    className="position-absolute bg-white shadow rounded mt-2 about-dropdown"
    style={{ minWidth: "220px", zIndex: 2000 }}
  >
   <Link to="/about" className="dropdown-item py-2">
  What We Are
</Link>
<div className="about-divider"></div>

<Link to="/vision" className="dropdown-item py-2">
  What We Do
</Link>
<div className="about-divider"></div>

<Link to="/team" className="dropdown-item py-2">
  What We Were
</Link>
<div className="about-divider"></div>

<Link to="/history" className="dropdown-item py-2">
  Events
</Link>
<div className="about-divider"></div>

<Link to="/contact-info" className="dropdown-item py-2">
  Organization
</Link>
  </div>
)}</div>

           
           <div className="position-relative">
  <span
    className="text-white fw-semibold nav-pop"
    style={{ cursor: "pointer" }}
    onClick={() => setShowServicesDropdown(!showServicesDropdown)}
  >
    Our Services ▾
  </span>

  {showServicesDropdown && (
    <div
      className="position-absolute bg-white shadow rounded mt-2 about-dropdown"
      style={{ minWidth: "220px", zIndex: 2000 }}
    >
      <Link to="/period" className="dropdown-item py-2">
        Registration periodicity
      </Link>

      <div className="about-divider"></div>

      <Link to="/regular" className="dropdown-item py-2">
        Regularity
      </Link>

      <div className="about-divider"></div>

      <Link to="/news" className="dropdown-item py-2">
        News
      </Link>

      
    </div>
  )}
</div>

            {/* React Router Policy Link */}
            <Link
              to="/policy"
              target="_blank"
              className="text-decoration-none text-white fw-semibold nav-pop"
            >
              Policy
            </Link>

            <Link
  to="/connect"
  className="text-decoration-none text-white fw-semibold nav-pop"
>
  Connect With Us
</Link>

            {/* Search Button */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "42px", height: "42px" }}
            >
              <i className="bi bi-search"></i>
            </button>

          </nav>
        </div>
      </div>

      {/* ================= SEARCH BAR ================= */}
      {showSearch && (
        <div className="container-fluid bg-light border-bottom py-3">
          <div className="container d-flex justify-content-center">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search titles, publications..."
              autoFocus
            />
          </div>
        </div>
      )}

      <div style={{ height: "24px" }} />

      {/* ================= IMAGE SLIDER ================= */}
      <section className="container-fluid overflow-hidden py-4 bg-white">
        <div className="slider-track d-flex gap-3">
         <img src="/image1.jpg" className="slider-img" />
          <img src="/image2.webp" className="slider-img" />
          <img src="/image3.webp" className="slider-img" />
          <img src="/image4.jpg" className="slider-img" />
          <img src="/image1.jpg" className="slider-img" />
          <img src="/image2.webp" className="slider-img" />

          <img src="/image1.jpg" className="slider-img" />
          <img src="/image2.webp" className="slider-img" />
          <img src="/image3.webp" className="slider-img" />
          <img src="/image4.jpg" className="slider-img" />
          <img src="/image1.jpg" className="slider-img" />
          <img src="/image2.webp" className="slider-img" />
          

        </div>
      </section>

      {/* ================= THREE BUTTONS ================= */}
      <section className="container-fluid">
        <div className="row g-0 text-center position-relative">

          {/* Button 1 */}
          <div className="col-4 py-2 fw-bold fs-3 pop-hover prgi-bg button-divider button-left-rounded">
            <Link
  to="/register"
  className="text-decoration-none text-white d-block"
>
  Register Titles
</Link>
          </div>

          {/* Button 2 */}
          <div className="col-4 position-relative">
            <div
              className="py-2 fw-bold fs-3 pop-hover prgi-bg button-divider text-center"
              style={{ cursor: "pointer" }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Show Titles
            </div>

            {showDropdown && (
              <div
                className="position-absolute w-100 shadow bg-white text-center dropdown-animate"
                style={{
                  top: "100%",
                  left: 0,
                  zIndex: 1000,
                  borderRadius: "0 0 12px 12px"
                }}
              >
               <Link to="/registertitles" className="dropdown-item py-3">
  Registered Titles
</Link>

<Link to="/cancelled" className="dropdown-item py-3">
  Cancelled Titles
</Link>

<Link to="/defunct" className="dropdown-item py-3">
  Defunct Titles
</Link>
              </div>
            )}
          </div>

          {/* Button 3 */}
          <div
            className="col-4 py-2 fw-bold fs-3 pop-hover prgi-bg button-right-rounded"
            onClick={() => setShowMiddleTab(!showMiddleTab)}
            style={{ cursor: "pointer" }}
          >
            My Registrations
          </div>

        </div>
      </section>

      {/* ================= RECENT GOVERNMENT POLICIES ================= */}
      <section className="policy-bar-outline py-3 mt-4">
        <div className="container-fluid">

          <div className="text-center mb-2">
            <h5 className="fw-bold mb-0 policy-heading">
              Recent Government Policies
            </h5>
          </div>

          <div className="overflow-hidden">
            <div className="policy-scroll d-flex">
              {[
                "Digital Media Regulation Act 2026",
                "National Publishing Transparency Guidelines 2026",
                "Press Registration Amendment Policy 2026",
                "Digital Media Regulation Act 2026",
                "National Publishing Transparency Guidelines 2026",
                "Press Registration Amendment Policy 2026"
              ].map((policy, i) => (
                <span key={i} className="policy-item">
                  {policy}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= INLINE CONTENT ================= */}
      {showMiddleTab && (
        <section className="container my-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title fw-bold">
                How to File Annual Statement
              </h5>
              <p className="card-text text-muted">
                Step-by-step guide will appear here without changing the page.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ================= FOOTER ================= */}
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
    </div>
  );
}