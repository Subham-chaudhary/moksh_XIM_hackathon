import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FileText, User, MapPin } from "lucide-react";
import Footer from "./extra/footer";

/* 🔷 TOP TOOLBAR */
function TopToolbar() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg,#385d81,#1f344a)",
        color: "white",
        padding: "20px 34px",
        boxShadow: "0 6px 18px rgba(0,0,0,0.22)",
        letterSpacing: "0.7px",
        borderBottom: "1px solid rgba(255,255,255,0.15)",
        position: "relative",
        overflow: "hidden"
      }}
      className="d-flex flex-column align-items-center justify-content-center"
    >
      {/* subtle glow accent */}
      <div style={{
        position:"absolute",
        width:"420px",
        height:"420px",
        background:"radial-gradient(circle,rgba(255,255,255,0.12),transparent 70%)",
        top:"-180px",
        right:"-120px",
        pointerEvents:"none"
      }}/>

      <h4
        className="m-0 d-flex align-items-center gap-2 fw-semibold"
        style={{
          fontSize: "1.45rem",
          textTransform: "uppercase",
          fontWeight: 600,
          zIndex:1
        }}
      >
        <FileText size={26} />
        Publication Registration Portal
      </h4>

      <span style={{
        fontSize:"0.8rem",
        opacity:0.85,
        marginTop:"4px",
        letterSpacing:"1.2px",
        zIndex:1
      }}>
        Government Registration Interface
      </span>
    </div>
  );
}

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Registration successful");
        setFormData({ title: "", language: "", periodicity: "", owner: "", publisher: "", state: "", district: "" });
      } else {
        setMessage(data?.error || "❌ Failed");
        setApiResult(data?.results || null);
      }
    } catch {
      setMessage("❌ Server error");
    }

    setLoading(false);
  };

  return (
    <div className="bg-light min-vh-100">
      <TopToolbar />

      <div className="animated-bg"></div>

      {loading && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25" style={{ zIndex: 9999 }}>
          <div className="spinner-border text-primary" style={{ width: "4rem", height: "4rem" }} />
        </div>
      )}

      <div className="container">
        <form onSubmit={handleSubmit} className="form-card">

          <div className="mb-4 mt-4">
            <h5 className="section-title">
              <FileText size={18} /> Publication Details
            </h5>

            <div className="row g-3">
              <Input label="Title Name" name="title" value={formData.title} onChange={handleChange} />
              <Input label="Language" name="language" value={formData.language} onChange={handleChange} />

              <div className="col-md-6">
                <label className="form-label">Periodicity</label>
                <select name="periodicity" value={formData.periodicity} onChange={handleChange} className="form-control" required>
                  <option value="">Select</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Quarterly</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="section-title">
              <User size={18} /> Owner & Publisher
            </h5>

            <div className="row g-3">
              <Input label="Owner Name" name="owner" value={formData.owner} onChange={handleChange} />
              <Input label="Publisher Name" name="publisher" value={formData.publisher} onChange={handleChange} />
            </div>
          </div>

          <div className="mb-4">
            <h5 className="section-title">
              <MapPin size={18} /> Location Details
            </h5>

            <div className="row g-3">
              <Input label="State" name="state" value={formData.state} onChange={handleChange} />
              <Input label="District" name="district" value={formData.district} onChange={handleChange} />
            </div>
          </div>

          {message && <div className="alert alert-info text-center">{message}</div>}

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary bg-blue-80 text-white hover:bg-blue-dark focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500">Apply Registration</button>
          </div>

        </form>

        {apiResult && (
          <div className="mt-4">
            <h5 className="text-danger mb-3">Similar Titles Found</h5>

            {Array.isArray(apiResult.fuzzy) && apiResult.fuzzy.length > 0 && <ResultBlock title="Fuzzy Matches" data={apiResult.fuzzy} />}
            {Array.isArray(apiResult.phoneatic) && apiResult.phoneatic.length > 0 && <PhoneticBlock data={apiResult.phoneatic} />}
            {Array.isArray(apiResult.schematic) && apiResult.schematic.length > 0 && <ResultBlock title="Semantic Matches" data={apiResult.schematic} />}

            {!apiResult.fuzzy?.length && !apiResult.phoneatic?.length && !apiResult.schematic?.length && (
              <div className="alert alert-warning">No similar titles found.</div>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

function Input({ label, name, value, onChange }) {
  return (
    <div className="col-md-6">
      <label className="form-label">{label}</label>
      <input name={name} value={value} onChange={onChange} placeholder={`Enter ${label}`} className="form-control" required />
    </div>
  );
}

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
              <td>{Number(r?.[3] ?? 0).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
