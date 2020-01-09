import React, { Component } from "react";
import "./display.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  Event = e => {
    if (e.target.id === "headerIconNone") {
      e.target.id = "headerIconRed";
    } else {
      e.target.id = "headerIconNnone";
    }
  };
  render() {
    return (
      <div id="header">
        <h1>{this.props.header}</h1>
        <FontAwesomeIcon
          icon={faHeart}
          id="headerIconNone"
          onClick={this.Event}
        />
      </div>
    );
  }
}

export default Header;
