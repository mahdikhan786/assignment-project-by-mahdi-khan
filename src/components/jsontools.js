import React from "react";
// import JSONFormatter from "json-formatter-js";

export default class Jsontools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fileData: "", textData: "" };
  }
  change(e) {
    e.preventDefault(); 

    const file = document.querySelector(".json-file").files[0];
    const reader = new FileReader();
    var daata = "";
    reader.onload = e => {
      daata = e.target.result;
      this.setState({ fileData: daata });
    };
    reader.readAsText(file);
  }
  textChange(e) {
    this.setState({ ...this.state, textData: e.target.value });
  }
  finalRender() {
    document.querySelector(".json-formatter-final").innerHTML = ' ';

    let data = this.state.textData || this.state.fileData;
    try {
      // var formatter = new JSONFormatter(JSON.parse(data), 3);
    } catch (error) {
      document.querySelector(".json-formatter-final").innerHTML = `this ${error}`;
    }
    document.querySelector(".json-formatter-final").innerHTML = 'working';
  }
  render() {
    return (
      <div>
        <h2>JSON Tools</h2>
       
        <p>Submit your code below</p> <br />
        <form>
        <input className="json-file" type="file" required></input>
        <button type="submit" onClick={e => this.change(e)}>Submit</button>
        </form>
        <textarea
          className="text"
          wrap="true"
          onChange={e => this.textChange(e)}
        ></textarea>
        <div className="res">
          <p>
            YOUR INPUT Data:
            <br />
            {this.state.textData}
          </p>
          <p>
            Your File Data :<br /> {this.state.fileData}
          </p>
        </div>
        <br />
        <button onClick={e => this.finalRender(e)}>Format</button>
        <div style={{textAlign:"start"}} className="json-formatter-final"></div>
      </div>
    );
  }
}
