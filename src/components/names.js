import React, { Component } from "react";
import { RandomQuote } from "./RandomQuote";

class Names extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "boy", quotes: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.generateName(this.state.value);
  }

  handleReload() {
    window.location.reload(true);
  }

  render() {
    return (
      <div className="container">
        <center style={{ color: "white" }}>
          <h3>Random Name Generator</h3>
          <div className="responsive">
            <form onSubmit={this.handleSubmit}>
              <label>
                SELECT GENDER
                <br />
                <select
                  className="form-control"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  <option value="boy">Boy</option>
                  <option value="girl">Girl</option>
                </select>
              </label>
              <br />
              <button type="submit" className="btn btn-primary">
                {" "}
                Submit{" "}
              </button>
            </form>
          </div>
          <br />
          <RandomQuote />
          <br />
          <button onClick={this.handleReload} className="btn btn-success">
            {" "}
            <i className="fas fa-redo"></i> &nbsp; Reload{" "}
          </button>
        </center>
      </div>
    );
  }
}

export default Names;
