import { useRandom } from './hooks/useRandom';
import './App.css';

// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function App() {

  const { randomQuery } = useRandom();


  return (
    <>
      {
        randomQuery.isFetching ? <h1>Loading...</h1> : <h1>Number: {randomQuery.data}</h1>
      }
      {
        randomQuery.error && <h1>Error: {randomQuery.error.message}</h1>
      }
      <div>...</div>

      <button
        disabled={randomQuery.isLoading}
        onClick={() => randomQuery.refetch()}>New number</button>
    </>
  );
}

export default App;
