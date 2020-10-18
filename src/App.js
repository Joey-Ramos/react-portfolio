import React, {useState} from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {

  const [ currentPage, setCurrentPage ] = useState();

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
          return <Project />;
      case 'Contact Me':
          return <Contact />;
      case 'Resume':
          return <Resume />;
      default: 
          return <Aboutme />;
    }
  }


  return (
    <div>
      <Header></Header>
      <main>
        <div>
          {renderPage()}
          <Footer />
        </div>
      </main>
    </div>
  )
  
}

export default App;
