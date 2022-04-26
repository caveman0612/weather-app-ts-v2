import React, {useEffect, useState} from 'react';
import DashBoard from './Weather/DashBoard';
import Footer from './Weather/Footer';
import NavBar from './Weather/NavBar';
import SearchField from './Weather/SearchField';

type IformData = {
    [key: string]: string,
    zip: string,
    city: string,
    lat: string,
    lon: string,
  }


function App() {

  const [apiData, setApiData] = useState(null);
  const [formData, setFormData] = React.useState<IformData>({
    zip: "",
    city: "",
    lat: "",
    lon: ""
})
  const [searchType, setSearchType] = useState("zip")
  const [searchObj, setSearchObj] = useState(null);
  

useEffect(() => {
  const controller = new AbortController();

}, [])

  return (
    <div className="App">
      <NavBar />
      <SearchField  
      searchType={searchType} 
      setSearchType={setSearchType}
      formData={formData}
      setFormData={setFormData}
      />
      <DashBoard />
      <Footer />
    </div>
  );
}

export default App;
