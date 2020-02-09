import React, { Component } from "react";
import Header from "../src/components/Header";
import MessageList from "./components/MessageList";
import MessageBox from "./components/MessageBox";
import firebase from "firebase";
class App extends Component {
  constructor(props) {
    super(props);
    var config = {
      apiKey: "AIzaSyCTI-32BM99hjWqSmZkrWC9QnwzDFjH21E",
      authDomain: "huaytlh.firebaseapp.com",
      databaseURL: "https://huaytlh.firebaseio.com",
      projectId: "huaytlh",
      storageBucket: "huaytlh.appspot.com",
      messagingSenderId: "356966449228",
      appId: "1:356966449228:web:8954e88599cdc9651234e9",
      measurementId: "G-FKT2NPRFD6"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div className="container">
        <Header title="Chat React Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
