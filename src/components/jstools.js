import React from "react";
var beautify = require('js-beautify');

export default class Jstools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fileData: "", textData: "" };
  }
  change(e) {
    e.preventDefault(); 
    const file = document.querySelector(".js-file").files[0];
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
    var formatdata = this.state.textData || this.state.fileData;
    try {
      formatdata = beautify(formatdata);
        console.log(formatdata);
    } catch (error) {
      document.querySelector(".js-formatter-final").innerHTML = `this ${error}`;
    }
    document.querySelector(".js-formatter-final").innerHTML = formatdata;
  }
 

  
  render() {
    return (
      <div>
      <h2>JS TOOLS</h2>
        <p>Submit your code below :</p> <br />
        <form>
        <input className="js-file" type="file" required></input>
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
            Your File Data : <br /> {this.state.fileData}
          </p>
        </div>
        <br />
        <button onClick={e => this.finalRender(e)}>Format</button>
        <pre style={{textAlign:"start"}} className="js-formatter-final" ></pre>
        {/* <button onClick={e => this.minify(e)}>minify</button> */}

        {/* <pre style={{textAlign:"start"}} className="js-minifier-final" ></pre> */}
      </div>
    );
  }
}
