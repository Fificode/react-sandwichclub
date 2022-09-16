import React, {useState, useEffect} from 'react'
import Subscribers from '../components/Subscribers'

const SubscribersList = () => {
    const [allSubscribers, setAllSubscribers] = useState();


 useEffect(() => {
    fetch("https://sandwich-backend.herokuapp.com/api/v1/subscriber")
    .then( response => response.json())
     .then( data => setAllSubscribers(data.data),
    
    )
      
  }
  
  ,[])
  return (
    <div className='flex flex-col absolute left-[70px] smaller:left-[85px]  md:left-[100px] xl:left-[280px] mt-[20px]'>
    <div className="">
      {/* Search icon */}
      <input type="text" name="Search product" className='w-[500px] rounded-[10px] px-[5px] py-[10px] border-[1px] border-solid' placeholder="Search for products"/>
    </div>
    <div class="overflow-x-auto relative sm:rounded-lg mt-[30px]">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-[10px] md:text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                   Date
                </th>
                
                <th scope="col" class="py-3 px-6">
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