import * as React from "react";
import Inputs from "./Inputs";

type IformData = {
  [key: string]: string;
  zip: string;
  city: string;
  lat: string;
  lon: string;
  type: string;
};

export interface ISearchFieldProps {
  formData: IformData;
  setFormData: React.Dispatch<React.SetStateAction<IformData>>;
  handleSubmit: (event: any) => void;
}

export default function SearchField({
  formData,
  setFormData,
  handleSubmit,
}: ISearchFieldProps) {
  function handleSearchChange(event: any) {
    setFormData({
      zip: "",
      city: "",
      lat: "",
      lon: "",
      type: event.target.value,
    });
  }

  return (
    <div className="d-flex container">
      <select onChange={handleSearchChange} className="me-4">
        <option value="zip">Zip</option>
        <option value="city">City</option>
        <option value="lat/lon">Lat/Lon</option>
      </select>
      <Inputs
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}
