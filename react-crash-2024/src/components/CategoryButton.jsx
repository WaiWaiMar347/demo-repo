import React from 'react'

const CategoryButton = ({categoryName,current}) => {
  return (
         <button className={`text-nowrap border border-black px-4 py-2 me-2 ${current && 'bg-black text-white'}`}>
          {categoryName}
         </button>

  )
}

export default CategoryButton