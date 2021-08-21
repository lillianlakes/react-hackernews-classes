import React from "react";
import { Link } from "react-router-dom";

class Story extends React.Component {
  render() {
    return (
      <div className="Story">
        <a href={this.props.hit.url}>
          <h1> {this.props.hit.title} </h1>
        </a>
      </div>
    );
  }
} //end
export default Story;
