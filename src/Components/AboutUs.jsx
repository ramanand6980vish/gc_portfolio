import React, { useState } from "react";
import "../cssFiles/companyDocuments.css";

// Existing policy/profile PDFs
import biodataPdf from "../assets/Biodata.pdf";
import safetyPdf from "../assets/Safety_principle.pdf";
import shePdf from "../assets/SHE.pdf";

// Company documents
import aadhaarPdf from "../assets/documents/adhar card.pdf";
import panPdf from "../assets/documents/Pan card ram naresh.pdf";
import gstPdf from "../assets/documents/gst certificate.pdf";
import udyamPdf from "../assets/documents/Udyam Registration Certificate.pdf";
import chequePdf from "../assets/documents/cancelled cheque.pdf";
import epfoPdf from "../assets/documents/EPF_code.pdf";
import esicPdf from "../assets/documents/ESIC certificate.pdf";
import labourPdf from "../assets/documents/labour licence.pdf";

import letter1 from  "../assets/documents/appreciation-letter-1.pdf";
import letter2 from  "../assets/documents/appreciation-letter-2.pdf";

const companyDocuments = [
  {
    title: "Aadhaar Card",
    file: aadhaarPdf,
    filename: "Aadhaar-Card.pdf",
  },
  {
    title: "PAN Card",
    file: panPdf,
    filename: "PAN-Card.pdf",
  },
  {
    title: "GST Certificate",
    file: gstPdf,
    filename: "GST-Certificate.pdf",
  },
  {
    title: "Udyam Registration",
    file: udyamPdf,
    filename: "Udyam-Registration-Certificate.pdf",
  },
  {
    title: "Cancelled Cheque",
    file: chequePdf,
    filename: "Cancelled-Cheque.pdf",
  },
  {
    title: "EPFO Code",
    file: epfoPdf,
    filename: "EPF-Code.pdf",
  },
  {
    title: "ESIC Certificate",
    file: esicPdf,
    filename: "ESIC-Certificate.pdf",
  },
  {
    title: "Labour Licence",
    file: labourPdf,
    filename: "Labour-Licence.pdf",
  },
];

// Put these files in: public/documents/
const appreciationDocuments = [
  {
    title: "Client Appreciation Letter",
    company: "Company 1",
    file: letter1,
    filename: "Appreciation-Letter-1.pdf",
  },
  {
    title: "Letter of Appreciation",
    company: "Company 2",
    file: letter2,
    filename: "Appreciation-Letter-2.pdf",
  },
];

function DocumentCard({ document, index, onView }) {
  return (
    <article className="document-card" key={document.filename}>
      <div className="document-card-top">
        <div className="document-pdf-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M7 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
            <path d="M14 3.5V9h5M8.5 13h7M8.5 16h7" />
          </svg>
        </div>

        <span className="document-number">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="document-card-info">
        <h3>{document.title}</h3>
        <p>{document.company || "Official PDF document"}</p>
      </div>

      <div className="document-card-actions">
        <button
          type="button"
          className="document-view-button"
          onClick={() => onView(document)}
        >
          View PDF
        </button>

        <a
          href={document.file}
          download={document.filename}
          className="document-download-button"
        >
          Download <span aria-hidden="true">↓</span>
        </a>
      </div>
    </article>
  );
}

function DocumentGrid({ items, onView }) {
  return (
    <div className="documents-grid">
      {items.map((document, index) => (
        <DocumentCard
          key={document.filename}
          document={document}
          index={index}
          onView={onView}
        />
      ))}
    </div>
  );
}

function PdfModal({ document, onClose }) {
  if (!document) return null;

  return (
    <div
      className="document-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="document-modal"
        role="dialog"
        aria-modal="true"
        aria-label={document.title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="document-modal-header">
          <div>
            <span>DOCUMENT PREVIEW</span>
            <h3>{document.title}</h3>
          </div>

          <button
            type="button"
            className="document-modal-close"
            onClick={onClose}
            aria-label="Close PDF viewer"
          >
            &times;
          </button>
        </div>

        <iframe
          key={document.file}
          src={document.file}
          title={document.title}
          className="document-modal-frame"
        />

        <div className="document-modal-footer">
          <a
            href={document.file}
            download={document.filename}
            className="document-download-button"
          >
            Download PDF <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  const [activeTab, setActiveTab] = useState("profile");
  const [selectedPdf, setSelectedPdf] = useState(null);

  const tabs = [
    { id: "profile", title: "Company Profile" },
    { id: "proprietor", title: "Message from the Proprietor" },
    { id: "safety", title: "Our Safety Principles" },
    { id: "she", title: "SHE Policy" },
    { id: "quality", title: "Quality Assurance Policy" },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="company-documents">
      {/* ORIGINAL FIVE TABS */}
      <div className="documents-navbar">
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.id}
            className={`documents-nav-button ${
              activeTab === tab.id ? "active" : ""
            }`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="documents-content">
        <div className="document-text">
          {/* 1. COMPANY PROFILE */}
          {activeTab === "profile" && (
            <>
              <h2>COMPANY PROFILE</h2>

              <p className="company-intro">
                M/s Global Construction is a construction and industrial
                services organization established in 2012, committed to
                delivering reliable, quality-driven and professional
                services to its clients.
              </p>

              <p>
                With the proprietor bringing over 35 years of experience
                in the construction industry, the organization is guided
                by extensive industry knowledge, practical expertise
                and a strong commitment to professional standards.
              </p>

              <p>
                At Global Construction, we believe that quality
                workmanship, disciplined execution, workplace safety
                and client satisfaction are the foundations of
                sustainable business relationships.
              </p>

              <h3 className="document-subheading">GENERAL INFORMATION</h3>

              <div className="company-info-table-wrapper">
                <table className="company-info-table">
                  <tbody>
                    <tr>
                      <td>Company Name</td>
                      <td>M/s Global Construction</td>
                    </tr>
                    <tr>
                      <td>Year of Establishment</td>
                      <td>2012</td>
                    </tr>
                    <tr>
                      <td>Business Constitution</td>
                      <td>Proprietorship</td>
                    </tr>
                    <tr>
                      <td>Proprietor</td>
                      <td>Mr. Ram Naresh Vishwakarma</td>
                    </tr>
                    <tr>
                      <td>Proprietor's Experience</td>
                      <td>Over 35 Years in the Construction Industry</td>
                    </tr>
                    <tr>
                      <td>Business Address</td>
                      <td>
                        Vill- Bajrang Nagar, Kashi More, PO + PS- Anapara,
                        Distt-Sonebhadra, Uttar Pradesh - 231225
                      </td>
                    </tr>
                    <tr>
                      <td>Contact Numbers</td>
                      <td>+91 9451483275 / 6201665195 </td>
                    </tr>
                    <tr>
                      <td>Nationality</td>
                      <td>Indian</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="document-subheading">OUR COMMITMENT</h3>

              <p>
                We strive to build lasting relationships with our
                clients through transparency, accountability,
                quality workmanship and responsible project execution.
                Our objective is to continuously strengthen our
                capabilities and deliver services that meet the
                expectations of our clients.
              </p>

              <div className="document-signature">
                <strong>GLOBAL CONSTRUCTION</strong>
                <p>R.N. Vishwakarma</p>
                <p>Proprietor</p>
              </div>

              {/* COMPANY DOCUMENTS INSIDE COMPANY PROFILE */}
              <section className="company-profile-pdfs" id="documents">
                <div className="documents-heading">
                  <span className="documents-eyebrow">OFFICIAL RECORDS</span>
                  <h2>Company Documents</h2>
                  <p>
                    View or download our registration and compliance
                    documents.
                  </p>
                </div>

                <DocumentGrid
                  items={companyDocuments}
                  onView={setSelectedPdf}
                />
              </section>

              {/* CLIENT APPRECIATION BELOW COMPANY DOCUMENTS */}
              <section
                className="company-profile-pdfs"
                id="client-appreciation"
              >
                <div className="documents-heading">
                  <span className="documents-eyebrow">CLIENT RECOGNITION</span>
                  <h2>Client Appreciation</h2>
                  <p>
                    Appreciation and recognition received from the
                    companies we have had the privilege to serve.
                  </p>
                </div>

                <DocumentGrid
                  items={appreciationDocuments}
                  onView={setSelectedPdf}
                />
              </section>
            </>
          )}

          {/* 2. MESSAGE FROM THE PROPRIETOR */}
          {activeTab === "proprietor" && (
            <>
              <h2>MESSAGE FROM THE PROPRIETOR</h2>

              <p>
                At Global Construction, we firmly believe that the
                foundation of every successful and reputable
                organization lies in superior workmanship,
                unwavering commitment, integrity and the enduring
                trust of its clients.
              </p>

              <p>
                Established in 2012, Global Construction has been
                guided by the professional experience and industry
                knowledge of its proprietor, who brings over
                35 years of experience in the construction industry.
                Our journey is driven by a commitment to delivering
                dependable services, maintaining high professional
                standards and building long-term relationships
                with our clients and business partners.
              </p>

              <p>
                We recognize that every construction project
                carries significant responsibility. Accordingly,
                we approach each assignment with dedication,
                careful planning and an uncompromising focus
                on quality. To us, safety is not merely a
                regulatory requirement but a fundamental
                responsibility. The health, safety and well-being
                of our employees, workforce, clients and everyone
                associated with our operations remain among
                our highest priorities.
              </p>

              <p>
                At Global Construction, we continuously strive
                to improve our working practices, strengthen
                our technical capabilities and meet client
                expectations through disciplined and accountable
                execution.
              </p>

              <p>
                We extend our sincere gratitude to our esteemed
                clients, dedicated team members and business
                associates for their continued trust and
                collaboration. Your support inspires us to
                move forward with greater responsibility
                and determination.
              </p>

              <div className="proprietor-highlight">
                Our commitment is clear: Excellence in our work,
                safety in our operations and trust in every
                relationship.
              </div>

              <div className="document-signature">
                <p>Warm Regards,</p>
                <strong>R.N. Vishwakarma</strong>
                <p>Proprietor</p>
                <strong>M/s Global Construction</strong>
              </div>
            </>
          )}

          {/* 3. OUR SAFETY PRINCIPLES */}
          {activeTab === "safety" && (
            <>
              <h2>OUR SAFETY PRINCIPLES</h2>

              <p className="company-intro">
                At Global Construction, safety is our foremost
                priority. We are committed to creating a safe
                and healthy working environment through
                responsible practices, continuous improvement
                and active participation at every level.
              </p>

              <ol>
                <li>All injuries and illnesses can be prevented.</li>
                <li>
                  Each line function is responsible for preventing
                  injuries, while the safety function is responsible
                  for facilitating safety system improvements.
                </li>
                <li>
                  All unsafe incidents and injuries must be reported,
                  investigated and appropriate corrective actions
                  completed.
                </li>
                <li>
                  All leaders shall demonstrate care for people
                  by conducting safety observations and promoting
                  safety awareness at every opportunity.
                </li>
                <li>
                  All employees, contractors' employees and others
                  entering the plant for work shall be trained
                  to work safely.
                </li>
                <li>
                  Safety considerations shall influence all
                  our business decisions.
                </li>
                <li>
                  Regular audits must be conducted and deviations
                  shall be corrected promptly.
                </li>
                <li>Working safely shall be a condition of employment.</li>
                <li>
                  Every job shall be assessed for potential risks
                  and carried out according to authorized
                  procedures, checklists, work permits and
                  necessary personal protective equipment.
                </li>
              </ol>

              <div className="document-signature">
                <p>Thank You.</p>
                <strong>GLOBAL CONSTRUCTION</strong>
                <p>Ram Naresh Vishwakarma</p>
                <p>Proprietor</p>
              </div>

              <div className="document-pdf-section">
                <div className="document-pdf-header">
                  <div>
                    <h3>Supporting Document</h3>
                    <p>View or download our safety principles PDF.</p>
                  </div>
                  <div className="document-pdf-actions">
                    <button
                      type="button"
                      className="document-view-button"
                      onClick={() =>
                        setSelectedPdf({
                          title: "Our Safety Principles",
                          file: safetyPdf,
                          filename: "Safety-Principles.pdf",
                        })
                      }
                    >
                      View PDF
                    </button>
                    <a
                      href={safetyPdf}
                      download="Safety-Principles.pdf"
                      className="document-download-button"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* 4. SHE POLICY */}
          {activeTab === "she" && (
            <>
              <h2>
                SAFETY, OCCUPATIONAL HEALTH &amp; ENVIRONMENT (SHE) POLICY
              </h2>

              <p className="company-intro">
                Global Construction is committed to protecting
                people, maintaining occupational health and
                safeguarding the environment through responsible
                and sustainable working practices.
              </p>

              <ol>
                <li>
                  Our Safety, Occupational Health &amp; Environment
                  (SHE) responsibilities are driven by the desire
                  to protect people we work with, society at large
                  and the environment. It is integral to the way
                  we do business and forms part of our
                  organizational values.
                </li>
                <li>
                  We will work to protect people and the
                  environment with a fundamental belief that
                  all injuries, emissions and discharges can
                  be prevented. This responsibility rests
                  with every one of us.
                </li>
                <li>
                  We are committed to providing a safe workplace
                  and technology for efficient use of energy
                  and natural resources, reducing and preventing
                  pollution, promoting waste avoidance and
                  recycling.
                </li>
                <li>
                  We will continue to identify, assess and manage
                  our Safety and Occupational Health hazards
                  and risks, along with environmental impacts,
                  and regularly monitor, review and report progress.
                </li>
                <li>
                  We will develop the will, knowledge and skills
                  among employees to demonstrate their involvement,
                  responsibility and accountability in achieving
                  sound safety, occupational health and
                  environmental practices and performance.
                </li>
                <li>
                  We are committed to continual improvement
                  in our SHE performance by setting objectives
                  and targets, developing, deploying and
                  maintaining standards and systems, and going
                  beyond compliance with applicable industry
                  standards, legal and other requirements.
                </li>
                <li>
                  We will continue to strengthen our systems
                  and procedures for preventing and mitigating
                  potential emergency situations.
                </li>
                <li>
                  We are responsible and accountable for
                  implementing this policy. We will truly
                  succeed when we achieve and sustain our
                  SHE goals and earn the trust and respect
                  of the communities in which we work.
                </li>
              </ol>

              <div className="document-signature">
                <p>Thank You.</p>
                <strong>GLOBAL CONSTRUCTION</strong>
                <p>R.N. Vishwakarma</p>
                <p>Proprietor</p>
              </div>

              <div className="document-pdf-section">
                <div className="document-pdf-header">
                  <div>
                    <h3>Supporting Document</h3>
                    <p>View or download our SHE policy PDF.</p>
                  </div>
                  <div className="document-pdf-actions">
                    <button
                      type="button"
                      className="document-view-button"
                      onClick={() =>
                        setSelectedPdf({
                          title: "SHE Policy",
                          file: shePdf,
                          filename: "SHE-Policy.pdf",
                        })
                      }
                    >
                      View PDF
                    </button>
                    <a
                      href={shePdf}
                      download="SHE-Policy.pdf"
                      className="document-download-button"
                    >
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* 5. QUALITY ASSURANCE POLICY */}
          {activeTab === "quality" && (
            <>
              <h2>QUALITY ASSURANCE POLICY</h2>

              <p className="company-intro">
                At Global Construction, we are committed to
                delivering quality construction and associated
                services that meet agreed project requirements,
                client expectations and applicable standards.
              </p>

              <p>
                Our approach to quality is based on responsibility,
                proper planning, effective supervision and
                continuous improvement in our working practices.
              </p>

              <ol>
                <li>
                  <strong>Commitment to Quality:</strong>{" "}
                  We strive to maintain quality at every stage
                  of our work, from planning and preparation
                  to execution and completion.
                </li>
                <li>
                  <strong>Client Satisfaction:</strong>{" "}
                  We aim to understand client requirements
                  and deliver services that meet agreed
                  expectations.
                </li>
                <li>
                  <strong>Competent Workforce:</strong>{" "}
                  We encourage the development of employee
                  skills, knowledge and awareness to support
                  quality workmanship.
                </li>
                <li>
                  <strong>Compliance with Requirements:</strong>{" "}
                  We endeavour to follow applicable statutory
                  requirements, project specifications,
                  approved procedures and contractual obligations.
                </li>
                <li>
                  <strong>Effective Supervision:</strong>{" "}
                  We emphasize proper supervision, coordination
                  and monitoring of work activities to maintain
                  expected quality standards.
                </li>
                <li>
                  <strong>Appropriate Resources:</strong>{" "}
                  We aim to utilize suitable materials,
                  equipment, tools and resources for effective
                  project execution.
                </li>
                <li>
                  <strong>Continuous Improvement:</strong>{" "}
                  We are committed to identifying opportunities
                  to improve our working methods, processes
                  and overall performance.
                </li>
                <li>
                  <strong>Accountability:</strong>{" "}
                  Every individual associated with our operations
                  is encouraged to take responsibility for
                  maintaining quality in their respective work.
                </li>
              </ol>

              <div className="proprietor-highlight">
                Quality is not just the completion of a project;
                it is the responsibility we carry throughout
                every stage of our work.
              </div>

              <div className="document-signature">
                <strong>GLOBAL CONSTRUCTION</strong>
                <p>Ram Naresh Vishwakarma</p>
                <p>Proprietor</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* SHARED PDF PREVIEW MODAL */}
      <PdfModal
        document={selectedPdf}
        onClose={() => setSelectedPdf(null)}
      />
    </section>
  );
}

export default AboutUs;
