import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-dark ">
          <div class="container-fluid">
            <a class="navbar-brand text-white" href="/">
              Country Details Display
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
