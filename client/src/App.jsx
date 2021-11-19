import Chat from "./chat/chat";
import Process from "./process/process";
import { BrowserRouter as Router, Routes, Switch, Route, useParams } from "react-router-dom";
// import "./App.scss";
import React from "react";
import io from "socket.io-client";
import Homepage from "./homepage/Homepage";

const socket = io.connect('/');

function Appmain({animate}) {
  let params = useParams();
  return (
    <React.Fragment>
      <div className="right">
        <Chat
          username={params.username}
          roomname={params.roomname}
          socket={socket}
        />
      </div>
      <div className="left">
        <Process />
      </div>
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Homepage socket={socket} />} />
          <Route path="/chat/:roomname/:username" element={<Appmain animate={true}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
