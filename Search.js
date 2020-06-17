import React, { Component, createElement } from 'react';
//import { Link } from 'react-router-dom';
import './Search.css';
import ReactDOM from 'react-dom';
import { saveAs } from 'file-saver';

import fire from './config/fire';
import Request from './Request';
import  ipfs from './ipfs';
import Decrypt from './Decrypt';
var encrdata;
class Search extends Component {
  constructor(props) {
    
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.requestpage=this.requestpage.bind(this);
    this.state={
      data:'',
    }
    
   
    
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  
requestpage=  async (e) => {
  e.preventDefault();
  var str1;                                          
  str1=this.search.value;      ////Enter Hash id to go to ipfs browser and download the encrypted text///////////////

  const urldata=('https://gateway.ipfs.io/ipfs/'+str1)
  console.log(urldata)
////////
let resp=await fetch(urldata)       //fetching encrypted data from url////
let text=await resp.text()
this.text=text
console.log(this.text)
this.fileName = "newfile001.txt";
this.saveTextAsFiles(this.text,this.fileName);    ///storing the fetched encrypted data from url into an a file////
    
 


   ReactDOM.render(<Decrypt />, document.getElementById('root'));
  }

  /////////////////////////////////////////

  saveTextAsFiles(data, filename){    //save function of encrypted file
    let reader = new window.FileReader()

    console.log("save text as file");
   // console.log(data);
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

  //---------------------------------ipfs uploading calling convertToBuffer Function---------------------
 



    
}
//////////////////////////////////////////
  
  render() {

    return (
        <div>
          <head>
      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css"/>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous"/>
    </head>
    
      <div class="container">
        <div class="row justify-content-center">
                              <div class="col-12 col-md-10 col-lg-8">
                                  <form class="card card-sm">
                                      <div class="card-body row no-gutters align-items-center">
                                          <div class="col-auto">
                                              <i class="fas fa-search h4 text-body"></i>
                                          </div>
                                          <div class="col">
                                              <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords" ref={input => this.search = input} required/>
                                          </div>
                                          <div class="col-auto">
                                              <button class="btn btn-lg btn-success" type="submit" onClick={this.requestpage}>Search</button>
                                          </div>
                                          
                                          
                                      </div>
                                  </form>
                              </div>
        </div>
      </div>
        </div>
        
    );
  }
}
export default Search;
