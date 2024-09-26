import { useQuery } from '@tanstack/react-query';
import './App.css';
import { useRandom } from './hooks/useRandom';

// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function App() {

  const { error, isFetching, isLoading, refetch, number } = useRandom();


  return (
    <>
      {
        isFetching ? <h1>Loading...</h1> : <h1>Number: {number}</h1>
      }
      {
        error && <h1>Error: {error}</h1>
      }
      <div>...</div>

      <button
        disabled={isLoading}
        onClick={() => refetch()}>New number</button>
    </>
  );
}

export default App;
