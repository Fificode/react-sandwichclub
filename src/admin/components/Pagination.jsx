import React, {useEffect} from 'react'

const Pagination = ({ data, Product, title, pageLimit, dataLimit }) => {
const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
      setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
     const pageNumber = Number(event.target.textContent);
  setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
     const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;
  return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
useEffect(() => {
  window.scrollTo({ behavior: 'smooth', top: '0px' });
}, [currentPage]);
  return (
    <div>
         <h1>{title}</h1>

    {/* show the posts, 10 posts at a time */}
    <div className="">
      {getPaginatedData().map((d, idx) => (
        <Product key={idx} data={d} />
      ))}
    </div>

    {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
    <div className="flex items-center justify-center">
      {/* previous button */}
      <button
        onClick={goToPreviousPage}
        className={`bg-white border-none p-[10px] shadow-sm cursor-pointer text-cyan-blue mx-[10px] ${currentPage === 1 ? 'shadow-none pointer-events-none' : ''}`}
      >
        prev
      </button>

      {/* show page numbers */}
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={changePage}
          className={`bg-white border-[2px] border-solid border-grey px-[10px] py-[15px] rounded-[50%] h-[45px] w-[45px] relative my-[5px] cursor-pointer ${currentPage === item ? 'border-[1px] border-solid pointer-events-none' : null}`}
        >
          <span className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>{item}</span>
        </button>
      ))}

      {/* next button */}
      <button
        onClick={goToNextPage}
        className={`bg-white border-none p-[10px] shadow-sm cursor-pointer text-cyan-blue mx-[10px]  ${currentPage === pages ? 'bg-white border-none p-[10px] shadow-sm cursor-pointer text-cyan-blue mx-[10px] ' : ''}`}
      >
        next
      </button>
    </div>
  </div>
   
  )
}

export default Pagination