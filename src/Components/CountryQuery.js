import React, { Component } from "react";
import Loader from "./Loader";
import CountryResult from "./CountryResult";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class CountryQuery extends Component {
  constructor() {
    super();
    this.state = {
      Country: [],
      CountryName: "india",
      countrdetails: "Enter the Country Details",
      loading: true,
    };
  }

  fetchingDetails = async () => {
    try {
      let url = `https://restcountries.com/v3.1/name/${this.state.CountryName}?fullText=true`;
      let data = await fetch(url);
      this.setState({ loading: true });
      let parsedData = await data.json();
      this.setState({ Country: parsedData });
      this.setState({ loading: false });
    } catch (error) {
      console.log("Error fetching country details:", error);
    }
  };

  componentDidMount() {
    this.fetchingDetails();
  }

  setCountry = (event) => {
    var country = event.target.value;
    this.setState({ CountryName: country });
    if (country === "") {
      this.setState({ countrydetails: "Enter the Country Details" });
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter" && this.state.CountryName !== "") {
      this.searchCountry();
    }
  };

  searchCountry = () => {
    this.fetchingDetails();
    this.setState({ countrdetails: "Details" });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="container bg-dark p-5 m-auto mt-5">
          <h1 className="text-white">{this.state.countrdetails}</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Valid Country Name"
              aria-describedby="basic-addon2"
              onChange={this.setCountry}
              onKeyPress={this.handleKeyPress}
            />
            <button onClick={this.searchCountry}>
              <span className="input-group-text" id="basic-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </span>
            </button>
          </div>
          {this.state.loading && <Loader />}
          {this.state.Country.map((element) => {
            return (
              <CountryResult
                key={element.name.common}
                commonname={element.name.common || "Unknown"}
                capital={element.capital || "Unknown"}
                status={element.status || "Unknown"}
                unMember={element.unMember || false}
                flag={element.flag || ""}
                independent={element.independent || false}
                population={element.population || 0}
                borders={element.borders || [" no border"]}
                latlng={element.latlng || []}
                altSpellings={element.altSpellings || []}
                translations={element.translations || {}}
                maps={element.maps || ""}
                currencies={element.currencies || []}
                startOfWeek={element.startOfWeek || ""}
                timezones={element.timezones || []}
                region={element.region || ""}
                subregion={element.subregion || ""}
                coatOfArms={element.coatOfArms.png || ""}
              />
            );
          })}
        </div>
        <Footer />
      </>
    );
  }
}
