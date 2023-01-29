import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';

function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>

      { data &&
        data.map((i) => {
          return <p>{i.title}</p>;
        })}
    </>
  );
};



export default App;
