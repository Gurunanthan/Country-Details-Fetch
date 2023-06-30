import React, { Component } from "react";
// import "../App.css";


export default class CountryResult extends Component {
  render() {
    let {
      commonname,
      capital,
      status,
      unMember,
      flag,
      independent,
      population,
      borders,
      latlng,
      altSpellings,
      maps,
      currencies,
      startOfWeek,
      timezones,
      region,
      subregion,
      coatOfArms,
    } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={coatOfArms}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">{commonname}</h1>
                <table className="text-wrap" cellPadding={10}>
                  <thead>
                    <tr>
                      <td>
                        <h4>Category</h4>
                      </td>

                      <td>
                        <h4>Details</h4>
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h6>Capital</h6>
                      </td>

                      <td>
                        <h6>{capital}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Status</h6>
                      </td>

                      <td>
                        <h6>{status}</h6>
                      </td>
                    </tr>
                    <tr></tr>
                    <tr>
                      <td>
                        <h6>Member of United Nation</h6>
                      </td>

                      <td>
                        <h6>{unMember ? "Yes" : "No"}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>National Flag</h6>
                      </td>

                      <td>
                        <h6>{flag}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Independent</h6>
                      </td>

                      <td>
                        <h6>{independent ? "Yes" : "No"}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Population</h6>
                      </td>

                      <td>
                        <h6>{population} People</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Borders Shared</h6>
                      </td>
                      <td>
                        <h6>
                          {borders.map((element) => (
                            <p style={{display:"inline-block"}}>{element}&nbsp;&nbsp;</p>
                          ))}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>latitude and longitude</h6>
                      </td>
                      <td>
                        <h6>
                          {latlng[0]} 	&#176; latitude, {latlng[1]} 	&#176; longitude
                        </h6>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h6>Region</h6>
                      </td>
                      <td>
                        <h6>{region}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Subregion</h6>
                      </td>

                      <td>
                        <h6>{subregion}</h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Time Zone</h6>
                      </td>

                      <td>
                        <h6>
                          {timezones.map((timezone, index) => (
                            <p key={index}>{timezone}</p>
                          ))}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Alternate Names</h6>
                      </td>

                      <td>
                        <h6>
                          {altSpellings.map((spelling, index) => (
                            <p key={index} style={{display:"inline-block"}}>{spelling},&nbsp;&nbsp;</p>
                          ))}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Currencies:</h6>
                      </td>

                      <td>
                        <h6>
                          {Object.keys(currencies).map((key) => (
                            <p key={key}>
                              <strong>
                                {key}: {currencies[key].name}
                                {","}
                                {currencies[key].symbol}
                              </strong>
                            </p>
                          ))}
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Google Maps</h6>
                      </td>

                      <td>
                        <h6>
                          <button className="btn btn-dark">
                            <a
                              href={maps.googleMaps}
                              className="text-light"
                              style={{ textDecoration: "none" }}
                            >
                              Click here
                            </a>
                          </button>
                        </h6>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Week Day Starts At</h6>
                      </td>

                      <td>
                        <h6>
                          {startOfWeek.charAt(0).toUpperCase() +
                            startOfWeek.slice(1)}
                        </h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
