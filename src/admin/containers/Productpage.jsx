import React from 'react'
import Product from '../components/Product';


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
    <div className='flex flex-col absolute left-[70px] smaller:left-[85px]  md:left-[100px] xl:left-[280px] mt-[20px]'>
    <div className="">
      {/* Search icon */}
      <input type="text" name="Search product" className='w-[500px] rounded-[10px] px-[5px] py-[10px] border-[1px] border-solid' placeholder="Search for products"/>
    </div>
    <Product />
    
    </div>
  )
}

export default Productpage