import { FileText } from "lucide-react";

export default function CertificateCard({ certificate, visible }) {
  return (
    <div className={`cert-item${visible ? "" : " hidden-cert"}`} aria-hidden={!visible}>
      <span>{certificate.name}</span>
      <a
        className="cert-view-btn"
        href={certificate.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${certificate.name} certificate`}
        tabIndex={visible ? 0 : -1}
      >
        <FileText size={14} /> View
      </a>
    </div>
  );
}
