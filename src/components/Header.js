// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Kleanthis Liontis" />

            <div className='header__content'>
                <h1>Hi, I am Kleanthis Liontis</h1>
                <p>Software Engineer/Blockchain Developer</p>
                <a href="mailto:klionsoftware@gmail.com?subject=I%20have%20a%20business%20proposal" className='button'>Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;