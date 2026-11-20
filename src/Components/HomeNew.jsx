import React, { useState, useEffect, useRef } from "react";
import companyVideo from "../assets/gc_video_ad2.mp4";
import "../cssFiles/homenew.css";
import logoImg from "../assets/logo.png";


const projects = [
    {
        date: "Sep 1994",
        client: "SPIC-JEL Engineering Limited",
        work: "Boiler structure erection, fabrication of T.G. rack and labour supply at Anpara 'B' Thermal Power Plant."
    },
    {
        date: "Apr 1996 – May 1998",
        client: "Hindustan Steelworks Construction Limited",
        work: "Fabrication and erection of C.W. duct pipeline at HSCL Vindhyanagar Super Thermal Project."
    },
    {
        date: "Dec 2007 – Jun 2009",
        client: "Larsen & Toubro Limited",
        work: "Operation and maintenance work of crusher at plant."
    },
    {
        date: "Dec 2009 – Feb 2013",
        client: "MACMET India Limited",
        work: "Fabrication and erection of cross-country pipe conveyor at Renusagar under Hindalco Industries."
    },
    {
        date: "Apr 2010",
        client: "GAMMON India Limited",
        work: "Reinforcement steel, shuttering and concreting for culvert at Gorakhpur Bypass, NH-28."
    },
    {
        date: "Sep 2010",
        client: "GAMMON India Limited",
        work: "Gorakhpur Bypass project on NH-28, Uttar Pradesh (design, construction, finance, operation and maintenance)."
    },
    {
        date: "Aug 2012",
        client: "Hindalco Industries Limited",
        work: "Fabrication of discharge conveyor and transfer house at Krishnashilla Mines, Renusagar Power Division."
    },
    {
        date: "Oct 2012",
        client: "Creative Ashtech Power Projects Pvt. Ltd.",
        work: "ESP structural fabrication, AHP discharge pipeline and boiler hopper work at Sasan UMPP."
    },
    {
        date: "May 2013",
        client: "Sinofinn Energy (India) Private Limited",
        work: "Equipment erection under Unit 4 ESP for Sasan UMPP at AHP site, Madhya Pradesh."
    },
    {
        date: "May 2014",
        client: "The Indure Private Limited",
        work: "Fabrication and erection of flat conveyor, chute assembly, pulley, gearbox and equipment at NTPC VSTPS."
    },
    {
        date: "May 2014 – Jul 2022",
        client: "MACMET Engineering Limited",
        work: "Conveyor fabrication, operation and maintenance, structural steel and mechanical equipment erection across project sites."
    },
    {
        date: "Nov 2021 – Present",
        client: "UltraTech Cement Limited",
        work: "Auditorium truss, MS structures, 5.6 km pipeline, railway fencing, boiler sheeting, manpower supply and associated civil/mechanical works."
    },
    {
        date: "Feb – May 2025",
        client: "Hindalco Industries Limited",
        work: "BTAP piping, equipment erection and blower erection."
    },
    {
        date: "Apr – Jul 2025",
        client: "Adani Group (ACC)",
        work: "Boundary wall construction at railway take-off side, structural fabrication, civil construction, sheet fixing and railway fencing."
    },
];

const services = [
    [
        "▦",
        "Structural Fabrication & Erection",
        "Reliable fabrication and erection for industrial structures and plant requirements."
    ],
    [
        "⛭",
        "Pipe Laying, Installation & Fittings",
        "Pipeline installation, fittings and long-distance pipe-laying work."
    ],
    [
        "▥",
        "Mechanical & Civil Projects",
        "Mechanical equipment erection and supporting civil construction works."
    ],
    [
        "✣",
        "Comprehensive Labour Supply",
        "Skilled workforce capacity of 100+ for project execution and support."
    ],
];

const clients = [
    "ADITYA BIRLA",
    "LARSEN & TOUBRO",
    "ADANI",
    "GAMMON",
    "HINDALCO",
    "HSCL",
    "ULTRATECH",
    "MACMET",
    "RELIANCE",
    "THE INDURE"
];

function SectionTitle({ children, light = false }) {
    return (
        <div className={`section-title ${light ? "section-title-light" : ""}`}>
            <span>{children}</span>
        </div>
    );
}

export default function HomeNew() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });


    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        video.play().catch((error) => {
                            console.log("Video autoplay prevented:", error);
                        });
                    } else {
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
            video.pause();
        };
    }, []);

    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const subject = encodeURIComponent(
            `Website enquiry from ${form.name}`
        );

        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
        );

        window.location.href =
            `mailto:Global.construction716@gmail.com?subject=${subject}&body=${body}`;

        setSent(true);
    };

    return (
        <main className="gc-home">

            {/* NAVBAR */}

            <header className="gc-header">

                <div className="global-logo-wrapper">
                    <img
                        src={logoImg}
                        alt="Global Construction - Engineers & Contractors"
                        className="global-logo-image"
                    />
                </div>

                <nav className="gc-nav">
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#timeline">Experience</a>
                    <a href="/portfolio">Project Portfolio</a>
                    <a href="#contact" className="nav-contact">
                        Contact Us
                    </a>
                </nav>

            </header>


            {/* HERO SECTION */}

            <section className="gc-hero" id="home">

                <div className="hero-copy">

                    <p className="eyebrow">
                        ENGINEERING • FABRICATION • CONTRACTING
                    </p>

                    <h1>
                        Building Strong Foundations.
                        <br />
                        <em>Delivering Lasting Results.</em>
                    </h1>

                    <p className="hero-description">
                        Your trusted engineering partner for structural fabrication,
                        pipe laying, mechanical and civil works.
                    </p>

                    <div className="hero-actions">

                        <a href="#projects" className="button button-primary">
                            Explore Our Work
                        </a>

                        <a href="#contact" className="button button-outline" style={{ color: "blue", fontWeight: "bold" }}>
                            Discuss a Project
                        </a>

                    </div>

                    <div className="hero-stats">

                        <div>
                            <strong>25+</strong>
                            <span>Years of experience</span>
                        </div>

                        <div>
                            <strong>100+</strong>
                            <span>Workforce capacity</span>
                        </div>

                        <div>
                            <strong>1994</strong>
                            <span>Since our first project</span>
                        </div>

                    </div>

                </div>


                <div className="hero-visual">

                    <div className="hero-image">

                        <div className="image-overlay">
                            <span>GLOBAL CONSTRUCTION</span>

                            <b>
                                Built on experience.
                                <br />
                                Driven by quality.
                            </b>
                        </div>

                    </div>

                    <div className="hero-float-card">

                        <span className="float-icon">✓</span>

                        <div>
                            <b>Safety & Quality</b>
                            <small>At the heart of every project</small>
                        </div>

                    </div>

                </div>

            </section>


            {/* ABOUT US */}

            <section className="section about-section" id="about">

                <SectionTitle>
                    About Us : Your Trusted Engineering Partner
                </SectionTitle>

                <div className="about-grid">

                    <article className="about-card">

                        <span className="feature-icon">⌂</span>

                        <h3>Who We Are</h3>

                        <p>
                            Established as a trusted provider in engineering
                            and contracting services.
                        </p>

                    </article>

                    <article className="about-card">

                        <span className="feature-icon">◷</span>

                        <h3>Experience</h3>

                        <p>
                            Over 25 years of expertise in structural fabrication,
                            pipe laying, mechanical and civil works.
                        </p>

                    </article>

                    <article className="about-card">

                        <span className="feature-icon">◎</span>

                        <h3>Our Mission</h3>

                        <p>
                            Deliver high-quality engineering solutions with
                            a commitment to safety and efficiency.
                        </p>

                    </article>

                </div>

            </section>


            {/* SERVICES */}

            <section className="section soft-section" id="services">

                <SectionTitle>
                    Comprehensive Services We Offer
                </SectionTitle>

                <div className="service-grid">

                    {services.map(([icon, title, desc], i) => (

                        <article
                            className={`service-card service-${i + 1}`}
                            key={title}
                        >

                            <span className="service-icon">
                                {icon}
                            </span>

                            <div>
                                <h3>{title}</h3>
                                <p>{desc}</p>
                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* WHY CHOOSE US */}

            <section className="section">

                <SectionTitle>
                    Why Choose Global Construction?
                </SectionTitle>

                <div className="why-grid">

                    <article>
                        <span>✥</span>
                        <h3>Expert Workforce</h3>
                        <p>
                            Skilled professionals ensuring high standards
                            and dependable execution.
                        </p>
                    </article>

                    <article>
                        <span>▣</span>
                        <h3>Diverse Experience</h3>
                        <p>
                            Proven project experience across industrial
                            and infrastructure sectors.
                        </p>
                    </article>

                    <article>
                        <span>♧</span>
                        <h3>Commitment to Quality</h3>
                        <p>
                            Adhering to safety, quality and client
                            satisfaction at every stage.
                        </p>
                    </article>

                </div>

            </section>
           <video
                ref={videoRef}
                className="company-ad-video"
                src={companyVideo }
                loop
                playsInline
                controls={false}
                disablePictureInPicture
                disableRemotePlayback
                preload="metadata"
                onContextMenu={(e) => e.preventDefault()}
            >
                Your browser does not support HTML5 video.
            </video>


            {/* OUR MANAGEMENT TEAM */}
            <section className="management-section" id="management">
                <div className="section-container">
                    <div className="section-heading">
                        <span className="section-tag">THE PEOPLE BEHIND OUR WORK</span>
                        <h2>Our Management Team</h2>
                        <p>
                            Our experienced management team brings together technical
                            expertise, engineering knowledge and leadership to deliver
                            quality construction solutions.
                        </p>
                    </div>

                    <div className="management-grid">
                        <div className="management-card">
                            <div className="management-avatar">MV</div>
                            <h3>Mr. Manoj Vishwakarma</h3>
                            <span className="management-role">Sales and Marketing Manager</span>
                            <div className="management-divider"></div>
                            <ul>
                                <li>B.Tech (Mechanical)</li>
                                <li>MBA</li>
                                <li>Sales and Marketing Manager</li>
                            </ul>
                        </div>

                        <div className="management-card">
                            <div className="management-avatar">SV</div>
                            <h3>Mr. Santosh Vishwakarma</h3>
                            <span className="management-role">Mechanical Engineer</span>
                            <div className="management-divider"></div>
                            <ul>
                                <li>B.Tech (Mechanical)</li>
                                <li>Mechanical Engineer</li>
                            </ul>
                        </div>

                        <div className="management-card">
                            <div className="management-avatar">AV</div>
                            <h3>Mr. Arvind Vishwakarma</h3>
                            <span className="management-role">Mechanical Engineer</span>
                            <div className="management-divider"></div>
                            <ul>
                                <li>Diploma (Production)</li>
                                <li>Mechanical Engineer</li>
                            </ul>
                        </div>

                        <div className="management-card">
                            <div className="management-avatar">PS</div>
                            <h3>Mr. Prem Sagar</h3>
                            <span className="management-role">IT Engineer</span>
                            <div className="management-divider"></div>
                            <ul>
                                <li>B.Tech (CSE)</li>
                                <li>IT Engineer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* COMMITMENT TO SAFETY & EXCELLENCE */}
            <section className="safety-section" id="safety">
                <div className="section-container">
                    <div className="section-heading">
                        <span className="section-tag">OUR PRIORITY</span>
                        <h2>Commitment to Safety &amp; Excellence</h2>
                        <p>
                            Safety is an integral part of every project we undertake.
                            We are committed to ensuring that our personnel, equipment
                            and work practices meet essential safety standards.
                        </p>
                    </div>

                    <div className="safety-grid">
                        <div className="safety-card">
                            <div className="safety-number">01</div>
                            <h3>Proper Training</h3>
                            <p>
                                All personnel are required to be properly trained in the
                                construction of underground facilities and in the use of
                                all explosives, mechanical and electric tools.
                            </p>
                        </div>

                        <div className="safety-card">
                            <div className="safety-number">02</div>
                            <h3>Eye &amp; Face Protection</h3>
                            <p>
                                All employees working in close proximity to hazardous
                                materials must complete an on-the-job, approved eye/face
                                protection training.
                            </p>
                        </div>

                        <div className="safety-card">
                            <div className="safety-number">03</div>
                            <h3>Emergency Preparedness</h3>
                            <p>
                                The employee must also be trained on the Safe Handling
                                of Explosives and Materials, Emergency First Aid, and
                                HazMat Awareness and Training.
                            </p>
                        </div>

                        <div className="safety-card">
                            <div className="safety-number">04</div>
                            <h3>Chemical Labelling</h3>
                            <p>
                                When a hazardous/toxic chemical is being handled or
                                transported, it must be clearly labeled.
                            </p>
                        </div>

                        <div className="safety-card">
                            <div className="safety-number">05</div>
                            <h3>Safe Chemical Handling</h3>
                            <p>
                                Safety precautions are to be taken at all times during
                                the handling of chemicals.
                            </p>
                        </div>

                        <div className="safety-card">
                            <div className="safety-number">06</div>
                            <h3>Personal Protective Equipment</h3>
                            <p>
                                All persons and equipment handling hazardous and toxic
                                chemicals shall wear appropriate personal protective
                                clothing as required by OSHA.
                            </p>
                        </div>
                    </div>

                    <div className="safety-footer">
                        <div className="safety-footer-icon">✓</div>
                        <div>
                            <h3>Safety First. Quality Always.</h3>
                            <p>
                                We believe that every successful project begins with
                                a safe working environment and a commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>








            {/* RECENT PROJECTS */}

            <section className="section soft-section" id="projects">

                <SectionTitle>
                    Recent Projects & Special Expertise
                </SectionTitle>

                <div className="project-highlight-grid">

                    <article className="project-highlight">
                        <span>01</span>
                        <h3>Water Pipe Laying</h3>
                        <p>
                            Long-distance water pipeline work from mines
                            to plant, approximately 5.6 km, along with
                            heavy structure and maintenance work.
                        </p>
                    </article>

                    <article className="project-highlight">
                        <span>02</span>
                        <h3>Civil Foundation Work</h3>
                        <p>
                            Civil foundation work for pipeline projects,
                            including approximately 5.6 km pipeline-related
                            civil activities.
                        </p>
                    </article>

                    <article className="project-highlight">
                        <span>03</span>
                        <h3>Industrial Structures</h3>
                        <p>
                            Structural enhancements, fabrication and
                            erection work for UltraTech Cement, Hindalco
                            Industries and other major clients.
                        </p>
                    </article>

                    <article className="project-highlight">
                        <span>04</span>
                        <h3>Ongoing Commitments</h3>
                        <p>
                            Continuously engaged with UltraTech Cement,
                            Hindalco Industries and Adani Group projects.
                        </p>
                    </article>

                </div>

            </section>


            {/* PROJECT CHRONOLOGY */}

            <section className="section timeline-section" id="timeline">

                <SectionTitle>
                    Project Chronology with Key Clients
                </SectionTitle>

                <p className="section-intro">
                    A record of project relationships and work delivered
                    across three decades.
                </p>

                <div className="timeline">

                    {projects.map((project, i) => (

                        <article
                            className={`timeline-item ${i % 2 ? "timeline-right" : "timeline-left"
                                }`}
                            key={`${project.date}-${project.client}`}
                        >

                            <div className="timeline-date">

                                <span className="date-square"></span>

                                {project.date}

                            </div>

                            <div className="timeline-card">

                                <small>PROJECT EXPERIENCE</small>

                                <h3>{project.client}</h3>

                                <p>{project.work}</p>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* CLIENTS */}

            <section className="section soft-section">

                <SectionTitle>
                    Clients We Proudly Serve
                </SectionTitle>

                <div className="client-grid">

                    {clients.map((client, i) => (

                        <div
                            className={`client-logo client-${i}`}
                            key={client}
                        >
                            <span>{client}</span>
                        </div>

                    ))}

                </div>

            </section>


            {/* CERTIFICATIONS */}

            <section className="section compliance-section">

                <SectionTitle>
                    Certifications & Compliance : Built on Trust
                </SectionTitle>

                <div className="compliance-grid">

                    <div>
                        <span>GST</span>
                        <b>09ADDPV5622P2ZT</b>
                        <small>GST Registration</small>
                    </div>

                    <div>
                        <span>UDYAM</span>
                        <b>UDYAM-UP-72-0002997</b>
                        <small>Udyam Registration</small>
                    </div>

                    <div>
                        <span>EPFO</span>
                        <b>UPVNS0059325000</b>
                        <small>EPFO Code</small>
                    </div>

                    <div>
                        <span>ESIC</span>
                        <b>28000559250001000</b>
                        <small>ESIC Registration</small>
                    </div>

                </div>

                <p className="compliance-note">
                    Work is carried out with attention to applicable safety
                    practices, ESIC requirements and regional labour standards.
                </p>

            </section>

            {/* ESSENTIAL COMPANY INFORMATION */}
            <section className="company-info-section">
                <div className="company-info-container">

                    <div className="company-info-heading">
                        <span className="portfolio-section-tag">
                            COMPANY DETAILS
                        </span>
                        <h2>Essential Company Information</h2>
                        <p>
                            Our official registration, statutory details and
                            business credentials.
                        </p>
                    </div>

                    <div className="company-info-card">
                        <div className="company-info-card-header">
                            <div className="company-info-icon">GC</div>
                            <div>
                                <h3>Registration & Compliance Details</h3>
                                <p>Global Construction</p>
                            </div>
                        </div>

                        <div className="company-info-grid">

                            <div className="company-info-item">
                                <span>Registration of GST No</span>
                                <strong>09ADDPV5622P2ZT</strong>
                            </div>

                            <div className="company-info-item">
                                <span>Registration Date</span>
                                <strong>03/10/2021</strong>
                            </div>

                            <div className="company-info-item">
                                <span>Type of Registration</span>
                                <strong>Regular</strong>
                            </div>

                            <div className="company-info-item">
                                <span>PAN No.</span>
                                <strong>ADDPV5622P</strong>
                            </div>

                            <div className="company-info-item">
                                <span>Place of Registration</span>
                                <strong>Sonebhadra (U.P)-231225</strong>
                            </div>

                            <div className="company-info-item">
                                <span>EPFO Code No.</span>
                                <strong>UPVNS0059325000</strong>
                            </div>

                            <div className="company-info-item">
                                <span>Registration Date of EPFO</span>
                                <strong>23/03/2015</strong>
                            </div>

                            <div className="company-info-item">
                                <span>Regional Office</span>
                                <strong>Varanasi (U.P)</strong>
                            </div>

                            <div className="company-info-item">
                                <span>ESIC No.</span>
                                <strong>28000559250001000</strong>
                            </div>

                            <div className="company-info-item">
                                <span>Registration Date of ESIC</span>
                                <strong>08/11/2021</strong>
                            </div>

                            <div className="company-info-item">
                                <span>UDYAM Registration No.</span>
                                <strong>UDYAM-UP-72-0002997</strong>
                            </div>

                            <div className="company-info-item">
                                <span>Registration Date of UDYAM</span>
                                <strong>08/11/2021</strong>
                            </div>

                            <div className="company-info-item company-info-highlight">
                                <span>Capability of Labor Providing</span>
                                <strong>100+</strong>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            {/* FINANCIAL DETAILS */}
            <section className="financial-section">
                <div className="financial-container">

                    <div className="financial-heading">
                        <span className="portfolio-section-tag">
                            BANKING INFORMATION
                        </span>
                        <h2>Financial Details for Transaction</h2>
                        <p>
                            Official banking details of M/s Global Construction.
                        </p>
                    </div>

                    <div className="financial-card">

                        <div className="financial-card-top">
                            <div className="financial-bank-icon">₹</div>

                            <div>
                                <span className="financial-label">ACCOUNT HOLDER</span>
                                <h3>M/s Global Construction</h3>
                                <p>Bank of Baroda</p>
                            </div>

                            <span className="financial-account-type">
                                Current Account
                            </span>
                        </div>

                        <div className="financial-details-grid">

                            <div className="financial-detail">
                                <span>Bank Name</span>
                                <strong>Bank of Baroda</strong>
                            </div>

                            <div className="financial-detail">
                                <span>Branch</span>
                                <strong>Anpara, Sonebhadra (U.P)</strong>
                            </div>

                            <div className="financial-detail">
                                <span>Account Number</span>
                                <strong>28280200000672</strong>
                            </div>

                            <div className="financial-detail">
                                <span>IFSC Code</span>
                                <strong>BARB0(Zero)ANPABS</strong>
                            </div>

                            <div className="financial-detail">
                                <span>Type of Account</span>
                                <strong>Current</strong>
                            </div>

                            <div className="financial-detail">
                                <span>MICR Code</span>
                                <strong>231012151</strong>
                            </div>

                        </div>

                        <div className="financial-footer">
                            <span>✓</span>
                            Banking information as provided in the company profile.
                        </div>

                    </div>
                </div>
            </section>


            {/* CONTACT SECTION */}

            <section className="contact-section" id="contact">

                <div className="contact-inner">

                    <div className="contact-copy">

                        <p className="eyebrow">
                            LET'S BUILD THE FUTURE TOGETHER
                        </p>

                        <h2>Join Hands with Us</h2>

                        <p>
                            Partner with M/s Global Construction for your next project.
                            Connect with our team to discuss your engineering,
                            fabrication, civil or manpower requirements.
                        </p>

                        <div className="contact-details">

                            <div>
                                <span>✉</span>
                                <p>
                                    <small>Email</small>
                                    <a href="mailto:Global.construction716@gmail.com">
                                        Global.construction716@gmail.com
                                    </a>
                                </p>
                            </div>

                            <div>
                                <span>☎</span>
                                <p>
                                    <small>Contact</small>
                                    <a href="tel:+916201665195">
                                        +91 6201665195
                                    </a>
                                    <a href="tel:+919451483275">
                                        +91 9451483275
                                    </a>
                                </p>
                            </div>

                            <div>
                                <span>⌖</span>
                                <p>
                                    <small>Head Office</small>
                                    <b>
                                        Bajrang Nagar Kashi More, Anpara,
                                        <br />
                                        Sonebhadra (U.P.), Pin – 231225
                                    </b>
                                </p>
                            </div>

                            <div>
                                <span>♙</span>
                                <p>
                                    <small>Proprietor</small>
                                    <b>Mr. Ram Naresh Vishwakarma</b>
                                </p>
                            </div>

                        </div>

                    </div>


                    {/* CONTACT FORM */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <h3>Send Us a Message</h3>

                        <p>Tell us a little about your requirement.</p>

                        <label>
                            Your Name

                            <input
                                required
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                placeholder="Enter your name"
                            />
                        </label>

                        <div className="form-row">

                            <label>
                                Email Address

                                <input
                                    required
                                    type="email"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                    placeholder="you@example.com"
                                />
                            </label>

                            <label>
                                Phone Number

                                <input
                                    value={form.phone}
                                    onChange={(e) =>
                                        setForm({ ...form, phone: e.target.value })
                                    }
                                    placeholder="+91"
                                />
                            </label>

                        </div>

                        <label>
                            Message

                            <textarea
                                required
                                rows="5"
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                placeholder="How can we help with your project?"
                            />

                        </label>

                        <button
                            className="button button-primary form-submit"
                            type="submit"
                        >
                            Send Message <span>→</span>
                        </button>

                        {sent && (
                            <small className="form-note">
                                Your email app should open with your message ready to send.
                            </small>
                        )}

                    </form>

                </div>

            </section>


            {/* FOOTER */}

            <footer className="gc-footer">

                <a className="footer-brand" href="#home">
                    GLOBAL CONSTRUCTION
                </a>

                <span>
                    Engineering • Fabrication • Contracting
                </span>

                <span>
                    © {new Date().getFullYear()} M/s Global Construction.
                    All rights reserved.
                </span>

            </footer>

        </main>
    );
}
