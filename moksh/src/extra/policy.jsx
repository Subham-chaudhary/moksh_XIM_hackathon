import Footer from "./footer";
export default function Policy() {
  return (
    <div style={{ fontFamily: "Segoe UI, sans-serif", backgroundColor: "#ffffff" }}>

      {/* TOOLBAR */}
      <div style={{
        backgroundColor: "#e9ecef",
        padding: "15px 30px",
        borderBottom: "2px solid #385d81",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h3 style={{ margin: 0, color: "#385d81", fontWeight: "600" }}>
          Moksha Publications
        </h3>
      </div>

      {/* PAGE CONTENT */}
      <div style={{ padding: "40px 80px" }}>
        <h2 style={{ color: "#385d81", marginBottom: "25px" }}>
          Website Policy
        </h2>

        <ul style={{ lineHeight: "1.8", fontSize: "16px" }}>
          <li>
            All content published on this website is governed by national
            publication regulations.
          </li>
          <li>
            User data collected during registration is stored securely and
            handled with confidentiality.
          </li>
          <li>
            Unauthorized use, copying, or redistribution of website material
            is strictly prohibited.
          </li>
          <li>
            The authority reserves the right to modify policies without prior notice.
          </li>
          <li>
            Users must ensure that all information submitted is accurate and truthful.
          </li>
        </ul>
      </div>

      {/* FOOTER */}
      <footer style={{
        backgroundColor: "#e9ecef",
        borderTop: "2px solid #385d81",
        padding: "20px",
        textAlign: "center",
        color: "#6c757d"
      }}>
        © 2026 Moksha Publications 
      </footer>
      <Footer />
    </div>
  );
}