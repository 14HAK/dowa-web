import data from '../data/hadisData';

function Hadis() {
  return (
    <div>
      {data?.map((item) => (
        <div key={item?.id}>
          {item?.title ? (
            <h1 className='font-arabic font-bold p-1 text-xl text-gray-800 text-right'>
              {item?.title}
            </h1>
          ) : (
            ' '
          )}
          {/* // */}
          {/* {item?.notes ? (
            <>
              {item?.notes?.map((note) => (
                <>
                  <h2
                    key={1}
                    className='text-xl p-1 font-arabic text-left text-gray-600'
                  >
                    <span className='font-semibold'></span>
                    {note}
                  </h2>
                </>
              ))}
            </>
          ) : (
            ' '
          )} */}

          <h2
            key={1}
            className='text-xl p-2 font-arabic text-left text-gray-600'
          >
            {item?.notes?.join(`___`)}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default Hadis;
