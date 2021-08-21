import React from "react";

/** Search Form.
 *
 * This component lets a user search articles on Hacker News based on a search term
 *
 * App -> StoryList -> SearchForm
 */

class SearchForm extends React.Component {
  // { searchFor }
  constructor(props) {
    super(props);

    this.state = { searchTerm: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  /** Tell parent to filter */
  handleSubmit(evt) {
    // take care of accidentally trying to search for just spaces
    evt.preventDefault();
    this.props.searchFor(this.state.searchTerm.trim() || undefined);
    this.setState({ searchTerm: this.state.searchTerm.trim() });
  }

  /** Update form fields */
  handleChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  render() {
    return (
      <div className="SearchForm mb-4">
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <input
            className="form-control form-control-lg flex-grow-1"
            name="searchTerm"
            placeholder="Enter search term.."
            value={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-lg btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;

