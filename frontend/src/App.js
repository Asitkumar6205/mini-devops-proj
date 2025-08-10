import './App.css';
import { callApi } from "./apis/getHostname";
import { useEffect, useState }  from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    callApi().then((data) => {
      if (data) setMessage(data);
    });
  }, []);

  return (
    <div>
      <h1>React Frontend</h1>
      <p>Response from server: {message}</p>
    </div>
  );
}

export default App;
