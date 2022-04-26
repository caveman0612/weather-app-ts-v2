import * as React from 'react';
import Inputs from './Inputs';

export interface ISearchFieldProps {
}

export default function SearchField (props: ISearchFieldProps) {
    
    const [searchType, setSearchType] = React.useState("zip")
    function handleSearchChange(event: any) {
        setSearchType(event.target.value)
    }

    function handleSubmit () {}
  return (
    <div className='d-flex container'>
      <select onChange={handleSearchChange} className="me-4">
          <option value="zip">Zip</option>
          <option value="city">City</option>
          <option value="lat/lon">Lat/Lon</option>
      </select>
      <Inputs inputs={searchType} handleSubmit={handleSubmit}/>

      
    </div>
  );
}
