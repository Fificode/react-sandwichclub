import React from 'react'

const Subscribers = ({email}) => {
  return (
    <>
    <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700 cursor-pointer">
                <td className="py-4 px-3">
                 {email}
                </td>
               
               
            </tr>
    </>
  )
}

export default Subscribers