import { useState } from "react";
// import { generateInvoice, downloadInvoice } from "../api/api"; // Ensure these functions exist
import "./invoicestyles.css";

const InvoiceGenerator = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [invoiceUrl, setInvoiceUrl] = useState("");

  const handleGenerateInvoice = async () => {
    if (!email.trim()) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setError("");
    setInvoiceUrl("");

    try {
      // Call API to generate invoice
      await generateInvoice(email);

      // Call API to get the download URL
      const url = await downloadInvoice(email);
      setInvoiceUrl(url);
    } catch (err) {
      setError("Failed to generate invoice. Please try again.");
      console.error("Invoice generation error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="invoice-container">
      <h2>Generate Salary Invoice</h2>
      
      <input
        type="email"
        placeholder="Enter your email"
        className="input-field"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
      />

      <button onClick={handleGenerateInvoice} disabled={loading}>
        {loading ? "Generating..." : "Generate Invoice"}
      </button>

      {error && <p className="error-text">{error}</p>}

      {invoiceUrl && (
        <p>
          ✅ Invoice Ready!{" "}
          <a href={invoiceUrl} download>
            Click here to download
          </a>
        </p>
      )}
    </div>
  );
};

export default InvoiceGenerator;
