import React, { Component } from 'react';
import fire from './config/fire';
import ReactDOM from 'react-dom';
import './Decrypt.css';
import Search from './Search'
import { saveAs } from 'file-saver';
var CryptoJS = require('crypto-js');

class Decrypt extends Component {
  constructor(props) {
    super(props);
     
    this.Decryption=this.Decryption.bind(this);
    this.saveTextAsFiles=this.saveTextAsFiles.bind(this);

    
    
  }

  Decryption(event)
  {
    event.stopPropagation()
    event.preventDefault()
    var text
    var password;

  password=this.search.value; //enter password
  console.log(password);

  let reader = new window.FileReader();
  let selectedFile=document.getElementById('upfile').files[0]; //encrypted file selecting after downloading is done
  

  reader.onload = function() {

   text = reader.result
   var decrypted= CryptoJS.AES.decrypt(text,password).toString(CryptoJS.enc.Utf8);
    this.fileText = decrypted;
    console.log(decrypted);
  var time2=new Date().getTime();
    this.fileName = "newfile001.txt";
   this.saveTextAsFiles(this.fileText,this.fileName); 

 }.bind(this)
  reader.readAsText(selectedFile);
  
///////////////////////////////////////////////////////////////////////**** */

     

  



  }

  saveTextAsFiles(data, filename){  //decrypting contents and downloading the decrypted file///

    console.log("save text as file");
   console.log(data);
    if(!data) {
      console.error('Console.save: No data')
      return;
  }

  if(!filename) filename = 'console.json'
  //console.log(filename)
  var blob = new Blob([data], {type: 'text/plain'}),
      e    = document.createEvent('MouseEvents'),
      a    = document.createElement('a')
  //console.log(blob);
  saveAs(blob,filename);
  }

  
  render() {
    return (

        <div>
      <div class="form-group">  
        <label for="txtPassword">Password</label>  
        <input type="password" class="form-control" placeholder="Enter decryption password" ref={input => this.search = input}/>  
      </div>  
      <input id="upfile" 
              type = "file" 
              
            />        
      <button type="submit"  class="btn btn-success float-right" onClick={this.Decryption} >Decrypt </button> 
      <div>
        <h2>
          
        </h2>
        </div>
    
  </div>
      
    );
  }
}
export default Decrypt;