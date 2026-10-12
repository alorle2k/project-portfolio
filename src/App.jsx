import { useState } from "react";
import "./App.css";

const starterProjects = [
  {
    id: 1,
    title: "Brand Identity",
    category: "Branding",
    description: "A fresh visual identity for a modern coffee shop.",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800",
  },
  {
    id: 2,
    title: "Website Redesign",
    category: "Web Design",
    description: "A clean and simple website for a creative business.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: 3,
    title: "Product Photography",
    category: "Photography",
    description: "Beautiful product images for an online shop.",
    image:
      "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=800",
  },
];

function App() {
  const [projects, setProjects] = useState(starterProjects);
  const [search, setSearch] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const filteredProjects = projects.filter((project) => {
    const searchText = search.toLowerCase();

    return (
      project.title.toLowerCase().includes(searchText) ||
      project.category.toLowerCase().includes(searchText) ||
      project.description.toLowerCase().includes(searchText)
    );
  });

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !category.trim() || !description.trim()) {
      return;
    }

    const newProject = {
      id: Date.now(),
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      image:
        image.trim() ||
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
    };

    setProjects((currentProjects) => [
      newProject,
      ...currentProjects,
    ]);

    setTitle("");
    setCategory("");
    setDescription("");
    setImage("");
    setSearch("");
  }

  return (
    <main className="app">
      <header className="header">
        <a className="logo" href="#">
          STUDIO<span>.</span>
        </a>

        <a className="header-link" href="#projects">
          Our Work ↗
        </a>
      </header>

      <section className="hero">
        <p className="eyebrow">INDEPENDENT CREATIVE STUDIO</p>

        <h1>
          Ideas made
          <br />
          <span>to stand out.</span>
        </h1>

        <p className="hero-description">
          We create thoughtful brands, digital experiences,
          and beautiful things for ambitious people.
        </p>

        <a className="primary-link" href="#projects">
          Explore our work ↓
        </a>
      </section>

      <section className="portfolio" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A SELECTION OF OUR WORK</p>
            <h2>Selected Projects</h2>
          </div>

          <span className="project-count">
            {filteredProjects.length} projects
          </span>
        </div>

        <label className="search-box">
          <span>⌕</span>
          <input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <div className="project-grid">
          {filteredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <img
                className="project-image"
                src={project.image}
                alt={project.title}
              />

              <div className="project-info">
                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="empty-message">
            No projects found. Try another search!
          </p>
        )}
      </section>

      <section className="add-section" id="add-project">
        <p className="eyebrow">GOT SOMETHING NEW?</p>
        <h2>Add a Project</h2>
        <p className="form-intro">
          Add a new piece of work to the portfolio.
        </p>

        <form className="project-form" onSubmit={handleSubmit}>
          <label>
            Project name *
            <input
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="e.g. Summer Campaign"
              required
            />
          </label>

          <label>
            Category *
            <input
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              placeholder="e.g. Branding"
              required
            />
          </label>

          <label>
            Description *
            <textarea
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
              placeholder="Tell us about this project..."
              rows={4}
              required
            />
          </label>

          <label>
            Image URL (optional)
            <input
              type="url"
              value={image}
              onChange={(event) => setImage(event.target.value)}
              placeholder="https://example.com/image.jpg"
            />
          </label>

          <button type="submit">Add Project +</button>
        </form>
      </section>

      <footer className="footer">
        <a className="logo" href="#">
          STUDIO<span>.</span>
        </a>
        <p>Making good things happen.</p>
      </footer>
    </main>
  );
}

export default App;
