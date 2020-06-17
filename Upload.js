import React, { Component } from 'react';
import {Table, Button, Form} from 'react-bootstrap';
import './Upload.css';
import web3 from './web3';
import ipfs from './ipfs';
import storehash from './storehash';
import '../src/assets/bootstrap/css/bootstrap.min.css';
import '../src/assets/css/Footer-Dark.css';
import '../src/assets/css/Header-Blue.css';
import '../src/assets/css/Login-Form-Dark.css';
import  '../src/assets/fonts/font-awesome.min.css';
import  '../src/assets/fonts/ionicons.min.css';
import fire from './config/fire';
import { saveAs, } from 'file-saver';

var CryptoJS = require('crypto-js');


class Upload extends Component {
  
  constructor(props) {
    super(props);
    this.saveTextAsFiles=this.saveTextAsFiles.bind(this);
    this.captureFile=this.captureFile.bind(this)
   
  }
 
    state = {
      ipfsHash:null,
      buffer:'',
      ethAddress:'',
      blockNumber:'',
      transactionHash:'',
      gasUsed:'',
      txReceipt: ''   
    };

    saveTextAsFiles(data, filename){
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
    reader.readAsArrayBuffer(blob);
        reader.onloadend = () => this.convertToBuffer(reader) 
        console.log("help2"); 



      
}
       
     
    
captureFile(event){
        var encrypted,fileName,fileText;
        event.stopPropagation()
        event.preventDefault()
        let reader = new window.FileReader()

        //----------------------------------File Encrypting--------------------------------------------------
        const id = Math.random().toString(36).substring(2);        //////prividing random password to user
        console.log(id);
        reader.onloadend = function(event) {
         // console.log("help");
        const text = (event.target.result)
        //console.log(text)
       encrypted = CryptoJS.AES.encrypt(event.target.result, id).toString();
        console.log(encrypted);
         this.fileText = encrypted;
        //console.log(encrypted);
         this.fileName = "newfile001.txt";
        this.saveTextAsFiles(this.fileText,this.fileName);    
          //      console.log("harish");
    
      }.bind(this)
       reader.readAsText(event.target.files[0]); 
        //console.log("harish");
        

      };
//-------------------------------------------------------------------------------------------------------------

   
    
 convertToBuffer = async(reader) => {
        const buffer = await Buffer.from(reader.result);
        this.setState({buffer});
    };
onClick = async () => {
try{
        this.setState({blockNumber:"waiting.."});
        this.setState({gasUsed:"waiting..."});
await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{
          console.log(err,txReceipt);
          this.setState({txReceipt});
        }); 
await this.setState({blockNumber: this.state.txReceipt.blockNumber});
        await this.setState({gasUsed: this.state.txReceipt.gasUsed});    
      }
    catch(error){
        console.log(error);
      }
  } 

onSubmit = async (event) => {
      var Title= document.getElementById("selectDoc").value;
      console.log("Title is= "+Title);
      event.preventDefault();
      const accounts = await window.ethereum.enable();
      console.log('Sending from Metamask account: ' + accounts[0]);
      const ethAddress= await storehash.options.address;
      this.setState({ethAddress});

      await ipfs.add(this.state.buffer, (err, ipfsHash) => {
        console.log(err,ipfsHash);

        this.setState({ ipfsHash:ipfsHash[0].hash });
        
        storehash.methods.setHash(this.state.ipfsHash).send({
          from: accounts[0] ,
        }, (error, transactionHash) => {
          console.log(transactionHash);
          this.setState({transactionHash});

          var userId = fire.auth().currentUser.uid;
          console.log(ipfsHash);
          var str=fire.database().ref("Users").child(userId).child(Title).set(ipfsHash);
          console.log(" str is"+str); 
          
        }); //storehash 
      }); //await ipfs.add 
    }; //onSubmit

    
render() {
      
      return (
        <div className="Upload">
          <header className="Upload-header">
            <h1> Ethereum and IPFS with Create React App</h1>
          </header>
          
          <hr />
<grid>

<form name="document">
<label for="text">Select Document: </label>
<select class="aqua-select" id="selectDoc">
          <option selected>Select File</option>
          <option value="Adhar">Adhar Card</option>
          <option value="Pancard">Pancard</option>
          <option value="Driving License">Driving License</option>
        </select>
</form>

        
          <h3> Choose file to send to IPFS </h3>
          <Form onSubmit={this.onSubmit}>
            <input 
              type = "file"
              onChange = {this.captureFile}
            />
             <Button 
             bsStyle="primary" 
             type="submit"> 
             Send it 
             </Button>
          </Form>
<hr/>
 <Button onClick = {this.onClick}> Get Transaction Receipt </Button>
  <Table bordered responsive>
                <thead>
                  <tr>
                    <th>Tx Receipt Category</th>
                    <th>Values</th>
                  </tr>
                </thead>
               
                <tbody>
                  <tr>
                    <td>IPFS Hash # stored on Eth Contract</td>
                    <td>{this.state.ipfsHash}</td>
                  </tr>
                  <tr>
                    <td>Ethereum Contract Address</td>
                    <td>{this.state.ethAddress}</td>
                  </tr>
                  <tr>
                    <td>Tx Hash # </td>
                    <td>{this.state.transactionHash}</td>
                  </tr>
                  <tr>
                    <td>Block Number # </td>
                    <td>{this.state.blockNumber}</td>
                  </tr>
                  <tr>
                    <td>Gas Used</td>
                    <td>{this.state.gasUsed}</td>
                  </tr>
                
                </tbody>
            </Table>
        </grid>
     </div>
      );
    } //render
} //App
export default Upload;