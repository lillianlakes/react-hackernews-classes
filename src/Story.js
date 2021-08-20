import React from "react";
import { Link } from "react-router-dom";

class Story extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Story">
        <Link to={props.url}>
          <h1> {props.title} </h1>
        </Link>
      </div>
    );
  }
} //end
export default Story;
