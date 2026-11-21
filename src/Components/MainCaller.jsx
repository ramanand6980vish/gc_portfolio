import React, { useState, useEffect } from "react";

import HomeNew from "./HomeNew";
import ClientProjectPortfolio from "./ClientProjectPortfolio";
import AboutUs from "./AboutUs";

import logo from "../assets/logo.png";
import "../cssFiles/mainCaller.css";

export default function MainCaller() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [currentPage, SetCurrentPage] = useState("home");

    // A pending section to scroll to after the target page renders
    const [pendingScroll, setPendingScroll] = useState(null);

    const renderContent = () => {
        switch (currentPage) {
            case "home":
                return <HomeNew />;

            case "portfolio":
                return <ClientProjectPortfolio />;

            case "about":
                return <AboutUs />;

            default:
                return <HomeNew />;
        }
    };

    // Scroll after the requested page has rendered
    useEffect(() => {
        if (!pendingScroll) return;

        const { selector, page } = pendingScroll;

        // Avoid trying to scroll before React has rendered the new page
        if (currentPage !== page) return;

        const timer = window.setTimeout(() => {
            const target = document.querySelector(selector);

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

            setPendingScroll(null);
        }, 100);

        return () => window.clearTimeout(timer);
    }, [currentPage, pendingScroll]);

    // Shared navigation for both navbar and footer
    const navigateTo = (page, selector = null) => {
        setMenuOpen(false);

        if (page === currentPage) {
            if (selector) {
                const target = document.querySelector(selector);

                if (target) {
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }

            return;
        }

        // Set the scroll target before switching pages
        setPendingScroll(selector ? { page, selector } : null);
        SetCurrentPage(page);

        if (!selector) {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    const goHome = () => navigateTo("home");
    const goAbout = () => navigateTo("about");
    const goPortfolio = () => navigateTo("portfolio");
    const goContact = () => navigateTo("home", ".contact-details");

    return (
        <div className="gc-main-page">

            {/* PERSISTENT HEADER */}
            <header className="gc-header">
                <div className="global-logo-wrapper">
                    <img
                        src={logo}
                        alt="Global Construction - Engineers & Contractors"
                        className="global-logo-image"
                    />
                </div>

                {/* NAVIGATION */}
                <nav className="gc-nav">
                    <button
                        type="button"
                        className="mobile-menu-btn"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                    <div className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
                        <button
                            type="button"
                            onClick={goHome}
                            className={currentPage === "home" ? "active" : ""}
                        >
                            Home
                        </button>

                        <button
                            type="button"
                            onClick={goAbout}
                            className={currentPage === "about" ? "active" : ""}
                        >
                            About Us
                        </button>

                        <button
                            type="button"
                            onClick={goPortfolio}
                            className={currentPage === "portfolio" ? "active" : ""}
                        >
                            Project Portfolio
                        </button>

                        <button
                            type="button"
                            onClick={goContact}
                        >
                            Contact Us
                        </button>
                    </div>
                </nav>
            </header>

            {/* DYNAMIC CONTENT */}
            <div className="gc-content">
                {renderContent()}
            </div>

            {/* FOOTER */}
            <footer className="gc-site-footer">
                <div className="gc-footer-main">

                    {/* Company information */}
                    <div className="gc-footer-company">
                        <button
                            type="button"
                            className="gc-footer-brand"
                            onClick={goHome}
                            aria-label="Go to Global Construction home"
                        >
                            <span className="gc-footer-logo">GC</span>

                            <span className="gc-footer-brand-text">
                                <strong>GLOBAL CONSTRUCTION</strong>
                                <small>Engineering • Fabrication • Contracting</small>
                            </span>
                        </button>

                        <p className="gc-footer-description">
                            Delivering dependable construction, fabrication,
                            and contracting solutions with a commitment to
                            quality, safety, and professional excellence.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div className="gc-footer-links">
                        <h3>Quick Links</h3>

                        <button type="button" onClick={goHome}>Home</button>
                        <button type="button" onClick={goAbout}>About Us</button>
                        <button type="button" onClick={goPortfolio}>Project Portfolio</button>
                        <button type="button" onClick={goContact}>Contact Us</button>
                    </div>

                    {/* Contact section */}
                    <div className="gc-footer-contact">
                        <h3>Let’s Work Together</h3>

                        <p>
                            Have a project in mind? Connect with our team
                            to discuss your construction requirements.
                        </p>

                        <button
                            type="button"
                            className="gc-footer-contact-btn"
                            onClick={goContact}
                        >
                            Contact Our Team
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </div>

                {/* Bottom row */}
                <div className="gc-footer-bottom">
                    <p>
                        © {new Date().getFullYear()} M/s Global Construction.
                        All rights reserved.
                    </p>

                    <button
                        type="button"
                        className="gc-footer-back-top"
                        onClick={goHome}
                    >
                        Back to Top <span aria-hidden="true">↑</span>
                    </button>
                </div>
            </footer>
        </div>
    );
}
