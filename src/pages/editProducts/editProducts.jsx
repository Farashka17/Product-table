import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const EditProductsPage = () => {
 const [data,setData] = useState([])

    const id = useSelector((state) => state.counter.id)
    const fetchProductsById = async (paramId)=>{
        const response = await axios(`https://northwind.vercel.app/api/products/${paramId}`);
        console.log("prod:",response.data)

        setData(response.data)
       };
    useEffect(()=>{
        fetchProductsById(id)
    },[])
  return (
    <div>
        <h1>id:{id}</h1>
        <input placeholder='name' value={name}/>
        <input placeholder='price'/>

    </div>
  )
}

export default EditProductsPage