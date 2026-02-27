import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FileText, User, MapPin } from "lucide-react";
import Footer from "./footer";
export default function RegisterTitle() {
  const [formData, setFormData] = useState({
    title: "",
    language: "",
    periodicity: "",
    owner: "",
    publisher: "",
    state: "",
    district: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-light min-vh-100">
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
    padding: 30px;
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
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .btn-prgi {
    background: linear-gradient(to right, #385d81, #174d8a);
    color: white;
    border: none;
    padding: 10px 30px;
    font-size: 16px;
    transition: 0.3s;
  }

  .btn-prgi:hover {
    background: linear-gradient(to right, #2f6fb3, #123a6b);
    transform: scale(1.05);
  }

  /* 🔥 PREMIUM BACKGROUND */

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

  /* subtle grid pattern */
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
        <h2 className="fw-bold d-flex align-items-center gap-2">
          <FileText size={28} /> Register Title
        </h2>
        <p className="mb-0">Home &gt; Register Title</p>
      </div>

      {/* FORM */}
      <div className="container">
        <form onSubmit={handleSubmit} className="form-card">

          {/* SECTION 1 */}
          <div className="mb-4">
            <h5 className="section-title">
              <FileText size={18} /> Publication Details
            </h5>

            <div className="row g-3">
              <Input label="Title Name" name="title" value={formData.title} onChange={handleChange} />
              <Input label="Language" name="language" value={formData.language} onChange={handleChange} />

              <div className="col-md-6">
                <label className="form-label">Periodicity</label>
                <select
                  name="periodicity"
                  value={formData.periodicity}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                </select>
              </div>
            </div>
          </div>

          {/* SECTION 2 */}
          <div className="mb-4">
            <h5 className="section-title">
              <User size={18} /> Owner & Publisher
            </h5>

            <div className="row g-3">
              <Input label="Owner Name" name="owner" value={formData.owner} onChange={handleChange} />
              <Input label="Publisher Name" name="publisher" value={formData.publisher} onChange={handleChange} />
            </div>
          </div>

          {/* SECTION 3 */}
          <div className="mb-4">
            <h5 className="section-title">
              <MapPin size={18} /> Location Details
            </h5>

            <div className="row g-3">
              <Input label="State" name="state" value={formData.state} onChange={handleChange} />
              <Input label="District" name="district" value={formData.district} onChange={handleChange} />
            </div>
          </div>

          {/* SUBMIT */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-prgi">
               Submit Registration
            </button>
          </div>

        </form>
      </div>
      <Footer />
    </div>
  );
}

/* 🔹 Reusable Input */
function Input({ label, name, value, onChange }) {
  return (
    <div className="col-md-6">
      <label className="form-label">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        className="form-control"
        required
      />
      
    </div>
  );
}