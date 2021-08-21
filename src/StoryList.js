import React from "react";
import axios from "axios";
import Story from "./Story";
import SearchForm from "./SearchForm";

class StoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hits: [] };
    this.search = this.search.bind(this);
  }
  async search(term) {
    const response = await axios.get(
      `https://hn.algolia.com/api/v1/search?query=${term}`
    );
    const hits = response.data.hits.map(({ title, url, author, objectID }) => ({
      title,
      url,
      author,
      objectID,
    }));
    this.setState({ hits });
  }

  render() {
    return (
      <div className="StoryList">
        <SearchForm searchFor={this.search} />
        {this.state.hits.length > 0 && (
          <ul>
            {this.state.hits.map((hit) => (
              <li key={hit.objectID}>
                <Story hit={hit} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
// end

export default StoryList;
