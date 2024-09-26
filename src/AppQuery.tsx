import { useQuery } from '@tanstack/react-query';
import './App.css';

// https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new

function App() {

  const getCriptoNumber = async () => {
    throw 'Cant get number';
    const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new');
    const data = await response.json();
    return Number(data);
  };

  const {
    isLoading,
    isFetching,
    data: number,
    error,
    refetch } = useQuery({
      queryKey: ['randomNumber'],
      queryFn: getCriptoNumber,
      // refetchOnWindowFocus: false,  
    });

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
