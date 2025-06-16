import React, { useEffect, useState } from 'react'
import CategoryButton from './CategoryButton';

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
      <div className='flex '>
        <CategoryButton categoryName="all" current={true}/>
        {categories.map((category)=>(
          <CategoryButton 
          key={category} 
          categoryName={category} 
          current={false}/>
        )
        )}
      </div>
    </section>
  )
}

export default CategorySection
