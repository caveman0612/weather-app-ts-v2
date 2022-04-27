import * as React from "react";
import { BsArrowUp } from "react-icons/bs";

export interface IDashBoardProps {
  apiData: any;
}

export default function DashBoard({ apiData }: IDashBoardProps) {
  return (
    <div className="container mt-5">
      {!apiData ? (
        <h2 className="text-center">Data Loading</h2>
      ) : (
        <div className="">
          <h2 className="text-center">Weather in {apiData.name}</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 g-md-5">
            <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Temperture</h3>
              <p className="h3 my-5">
                {Math.round(apiData.main.temp - 273.15)}&#8451; /{" "}
                {Math.round(((apiData.main.temp - 273.15) * 9) / 5 + 32)}&#8457;
              </p>
            </div>
            <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Weather</h3>
              <p>{apiData.weather[0].description}</p>
              <img
                src={`http://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
                alt="weather symbol"
              />
            </div>
            <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Wind</h3>
              <p>{(apiData.wind.speed * 2.237).toFixed(0)} mph</p>
              <span className="ps-1">N</span>
              <div className="d-flex align-items-center">
                <span className="me-2">W</span>
                <div
                  className="border border-3 rounded-circle d-flex justify-content-center align-items-center"
                  style={{
                    transform: `rotate(${apiData.wind.deg}deg)`,
                    height: "4rem",
                    width: "4rem",
                  }}
                >
                  <BsArrowUp size={30} />
                </div>
                <span className="ms-2">E</span>
              </div>

              <span className="ps-1">S</span>
            </div>
            <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Pressure</h3>
              <p>{apiData.main.pressure} hPa</p>
            </div>
            <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Sunrise/Sunset</h3>
              <span>
                sunrise -{" "}
                {new Date(parseInt(apiData.sys.sunrise) * 1000).getHours()}:
                {new Date(parseInt(apiData.sys.sunrise) * 1000).getMinutes()}{" "}
                {new Date(parseInt(apiData.sys.sunrise) * 1000).getHours() < 12
                  ? "am"
                  : "pm"}
              </span>
              <span>
                sunset -{" "}
                {new Date(parseInt(apiData.sys.sunset) * 1000).getHours()}:
                {new Date(parseInt(apiData.sys.sunset) * 1000).getMinutes()}{" "}
                {new Date(parseInt(apiData.sys.sunset) * 1000).getHours() < 12
                  ? "am"
                  : "pm"}
              </span>
            </div>
            <div className="col border p-4 d-flex flex-column align-items-center">
              <h3>Humdity</h3>
              <p>{apiData.main.humidity}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
