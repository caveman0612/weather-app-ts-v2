import * as React from "react";

type IformData = {
  [key: string]: string;
  zip: string;
  city: string;
  lat: string;
  lon: string;
};

export interface IInputsProps {
  inputs: string;
  handleSubmit: () => void;
  formData: IformData;
  setFormData: React.Dispatch<React.SetStateAction<IformData>>;
}

export default function Inputs({
  inputs,
  handleSubmit,
  formData,
  setFormData,
}: IInputsProps) {
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }
  return (
    <form action="" onSubmit={handleSubmit} className="d-flex">
      {inputs.split("/").map((item, idx) => {
        return (
          <div key={idx}>
            <label htmlFor={item} className="d-none"></label>
            <input
              type="text"
              name={item}
              placeholder={`Input ${item}`}
              id={item}
              value={formData[item]}
              onChange={handleInputChange}
              className="me-3"
            />
          </div>
        );
      })}
    </form>
  );
}
