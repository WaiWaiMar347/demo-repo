import React from 'react'

const Header = ( ) => {
  //console.log(test, "prop isn header")
  return (
    <header className="px-5 py-5">
        <div  className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Online Shop</h1>
            <button className="border border-black px-4 py-2 relative">
                My Cart
                <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 inline-block text-xs bg-red-500 text-white px-3 py-1">
                  1</span>
            </button>
        </div>
    </header>
  )
}

export default Header