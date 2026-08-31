
import { useState } from 'react';

function Header({ currentPage, onNavigate }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);
    const goHome = (event, section) => {
        event.preventDefault();
        closeMenu();
        onNavigate('home');
        requestAnimationFrame(() => document.querySelector(section)?.scrollIntoView({ behavior: 'smooth' }));
    };

    const openHobbies = (event) => {
        event.preventDefault();
        closeMenu();
        onNavigate('hobbies');
    };

    const openQualifications = (event) => {
        event.preventDefault();
        closeMenu();
        onNavigate('qualifications');
    };

    const openContact = (event) => {
        event.preventDefault();
        closeMenu();
        onNavigate('contact');
    };

    return (
        <header className="site-header">
            <a className="brand" href="#home" onClick={(event) => goHome(event, '#home')}>KG<span>.</span></a>
            <button
                className="menu-toggle"
                type="button"
                aria-expanded={menuOpen}
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span />
                <span />
            </button>
            <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
                <a href="#home" onClick={(event) => goHome(event, '#home')}>Home</a>
                <a href="#about" onClick={(event) => goHome(event, '#about')}>About</a>
                <a className={currentPage === 'qualifications' ? 'is-active' : ''} href="#qualifications-page" onClick={openQualifications}>Qualifications</a>
                <a className={currentPage === 'hobbies' ? 'is-active' : ''} href="#hobbies-page" onClick={openHobbies}>Hobbies</a>
                <a className={currentPage === 'contact' ? 'is-active' : ''} href="#contact-page" onClick={openContact}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;
