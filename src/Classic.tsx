import { useEffect, useState } from 'react';
import './App.css';

// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function App() {

  const [number, setNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [refreshToken, setRefreshToken] = useState(0);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then(response => response.json())
      .then(data => {
        setNumber(Number(data));
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      }
      );
  }, [refreshToken]);


  return (
    <>
      {
        isLoading ? <h1>Loading...</h1> : <h1>Number: {number}</h1>
      }
      <div>...</div>

      <button
        disabled={isLoading}
        onClick={() => setRefreshToken(refreshToken + 1)}>New number</button>
    </>
  );
}

export default App;
