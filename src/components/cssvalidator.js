import React from "react";
import { validate } from "w3c-css/lib/css-validator";
export default class Cssvalidator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fileData: "", textData: "" };
  }
  change() {
    const file = document.querySelector(".file").files[0];
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
    let data = this.state.textData;
    try {
          data = validate(data);
    } catch (error) {
      document.querySelector(".css-validator-final").innerHTML = `this ${error}`;
    }
    console.log(data);
    document.querySelector(".css-validator-final").innerHTML = data;
  }
  render() {
    return (
      <div>
      <h2>CSS VALIDATOR</h2>
        <p>Submit your code below</p> <br />
        <textarea
          className="text"
          wrap="true"
          onChange={e => this.textChange(e)}
        ></textarea>
        <input className="file" type="file" required></input>
        <button type="submit" onClick={e => this.change(e)}></button>
        <div className="res">
          <p>
            YOUR INPUT Data:
            <br />
            {this.state.textData}
          </p>
          <p>
            Your File Data <br /> {this.state.fileData}
          </p>
        </div>
        <br />
        <button onClick={e => this.finalRender(e)}>Render</button>
        <div className="css-validator-final"></div>
      </div>
    );
  }
}
