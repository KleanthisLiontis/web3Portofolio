// Import Assets
import aboutme from '../assets/aboutme.png';
import compound from '../assets/compound.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>This site</h3>
                    <img src={aboutme} alt="This Website" />
                    <p>Just a small test of deploying a website on Web3, website was made with React.
                    </p>

                    <a href="https://damp-bird-9795.on.fleek.co/" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Compound</h3>
                    <img src={compound} alt="Compound Landing Page" />
                    <p>More to come
                    </p>
                </div>
         
            </div>
        </section>
    );
}

export default Projects;