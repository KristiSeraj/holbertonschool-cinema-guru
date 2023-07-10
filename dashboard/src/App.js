import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  // const [page, setPage] = useState(null)
  const [isLoggedIn, setUserLogIn] = useState(false);
  const [userUsername, setUserUsername] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.post('http://localhost:8000/api/auth', {}, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setUserLogIn(true);
        setUserUsername(response.data.username);
        // setPage(<Dashboard setIsLoggedIn={setUserLogIn} userUsername={userUsername}/>)
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      });
    }
    // else{
    //   setPage(<Authentication setIsLoggedIn={setUserLogIn} setUserUsername={setUserUsername}/>)
    // }
  }, []);

  return (
    <div>
      {isLoggedIn ? <Dashboard setIsLoggedIn={setUserLogIn} userUsername={userUsername}/> : <Authentication setIsLoggedIn={setUserLogIn} setUserUsername={setUserUsername}/> }
      {/* {page} */}
    </div>
  );
}

export default App;
