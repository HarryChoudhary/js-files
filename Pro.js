import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import fire from './config/fire';
import ReactDOM from 'react-dom';
import './Profile.css';
import './Login.css';

class Pro extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  
  
  render() {
    return (
        <html>
      
        <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"/>
        <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous"/>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons"/>
        <link rel="stylesgeet" href="https://rawgit.com/creativetimofficial/material-kit/master/assets/css/material-kit.css"/>
    </head>
    <body class="profile-page">
        <nav class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg "  color-on-scroll="100"  id="sectionsNav">
            <div class="container">
                
            
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        
                          
                          <li class="nav-item">
                              <a class="nav-link" href="https://twitter.com/CreativeTim" target="_blank">
                                  <i class="fa fa-twitter"></i>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="https://www.facebook.com/CreativeTim" target="_blank">
                                  <i class="fa fa-facebook-square"></i>
                              </a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link"  href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
                                  <i class="fa fa-instagram"></i>
                              </a>
                          </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="page-header header-filter" data-parallax="true" ></div>
        <div class="main main-raised">
            <div class="profile-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto">
                           <div class="profile">
                                <div class="avatar">
                                    <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg" alt="Circle Image" class="img-raised rounded-circle img-fluid"/>
                                </div>
                                <div class="name">
                                    <h3 class="title">Christian Louboutin</h3>
                                    <h6>Designer</h6>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
            
              <div class="tab-content tab-space">
                  <div class="tab-pane active text-center gallery" id="studio">
                      <div>
                  <label id="lblName"> Addhar card</label>
                  <label id="lblName"> Addhar card</label></div> 
                  <div>
                  <label id="lblName"> Addhar card</label>
                  <label id="lblName"> Addhar card</label>
                  </div>
                  <label id="lblName"> Addhar card</label>
                  <label id="lblName"> Addhar card</label>

                  </div>
                
               </div>
    
            
                </div>
            </div>
        </div>
        
        
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"></script>
    
    
       
    
    </body>
    </html>
    );
  }
}
export default Pro;