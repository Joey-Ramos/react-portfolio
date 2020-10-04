import React, {useState} from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {

  const [projectSelected, setProjectSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <main>
        <div>
          {!projectSelected ? (
            <>
              <Footer></Footer>
            </>
          ) : (
            <Project></Project>
          )}
        </div>
      </main>
    </div>
  )
  
}

export default App;
