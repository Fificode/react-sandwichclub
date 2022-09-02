import React from 'react'
import Product from '../components/Product';
// import Pagination from '../components/Product';

const Productpage = () => {
// const url = 'productpageurl';


//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState('');

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => {
  //       if (response.ok) return response.json();
  //       throw new Error('something went wrong while requesting posts');
  //     })
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError(error.message));
  // }, []);

  // if (error) return <h1>{error}</h1>;


  return (
    <div className='flex flex-col absolute left-[280px] mt-[20px]'>
    <div className="">
      {/* Search icon */}
      <input type="text" name="Search product" className='w-[500px] rounded-[10px] px-[5px] py-[10px] border-[1px] border-solid' placeholder="Search for products"/>
    </div>
    <Product />
    {/* {posts.length > 0 ? (
    <div className="flex flex-row flex-wrap">
      <Pagination data={posts} Product={Product} title="Posts" pageLimit={5} dataLimit={10} />
    </div>) : (<h1>No Products to display</h1>)
    } */}
    </div>
  )
}

export default Productpage