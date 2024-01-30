import data from '../data/hadisData';

function Hadis() {
  return (
    <div>
      {data.map((item) => (
        <h2
          key={item.slice(0, 1)}
          className='text-xl p-2 text-left text-gray-600'
        >
          <span className='font-semibold'>{item.slice(0, 2)} </span>
          {item.slice(3, item.length)}
        </h2>
      ))}
    </div>
  );
}

export default Hadis;
