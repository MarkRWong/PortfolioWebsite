import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './assets/css/styles.css';

const App = () => {
    return (
        <Router>
            <Header />
            <section id="home">
                <Home />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <footer>
                <p>&copy; 2025 Mark Wong. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;