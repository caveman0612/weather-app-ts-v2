import * as React from 'react';

export interface IInputsProps {
    inputs: string,
    handleSubmit: ()=> void;
}

type IformData = {
    [key: string]: string,
    zip: string,
    city: string,
    lat: string,
    lon: string,
}

export default function Inputs ({inputs, handleSubmit}: IInputsProps) {
    const [formData, setFormData] = React.useState<IformData>({
        zip: "",
        city: "",
        lat: "",
        lon: ""
    })

  return (
    <form action="" onSubmit={handleSubmit} className="d-flex">
        {inputs.split("/").map((item, idx) => {
            return <div key={idx}>
            <label htmlFor={item} className="d-none"></label>
            <input type="text" name={item} placeholder={`Input ${item}`} id={item} value={formData[item]} className="me-3"/>
            </div>
        })}
        
       
        
    </form>
  );
}
