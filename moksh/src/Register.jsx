import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FileText, User, MapPin } from "lucide-react";
import Footer from "./extra/footer";

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

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [apiResult, setApiResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setApiResult(null);

    try {
      const res = await fetch("http://127.0.0.1:5000/registertitle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Registration successful");
        setFormData({
          title: "",
          language: "",
          periodicity: "",
          owner: "",
          publisher: "",
          state: "",
          district: "",
        });
      } else {
        setMessage(data?.error || "❌ Failed");
        setApiResult(data?.results || null);
      }
    } catch (err) {
      setMessage("❌ Server error");
    }

    setLoading(false);
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="animated-bg"></div>

      {/* LOADING SPINNER */}
      {loading && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25"
          style={{ zIndex: 9999 }}
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "4rem", height: "4rem" }}
          />
        </div>
      )}

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

          {/* MESSAGE */}
          {message && (
            <div className="alert alert-info text-center">
              {message}
            </div>
          )}

          {/* SUBMIT */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-prgi">
              Apply Registration
            </button>
          </div>

        </form>

        {/* RESULTS SECTION */}
        {apiResult && (
          <div className="mt-4">
            <h5 className="text-danger mb-3">
              Similar Titles Found
            </h5>

            {Array.isArray(apiResult.fuzzy) && apiResult.fuzzy.length > 0 && (
              <ResultBlock title="Fuzzy Matches" data={apiResult.fuzzy} />
            )}

            {Array.isArray(apiResult.phoneatic) && apiResult.phoneatic.length > 0 && (
              <PhoneticBlock data={apiResult.phoneatic} />
            )}
            {Array.isArray(apiResult.schematic) && apiResult.schematic.length > 0 && (
              <ResultBlock title="Semantic Matches" data={apiResult.schematic} />
            )}

            {/* If results object exists but all arrays empty */}
            {(!apiResult.fuzzy?.length &&
              !apiResult.phoneatic?.length &&
              !apiResult.schematic?.length) && (
                <div className="alert alert-warning">
                  No similar titles found.
                </div>
              )}
          </div>
        )}

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

/* 🔹 Result Block */
function ResultBlock({ title, data }) {
  if (!Array.isArray(data)) return null;

  return (
    <div className="mb-4">
      <h6 className="fw-bold text-primary">{title}</h6>

      <table className="table table-sm table-bordered">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Reg No</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r?.[0] || "-"}</td>
              <td>{r?.[1] || "-"}</td>
              <td>{Number(r?.[2] ?? 0).toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PhoneticBlock({ data }) {
  if (!Array.isArray(data)) return null;

  return (
    <div className="mb-4">
      <h6 className="fw-bold text-primary">Phonetic Matches</h6>

      <table className="table table-sm table-bordered">
        <thead className="table-light">
          <tr>
            <th>Title</th>
            <th>Requested IPA</th>
            <th>Candidate IPA</th>
            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r?.[0] || "-"}</td>
              <td style={{ fontFamily: "serif" }}>{r?.[1] || "-"}</td>
              <td style={{ fontFamily: "serif" }}>{r?.[2] || "-"}</td>
              <td>
                {Number(r?.[3] ?? 0).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}