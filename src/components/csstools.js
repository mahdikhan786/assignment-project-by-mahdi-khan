import React from "react";
var cssbeautify = require('cssbeautify');
export default class Csstools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fileData: "", textData: "" };
  }
  change(e) {
    e.preventDefault(); 

    const file = document.querySelector(".css-file").files[0];
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
    var data = this.state.textData || this.state.fileData;
    try {
data = cssbeautify(data, {
  indent: '  ',
  openbrace: 'separate-line',
  autosemicolon: true
})
console.log(data);
    } catch (error) {
      document.querySelector(".css-formatter-final").innerHTML = `this ${error}`;
    }
    document.querySelector(".css-formatter-final").innerHTML = data;
  }
  render() {
    return (
      <div>
      <h2>CSS TOOLS</h2>
        <p>Submit your code below: </p> <br />
        <form>
        <input className="css-file" type="file" required></input>
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
            Your File Data <br /> {this.state.fileData}
          </p>
        </div>
        <br />
        <button onClick={e => this.finalRender(e)}>Format</button>
        <pre className="css-formatter-final" style={{textAlign:'left'}}></pre>
      </div>
    );
  }
}
