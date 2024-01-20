export default function Dowa({ item }) {
  const { title, arabic, anubad, uccaron, mohima } = item;

  return (
    <div className='p-2 m-9 border rounded-md border-red-600'>
      <h1 className='font-arabic font-bold p-5 text-3xl text-gray-800 text-right'>
        {title ? title : ' '}
      </h1>
      <h1 className='font-arabic p-5 text-4xl text-gray-800 text-right'>
        {arabic}
      </h1>
      <h2 className='text-xl p-2 text-left text-gray-600'>অর্থঃ {anubad}</h2>
      <h2 className='text-xl p-2 text-left text-gray-600'>
        উচ্চারণঃ {uccaron}
      </h2>
      <h2 className='text-xl p-4 border rounded-md border-gray-600 text-left text-gray-600'>
        {mohima}
      </h2>
    </div>
  );
}
