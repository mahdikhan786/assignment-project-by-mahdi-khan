import React from "react";
var base64 =  require('base-64');
var utf8 = require('utf8');
export default class Baseencoderdecoder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {textData: "" };
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
    this.setState({ textData: e.target.value });
  }
  finalRender(e, param) {
    var data = this.state.textData;
    try {
         if(param === 'encode'){
             var utfEncode = utf8.encode(data);
             var baseEncode = base64.encode(utfEncode);
             data = baseEncode;
         }else{
            var baseDecode = base64.decode(data);
            var utf8Decode = utf8.decode(baseDecode);
            data = utf8Decode; 
         }

        console.log(data);
    } catch (error) {
      document.querySelector(".encoder-decoder-final").innerHTML = `this ${error}`;
    }
    document.querySelector(".encoder-decoder-final").innerHTML = data;
  }
  render() {
    return (
      <div>
      <h2>Base64 Encoder Decoder </h2>
        <p>Submit your code below</p> <br />
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
        <button onClick={e => this.finalRender(e, 'encode')}>encode</button>
        <button onClick={e => this.finalRender(e, 'decode')}>decode</button>
        <pre style={{textAlign:"start"}} className="encoder-decoder-final" ></pre>
      </div>
    );
  }
}
