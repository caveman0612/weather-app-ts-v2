import React, { useEffect, useState } from "react";
import DashBoard from "./Weather/DashBoard";
import Footer from "./Weather/Footer";
import NavBar from "./Weather/NavBar";
import SearchField from "./Weather/SearchField";
import { IformData } from "./types";

// type IformData = {
//   [key: string]: string;
//   zip: string;
//   city: string;
//   lat: string;
//   lon: string;
//   type: string;
// };

function App() {
  const [apiData, setApiData] = useState(null);
  const [formData, setFormData] = React.useState<IformData>({
    zip: "",
    city: "",
    lat: "",
    lon: "",
    type: "zip",
  });
  const [searchObj, setSearchObj] = useState<IformData>({
    zip: "",
    city: "seattle",
    lat: "",
    lon: "",
    type: "city",
  });

  useEffect(() => {
    const controller = new AbortController();
    let URL = "";
    if (searchObj.type === "zip") {
      URL = `https://api.openweathermap.org/data/2.5/weather?zip=${searchObj.zip},us&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    } else if (searchObj.type === "city") {
      URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchObj.city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    } else if (searchObj.type === "lat/lon") {
      URL = `https://api.openweathermap.org/data/2.5/weather?lat=${searchObj.lat}&lon=${searchObj.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    }

    fetch(URL, { signal: controller.signal })
      .then((res) => res.json())
      .then((res) => {
        setApiData(res);
      })
      .catch(console.log);
    return () => controller.abort();
  }, [searchObj]);

  function handleSubmit(event: any) {
    event.preventDefault();
    setSearchObj(formData);
    setFormData({
      zip: "",
      city: "",
      lat: "",
      lon: "",
      type: "zip",
    });
  }

  return (
    <div className="App">
      <NavBar />
      <SearchField
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <DashBoard apiData={apiData} />
      <Footer />
    </div>
  );
}

export default App;
