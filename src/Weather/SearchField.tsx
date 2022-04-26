import * as React from "react";
import Inputs from "./Inputs";

type IformData = {
  [key: string]: string;
  zip: string;
  city: string;
  lat: string;
  lon: string;
};

export interface ISearchFieldProps {
  searchType: string;
  formData: IformData;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
  setFormData: React.Dispatch<React.SetStateAction<IformData>>;
}

export default function SearchField({
  searchType,
  setSearchType,
  formData,
  setFormData,
}: ISearchFieldProps) {
  function handleSearchChange(event: any) {
    setSearchType(event.target.value);
    setFormData({
      zip: "",
      city: "",
      lat: "",
      lon: "",
    });
  }

  function handleSubmit() {}
  return (
    <div className="d-flex container">
      <select onChange={handleSearchChange} className="me-4">
        <option value="zip">Zip</option>
        <option value="city">City</option>
        <option value="lat/lon">Lat/Lon</option>
      </select>
      <Inputs
        inputs={searchType}
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
