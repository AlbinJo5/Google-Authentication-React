import './App.css';
import { React, useEffect } from 'react'
import jwt_decode from 'jwt-decode'


function App() {

  function handleCallbackResponse(response) {
    // console.log("ENCODED JWT ID TOKEN: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  }
  useEffect(() => {

    /* global google */

    google.accounts.id.initialize({
      client_id: "Client ID",
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" }
    );
    

    google.accounts.id.prompt();
    return () => {
    }
  }, [])


  return (
    <div className="App">
    </div>
  );
}

export default App;
