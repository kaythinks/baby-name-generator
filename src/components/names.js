import React, { Component } from 'react';

class Names extends Component{
constructor(props) {
    super(props);
    this.state = {value: 'boy',quotes : []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReload = this.handleReload.bind(this);
}


handleChange(event){
  this.setState({value: event.target.value});
}

handleSubmit(event) {
    event.preventDefault();
    this.props.generateName(this.state.value)
}

handleReload(){
  window.location.reload(true)
}

componentDidMount() {
  fetch('https://type.fit/api/quotes')
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    this.setState({ quotes: data[Math.round(Math.random() * 1642)] })
    console.log(this.state.quotes)
  })
  .catch((err) => {
    console.log(err)
  } )
} 
  render() {
    return (
      <div className="container">
      
      <center style={{color: "white"}}><h3>Random Name Generator</h3>
      <div className="responsive">
          <form onSubmit={this.handleSubmit} >
            <label>
              SELECT GENDER
              <br/>
              <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                <option value="boy">Boy</option>
                <option value="girl">Girl</option>
              </select>
            </label>
            <br/>
            <button type="submit" className="btn btn-primary"> Submit </button>
          </form>
      </div>
      <br/>
      <div className="card" >
        <div className="card-body">
          <h5 className="card-title" style={{color: "black"}}>"{this.state.quotes.author}"</h5>
          <h6 className="card-subtitle mb-2 text-muted">{this.state.quotes.text}</h6>
        </div>
      </div>
      <br/>
      <button onClick={this.handleReload} className="btn btn-success"> Reload </button>
      </center>
      </div>
    )
  }
};

export default Names