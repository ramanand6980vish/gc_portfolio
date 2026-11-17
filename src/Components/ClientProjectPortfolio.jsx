import React, { useMemo, useState } from "react";
import "../cssFiles/clientProjectPortfolio.css";

const projects = [
  {
    id: 1,
    client: "SPIC-JEL-Engineering Limited",
    description:
      "Boiler structure Erection Work, Fabrication of Rack for T.G ware house & Labour Supply works at Anpara 'B' Thermal Power Plant Project.",
    period: "25-Sep-1994",
  },
  {
    id: 2,
    client: "Hindustan Steelworks Steel Construction Limited",
    description:
      "Fabrication & Erection of C.W Duct pipeline 3200Ø 2200Ø pipeline site at HSCL Vindhyanagar super thermal project.",
    period: "April-1996 to May-1998",
  },
  {
    id: 3,
    client: "Larsen & Loubro LTD",
    description:
      "Operation & Maintenance work of Crusher at Plant",
    period: "01-Dec-2007 to 24-Jun-2009",
  },
  {
    id: 4,
    client: "GAMMON INDIA LIMITED",
    description:
      "Reinforcement steel, shuttering and concreting work for culvert at CH 5+675 at Gorakhpur bypass project on NH-28.",
    period: "1-Apr-2010",
  },
  {
    id: 5,
    client: "GAMMON INDIA LIMITED",
    description:
      "Design, Construction, Finance operation and Maintenance of KM 0.00 to 32.570 of Gorakhpur bypass project on NH-28 in the state of Utter Pradesh on Annuity Basis",
    period: "1-Sep-2010",
  },
  {
    id: 6,
    client: "MACMET INDIA LIMITED",
    description:
      "Fabrication & Erection of Cross country Pipe Conveyor at Renusagar site under Hindalco Industries Limited.",
    period: "Dec-2009 to Feb-2013",
  },
  {
    id: 7,
    client: "Hindalco Industries Limited (Aditya Birla Group)",
    description:
      "Fabrication of discharge conveyor and transfer house at Krishnashilla Mines end (Renusagar Power Division).",
    period: "16-Aug-2012",
  },
  {
    id: 8,
    client: "Creative Ashtech Power Projects Pvt Ltd.",
    description:
      "ESP structural Fabrication, AHP to discharge pipe line #4 Units and Boiler Hopper at UMPP sasan (M.P) site.",
    period: "4-Oct-2012",
  },
  {
    id: 9,
    client: "Creative Ashtech Power Projects Pvt Ltd.",
    description:
      "Banker Hopper ESP at Sasan UMPP, AHP site",
    period: "27-Dec-2012",
  },
  {
    id: 10,
    client: "Sinofinn Energy (India) Private Ltd",
    description:
      "Equipment Erection under Unit #4 ESP for Sasan UMPP at AHP site Sasan (M.P)",
    period: "20-May-2013",
  },
  {
    id: 11,
    client: "THE INDURE PRIVATE LIMITED",
    description:
      "Fabrication & Erection of Flat conveyor, Assembly of Chute, Duck, Pulley or gear box and Erection of Equipment at NTPC VSTPS Plant area.",
    period: "14-May-2014",
  },
  {
    id: 12,
    client: "MACMET ENGINEERING LIMITED",
    description:
      "Labour supply for Conveyor Fabrication work at Ghato Tand West Bokaro site.",
    period: "18-03-16 / 7-May-2014",
  },
  {
    id: 13,
    client: "MACMET ENGINEERING LIMITED",
    description:
      "AMC of Operation & Maintenance work of BPC system for transportation of coal from khrishnashilla Mines under Hindalco RPD at Renusagar site.",
    period: "21-Sept-2015",
  },
  {
    id: 14,
    client: "MACMET ENGINEERING LIMITED",
    description:
      "Sheeting & Structural Steel work at BPC site under Hindalco Renusagar.",
    period: "18-March-16",
  },
  {
    id: 15,
    client: "MACMET ENGINEERING LIMITED",
    description:
      "Structural Fabrication & Erection work and Mechanical Equipment Erection work for pipe conveyor C4BN & Transfer House-02 at PCPIII area of Tata Steel, West Bokaro and Wight Bridge 32MT Assembly and Erection job.",
    period: "10-Jan-2018",
  },
  {
    id: 16,
    client: "MACMET ENGINEERING LIMITED",
    description:
      "Structural Fabrication & Erection work and Mechanical Equipment Erection work and transfer house with hopper for long pipe conveyor project for transportation of coal from washery End to chainpur at Tata Steel, West Bokaro",
    period: "06-06-19 to 20-03-2021",
  },
  {
    id: 17,
    client: "Ultra Tech Cement Limited",
    description: `Auditorium Truss Fabrication & Erection work with roof
2) MS Truss Structural fabrication & Erection work.
3) Pipe Laying work 219.1mm dia mines to Hil top up to 5.6 km long distance
4) Bracket Fabrication & Erection work along with OLBC.
5) Railway fencing work 3km long distance.
6) Height Phobia fabrication and erection work.
7) Boiler Sheeting work
8) Car parking shed fabrication and installation with sheeting work
9) Security watch tower fabrication and erection with sheeting
10) Loading and Unloading work.
11) Manpower Supply for cement mill & TPP work.
12) Hand railing work.
13) AFR shed fabrication and erection work.
14) PRDS pipe Laying work at TPP
15) Pipe replacement at TPP for Boiler
16) Fire Fighting work at AFR sheder & Conveyor
17) Odor control system pipe laying work at AFR
18) Civil Foundation work from Hil-1 mines to Hil top
ETC related to Structure work.`,
    period: "17-11-2021 to till date",
  },
  {
    id: 18,
    client: "HINDALCO INDUSTRIES LIMITED",
    description:
      "BTAP Piping and Equipment Erection work. Blower erection",
    period: "12.02.25 to 27.05.25",
  },
  {
    id: 19,
    client: "ADANI GROUP (ACC)",
    description: `Construction of Boundary Wall at Railway Take off side with material.
1) Structural fabrication & Erection work.
2) Civil Construction work.
3) Sheet Fixing work.
4) Railway fencing work.`,
    period: "05.04.25 to 30.07.25",
  },
];

export default function ClientProjectPortfolio() {
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const value = search.toLowerCase().trim();

    if (!value) return projects;

    return projects.filter((project) =>
      `${project.client} ${project.description} ${project.period}`
        .toLowerCase()
        .includes(value)
    );
  }, [search]);

  return (
    <div className="portfolio-page">

      {/* NAVBAR */}
      <header className="portfolio-navbar">
        <div className="portfolio-nav-inner">
          <div className="global-logo-wrapper">
                        <img
                            src="src/assets/logo.png"
                            alt="Global Construction - Engineers & Contractors"
                            className="global-logo-image"
                        />
                </div>

          <a href="/" className="portfolio-back">
            ← Back to Home
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <span className="portfolio-eyebrow">
            OUR EXPERIENCE & ACHIEVEMENTS
          </span>

          <h1>Client Project Portfolio</h1>

          <p>
            A record of our engineering, construction, fabrication,
            erection and maintenance projects across industries.
          </p>

          <div className="portfolio-hero-stats">
            <div>
              <strong>19</strong>
              <span>Project Entries</span>
            </div>

            <div>
              <strong>25+</strong>
              <span>Years of Experience</span>
            </div>

            <div>
              <strong>100+</strong>
              <span>Workforce Capacity</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT TABLE */}
      <main className="portfolio-main">

        <div className="portfolio-section-heading">
          <div>
            <span className="portfolio-section-tag">
              OUR PROJECT RECORD
            </span>

            <h2>Projects & Execution Details</h2>

            <p>
              Explore our project history, client relationships
              and execution experience.
            </p>
          </div>

          <div className="portfolio-count">
            Showing {filteredProjects.length} of {projects.length} entries
          </div>
        </div>

        {/* SEARCH */}
        <div className="portfolio-toolbar">
          <div className="portfolio-search">
            <span>⌕</span>

            <input
              type="text"
              placeholder="Search client, project description or period..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button onClick={() => setSearch("")}>
                Clear
              </button>
            )}
          </div>
        </div>

        {/* TABLE   */}
        <div className="portfolio-table-wrapper">
          <table className="portfolio-table">
            <thead>
              <tr>
                <th className="portfolio-number-column">#</th>
                <th className="portfolio-client-column">Client</th>
                <th className="portfolio-description-column">
                  Project Description
                </th>
                <th className="portfolio-period-column">
                  Execution Period
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <tr key={project.id}>
                    <td className="portfolio-row-number">
                      {project.id.toString().padStart(2, "0")}
                    </td>

                    <td>
                      <span className="portfolio-client-name">
                        {project.client}
                      </span>
                    </td>

                    <td>
                      <div className="portfolio-description">
                        {project.description}
                      </div>
                    </td>

                    <td>
                      <span className="portfolio-period">
                        {project.period}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="portfolio-no-results">
                    No matching projects found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="portfolio-note">
          <strong>Global Construction</strong>
          <span>
            Building lasting relationships through quality engineering
            and construction services.
          </span>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="portfolio-footer">
        <div>
          <strong>GLOBAL CONSTRUCTION</strong>
          <p>
            Bajrang Nagar Kashi More, Anpara, Sonebhadra (U.P),
            Pin - 231225
          </p>
        </div>

        <div className="portfolio-footer-contact">
          <a href="mailto:Global.construction716@gmail.com">
            Global.construction716@gmail.com
          </a>

          <a href="tel:+916201665195">
            +91 6201665195
          </a>
        </div>

        <p className="portfolio-copyright">
          © {new Date().getFullYear()} Global Construction. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}
