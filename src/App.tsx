import React, {useEffect} from 'react';
import DashBoard from './Weather/DashBoard';
import Footer from './Weather/Footer';
import NavBar from './Weather/NavBar';
import SearchField from './Weather/SearchField';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchField />
      <DashBoard />
      <Footer />
    </div>
  );
}

export default App;
