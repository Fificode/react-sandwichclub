import React from 'react'

const Subscribers = ({date, email}) => {
  return (
    <>
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 cursor-pointer">
                 <td class="py-4 px-6">
                  {date}
                </td>
                <td class="py-4 px-6">
                 {email}
                </td>
               
               
            </tr>
    </>
  )
}

export default Subscribers