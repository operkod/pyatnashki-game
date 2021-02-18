import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import firebase from "firebase"
import State from "./context/State"

const firebaseConfig = {
  apiKey: "AIzaSyCnAtcUPmK39bzYm5OEdkdQaISd1DidOXw",
  authDomain: "pyatnashki-game.firebaseapp.com",
  databaseURL: "https://pyatnashki-game-default-rtdb.firebaseio.com",
  projectId: "pyatnashki-game",
  storageBucket: "pyatnashki-game.appspot.com",
  messagingSenderId: "860494941268",
  appId: "1:860494941268:web:00f7156e9afd35087db1c1",
  measurementId: "G-65ZPL3MFTH"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <State>
      <App />
    </State>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
