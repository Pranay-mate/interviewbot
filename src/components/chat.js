import React, { Component } from 'react';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

class chat extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"1ca0fc96e6521e302ac5d7d7167e7a62a","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }
   
      render(){
     
          return(
            <div className="form-container">
       
            </div>
            
          );
      }
  }
  export default chat;