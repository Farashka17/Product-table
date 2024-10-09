import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-center gap-20 bg-black py-6'>
     <Link to="/">
        <button>
            <h1 className='text-[24px] text-white font-semibold'>Home</h1>
        </button>
    </Link>
     <Link to='/products'>
        <button>
            <h1 className='text-[24px] text-white font-semibold'>Products</h1>
        </button>
    </Link>
     <Link to='/addProduct'>
        <button>
            <h1 className='text-[24px] text-white font-semibold'>Add Product</h1>
        </button>
    </Link>
        
    </div>
  )
}

export default Header