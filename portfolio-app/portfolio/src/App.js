import "./App.css";

function App() {
  const workHistory = [
    {
      role: "Miner",
      company: "Lannon Stone Products",
      period: "Apr 2025 – Present",
      description:
        "Operate in a safety-critical, high-discipline environment requiring precision, accountability, and teamwork to maintain efficient operations and meet production goals.",
    },
    {
      role: "IT Technician",
      company: "Strategic Technology Solutions",
      period: "Aug 2021 – Jan 2022",
      description:
        "Provided hands-on technical support, installed and configured network infrastructure, and troubleshot hardware and connectivity issues to minimize downtime.",
    },
    {
      role: "Sales & Client-Facing Roles",
      company: "Automotive Sales, Insurance, Retail",
      period: "2022 – 2024",
      description:
        "Exceeded performance targets through problem-solving and customer-focused solutions while using CRM tools to optimize workflows and improve engagement.",
    },
  ];

  const projects = [
    {
      title: "Full Stack Ecommerce Platform",
      tech: "React | JavaScript | Django/FastAPI | Stripe API",
      description:
        "Built a modern ecommerce web application with a React frontend and Python backend. Features include product browsing, cart management, secure checkout with Stripe integration, and dynamic state handling for a smooth user experience.",
      image: "https://via.placeholder.com/600x400?text=Ecommerce+Store",
      link: "https://your-link.com",
    },
    {
      title: "AI-Powered Customer Support Chatbot",
      description:
        "Developed an intelligent chatbot using React and a backend API to simulate real-time customer support. Integrated conversational logic and API-driven responses to handle product questions, recommendations, and user interactions.",
      tech: "React | JavaScript | Python | REST APIs",
      image: "https://via.placeholder.com/600x400?text=AI+Chatbot",
      link: "https://your-link.com",
    },
    {
      title: "Interactive Data Analytics Dashboard",
      description:
        "Created a responsive dashboard that visualizes real-time data using React. Implemented dynamic components, filtering, and clean UI patterns to present complex information in a clear and user-friendly way.",
      tech: "React | JavaScript | Chart Libraries/APIs",
      image: "https://via.placeholder.com/600x400?text=Dashboard",
      link: "https://your-link.com",
    },
];

  return (
    <div className="site">
      <header className="navbar">
        <div className="nav-brand">Damian Savage</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#resume">Resume</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <main className="container">
        <section id="about" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Aspiring Software Developer</p>
            <h1>Damian Savage</h1>
            <h2>Frontend / Full-Stack Developer</h2>
            <p className="hero-description">
              <p>
                I’m an aspiring software developer focused on building clean, responsive web
                applications with React, JavaScript, and Python. I bring a background in IT
                support, operations, and leadership, along with a strong ability to learn
                quickly and execute in high-discipline environments.
              </p>
            </p>
    {/* MOVE BUTTONS INTO THEIR OWN WRAPPER */}
          <div className="hero-buttons">
            <a href="mailto:savagedamian99@gmail.com" className="btn btn-primary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>

  <div className="hero-card">
    <img src="/hero-photo.jpeg" alt="Damian Savage" className="hero-photo" />
  </div>
</section>

        <section id="work" className="section">
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h2>Work History</h2>
          </div>

          <div className="work-list">
            {workHistory.map((job, index) => (
              <div key={index} className="work-card">
                <div className="work-top">
                  <div>
                    <h3>
                      {job.role} <span>@ {job.company}</span>
                    </h3>
                    <p className="work-description">{job.description}</p>
                  </div>
                  <p className="work-period">{job.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="resume" className="section">
          <div className="section-header">
            <p className="eyebrow">Resume</p>
            <h2>Resume Snapshot</h2>
          </div>
          <div className="resume-sections"> 
          <div className="resume-grid">
            <div className="resume-card">
              <h3>Technical Skills</h3>

              <div className="skills-group">
                <h4>Frontend</h4>
                <div className="skills">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </div>

              <div className="skills-group">
                <h4>Backend / Data</h4>
                <div className="skills">
                  <span>Python</span>
                  <span>REST APIs</span>
                </div>
              </div>

              <div className="skills-group">
                <h4>Tools</h4>
                <div className="skills">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Salesforce</span>
                </div>
              </div>
            </div>
            </div>

            <div className="resume-card">
              <h3>Education</h3>
              <ul>
                <li>
                  <strong>B.S. in Software Engineering (In Progress)</strong>
                  <br />
                  Southern New Hampshire University
                </li>
                <li>
                  <strong>Full Stack Development Certificate</strong>
                  <br />
                  San Diego Global Knowledge University
                </li>
                <li>
                  <strong>United States Marine Corps</strong>
                  <br />
                  Corporal | Aug 2017 – Aug 2021
                </li>
              </ul>
            </div>
            
          </div>
          

          <div className="resume-link-wrap">
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Open Full Resume
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <p className="eyebrow">Portfolio</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-card"
              >
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-tech">{project.tech}</p>
                  <span className="project-link">View Project →</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;