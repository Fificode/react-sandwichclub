import React, {useState, useEffect} from 'react'
import Subscribers from '../components/Subscribers'

const SubscribersList = () => {
    const [allSubscribers, setAllSubscribers] = useState();
//Access token
const tokenString = localStorage.getItem("access_token");
let token = JSON.parse(tokenString);
token = token.access_token;

useEffect(() => {
    fetch("https://sandwich-backend.herokuapp.com/api/v1/subscriber", {
      method: 'GET',
      headers: {
        'Authorization' :  `Bearer ${token}`
      }
    })
    .then( response => response.json())
     .then(function(data){ 
      // console.log(data)
      setAllSubscribers(data.data)}
    
    )
      
  }
  
  ,[token])

  return (
    <div className='flex flex-col absolute left-[90px] smaller:left-[85px]  md:left-[100px] xl:left-[280px] mt-[20px]'>
   <div className="relative flex flex-row">
     <div className="absolute left-0 px-[5px] pt-[7px]">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
</div>
{/* onChange={(e) => setQuery(e.target.value)} value={query} */}
      <input type="text" name="Search product"  className='w-[220px] md:w-[300px] lg:w-[500px] rounded-[10px] px-[30px] py-[6px] md:py-[10px] border-[1px] border-solid text-[16px]' placeholder="Search for subscribers"/>
    </div>
      <h1 className="mx-[10px] font-[600] mt-[30px] text-[25px] md:text-[40px]">List of Subscribers</h1>
    <div className="overflow-x-auto relative sm:rounded-lg mt-[30px]">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-[10px] md:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-3">
                  Email address
                </th>
            </tr>
        </thead>
        <tbody>
         {allSubscribers && allSubscribers.map( (subscribers) => (<Subscribers email={subscribers.email} />)) }
        </tbody>
    </table>
</div>
   </div>
  )
}

export default SubscribersList