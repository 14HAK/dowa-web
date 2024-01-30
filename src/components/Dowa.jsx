export default function Dowa({ item }) {
  const { title, arabic, anubad, uccaron, mohima } = item;

  return (
    <div className='p-2 border rounded-md border-red-600'>
      {title ? (
        <h1 className='font-arabic font-bold p-5 text-3xl text-gray-800 text-right'>
          {title}
        </h1>
      ) : (
        ' '
      )}
      {arabic ? (
        <h1 className='font-arabic_utman p-5 text-4xl text-gray-800 text-right leading-relaxed'>
          {arabic}
        </h1>
      ) : (
        ''
      )}
      {anubad ? (
        <h2 className='text-xl p-2 text-left text-gray-600'>
          <span className='font-semibold'>অর্থঃ </span>
          {anubad}
        </h2>
      ) : (
        ' '
      )}
      {uccaron ? (
        <h2 className='text-xl p-2 text-left text-gray-600'>
          <span className='font-semibold'>উচ্চারণঃ </span>
          {uccaron}
        </h2>
      ) : (
        ' '
      )}
      {mohima ? (
        <h2 className='text-xl p-4 border rounded-md border-gray-600 text-left text-gray-600'>
          {`${mohima}`}
        </h2>
      ) : (
        ' '
      )}
    </div>
  );
}
