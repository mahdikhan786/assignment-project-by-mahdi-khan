import React from "react";
var htmlFormatter = require('html-formatter');
export default class Htmltools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fileData: "", textData: "" };
  }
  change() {
    const file = document.querySelector(".html-file").files[0];
    console.log(file);
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
      data = htmlFormatter.render(data);
      console.log(data);
    } catch (error) {
      document.querySelector(".html-formatter-final").innerHTML = `this ${error}`;
    }
    document.querySelector(".html-formatter-final").innerHTML = data.replace(/</ig, '&lt;').replace(/>/ig, '&gt;');
  }
  render() {
    return (
      <div>
      <h2>HTML TOOLS</h2>
        <p>Submit your code below :</p> <br />
       <form>
        <input className="html-file" type="file" required></input>
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
            Your File Data :  <br /> {this.state.fileData}
          </p>
        </div>
        <br />
        <button onClick={e => this.finalRender(e)}>Format</button>
        <pre className="html-formatter-final" style={{textAlign:"start"}} ></pre>
      </div>
    );
  }
}
