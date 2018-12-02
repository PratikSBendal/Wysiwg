import React, { Component } from "react";
import "../plugin";
import "./wysiwyg.css";
import saveAs from "file-saver";
class Wysiwyg extends Component {
  constructor() {
    super();
    this.state = {
      isHidden:true
    };
  }

  render() {
    return (
      <div className="conatiner">
        <div className="row justify-content-center">
          <div className="col-2">Wysiwyg Editor</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <div className=" panel panel-default">
             <div className="panel-heading">
             <div>
             <div class="btn-group">
                <button type="button" onClick={this.textBold} className="btn btn-primary font-size-16"><b>B</b></button>
                <button type="button" onClick={this.textItalic} className="btn btn-primary font-size-16"><i>I</i></button>
                <button type="button" onClick={this.textUnderline} className="btn btn-primary font-size-16"><u>U</u></button>
                <button type="button" onClick={this.addhyperlink} className="btn btn-primary font-size-16">Link</button>
                <button type="button" onClick={this.fontSize} className="btn btn-primary font-size-16">Size</button>
                <button type="button" onClick={this.fontColor} className="btn btn-primary font-size-16">FontColor</button>
                <input id="fileupload" type="file" multiple="multiple" className="btn btn-primary"/>  
              </div>
              </div>
             </div>
              <div className="panel-body">
                <div className="parent-div">
                  <div
                    id="fake_textarea"
                    name="text"
                    className="fake-text-area"
                    contentEditable
                  />
                 
                </div> 
                <div className="text-center pt-4">
                <button type="button" onClick={this.submitData} className="btn btn-secondary font-size-16 ">Add</button>
                </div> 
                <div className="parent-div mt-4">
                 <div id="outputarea"></div> 
                </div>
                <div className="text-center pt-4">
                  <input type="text" id="filename" className="input-box mr-2"/>
                  <button type="button"  onClick={this.downloadHtml} className="btn btn-secondary font-size-16">.html</button>
                </div> 
            </div>     
            </div>
          </div>
        </div>
      </div>
    );
  } 
  textBold = () => {
    document.execCommand("bold", false, null);
  };

  textItalic = () => {
    document.execCommand("italic", false, null);
  };

  textUnderline = () => {
    document.execCommand("underline", false, null);
  };
  fontSize = () =>
  {
    var size = prompt("Enter a size (1-7)", "");
	  document.execCommand('fontsize', false, size);
 };
 fontColor = () =>
 {
  var color = prompt("Enter a hexadecimal code or name of color", "");
	document.execCommand('forecolor', false, color);
 }
  addhyperlink = () => {
    var link = prompt("Enter a link", "http://");
    document.execCommand("createlink", false, link);
  };
  submitData = () => {
    document.getElementById("outputarea").innerHTML = document.getElementById(
      "fake_textarea"
    ).innerHTML;
  };
  downloadHtml = () => {
   
    var save = document.getElementById("outputarea").innerHTML;
    var filinput = document.getElementById("filename").value;
    var blob = new Blob([save], { type: "html/plain;charset=utf-8" });
    saveAs(blob, filinput + ".html");
  };

}

export default Wysiwyg;
