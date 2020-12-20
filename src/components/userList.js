import React from 'react';

import firebase from '../firebase';
// Get a reference to the database service
var db = firebase.database();

class userList extends React.Component{
    constructor(props){
        super(props);
        this.state = props;
    }

    componentDidMount(){
        db.ref("users").on("value", function(snapshot) {
          this.setState();
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
    }

    render(){
        return(
        <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
            <h3>How to show firebase data in reactjs?</h3>
        </div>
      
        <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                  <tr>
                      <th>Name</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.users.map(data => {
                  
                  return (
                      <tr>     
                      <td key = {this.state.id}>{this.state.id.account.name}</td>
                      </tr>
                      
                  );
                 
                  })}
          
                 
              </tbody>
              
           </table>
            
       </div>
      </div>
    );
       
    }

}

export default userList;