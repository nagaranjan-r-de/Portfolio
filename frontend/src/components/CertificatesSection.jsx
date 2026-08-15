
import CertificateCard from "./CertificateCard";
import portfolioData from "../data/portfolioData";

export default function CertificatesSection() {
  const { certificates } = portfolioData;

  return (
    <div className="certificates-section">

      <h2 className="section-title">
        Certificates
      </h2>

      <div className="certs-container">

        <div className="certs-track">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.id}
              certificate={cert}
              visible={true}
            />
          ))}
        </div>
        <div style={{ textAlign: "center", fontSize: "10px" }}>
          Scroll for more
        </div>

      </div>

    </div>
  );
}
