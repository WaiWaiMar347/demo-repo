import React, { useEffect, useState } from 'react'

const CategorySection = () => {
  
  
    const title="Product Categories"
  const categories= ["electronics","jewelery","men's clothing","women's clothing"];
  //console.log("HELLO", input);

  // useEffect( () => {
  //    console.log("HELLO in useeffect", input);
  // }, [input] )
  
  return (
      <section id="category-section" className="p-5">
      <p className="text-sm text-gray-500 mb-2"> {title}</p>
      <div>
        {categories.map((category)=>(
          <button  key={category} className="border border-black px-4 py-2 me-2">
            {category}
          </button>
        )
        )}
      </div>
    </section>
  )
}

export default CategorySection
