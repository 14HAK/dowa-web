import Dowa from './components/Dowa';
import data from './data/data';

function App() {
  return (
    <>
      {data?.map((item) => (
        <Dowa key={item?.id} item={item}></Dowa>
      ))}
    </>
  );
}

export default App;
