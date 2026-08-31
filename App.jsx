import Header from './Header.jsx'
import Footer from './Footer.jsx'
import AboutMe from './aboutme.jsx'
import Button from './button.jsx'
import Hobbies from './Hobbies.jsx'
import Qualifications from './Qualifications.jsx'
import Contact from './Contact.jsx'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('home');

  const navigateTo = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header currentPage={page} onNavigate={navigateTo} />
      <div className="page-content" key={page}>
        {page === 'hobbies' ? <Hobbies /> : page === 'qualifications' ? <Qualifications /> : page === 'contact' ? <Contact /> : <><AboutMe /><Button /></>}
      </div>
      <Footer />
    </>
  );
}

export default App