import * as React from 'react';

export interface IDashBoardProps {
}

export default function DashBoard (props: IDashBoardProps) {
  return (
    <div className='container mt-5'>
      <h2 className='text-center'>Weather in --seattle--</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 g-md-5">
          <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Temperture</h3>
              <p className='h3 my-5'>--10&#8451;/--50--&#8457;</p>
          </div>
          <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Weather</h3>
          </div>
          <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Wind</h3>
          </div>
          <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Pressure</h3>
          </div>
          <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Sunrise/Sunset</h3>
          </div>
          <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Humdity</h3>
          </div>
      </div>
    </div>
  );
}
