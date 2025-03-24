import React from 'react';

const Projects = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="project">
                <h3>Project Title</h3>
                <p>Description of the project.</p>
                <p>Technologies used: [Tech Stack]</p>
                <a href="[Link to Project]">View Project</a>
            </div>
            {/* Add more projects as needed */}
        </section>
    );
};

export default Projects;