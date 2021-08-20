import React from "react";
import axios from "axios";
import Story from "./Story";

class StoryList extends React.Component {
  state = { hits: null };

  async componentDidMount(term) {
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
      <div>
        <ul>
          {this.state.hits.map((hit) => (
            <li key={hit.objectID}>
              <Story hit={hit} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
// end

export default StoryList;

