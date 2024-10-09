import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setId } from '../../store/slices/counter'

const Products = () => {
    const dispatch = useDispatch()
    const navigate =useNavigate()
 const [data,setData] = useState([])
   const fetchProducts = async ()=>{
    const response = await axios("https://northwind.vercel.app/api/products")
    setData(response.data)
   };
   const handleDelete = async (id)=>{

   await axios.delete(`https://northwind.vercel.app/api/products/${id}`)
   await fetchProducts()
   }

   const handleEdit = async (id)=>{
    // put methodu
//   console.log(id,"id")
//    const newData = await axios(`https://northwind.vercel.app/api/products/${id}`)

//       let obj={
//         ...newData.data,
//         name:"Salam"
//       }
//     await axios.put(`https://northwind.vercel.app/api/products/${id}`,obj)
//     await fetchProducts()


// patch methodu
// console.log(id,"id")

//       let obj={
//         name:"Salam"
//       }
//     await axios.patch(`https://northwind.vercel.app/api/products/${id}`,obj)
//     await fetchProducts()






dispatch(setId(id))
   navigate("/editProducts")

    }
   useEffect(()=>{
    fetchProducts()
   },[]);

  return (
   

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr >
               <th scope="col" class="px-6 py-3">
                   Id
                </th>
                <th scope="col" class="px-6 py-3">
                   Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity Per Unit
                </th>
                <th scope="col" class="px-6 py-3">
                    Units in Stock
                </th>
                <th scope="col" class="px-6 py-3">
                   Unit Price
                </th>
                <th scope="col" class="px-6 py-3">
                   Edit
                </th>
                <th scope="col" class="px-6 py-3">
                  Delete
                </th>
            </tr>
        </thead>
        <tbody>
           {data && data.map((item,index)=>
         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.id}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.name}
                </th>
                <td class="px-6 py-4 border">
                {item.quantityPerUnit}

                </td>
                <td class="px-6 py-4 border">
                    {item.unitsInStock}
                </td>
                <td class="px-6 py-4 border">
                    {item.unitPrice}
                </td>
                <td class="px-6 py-4 border">
                    <button className='px-7 py-2 bg-yellow-500 rounded-md text-white'
                     onClick={()=>{
                        handleEdit(item.id)
                    }}>Edit</button>
                </td>
                <td class="px-6 py-4 border">
                    <button className='px-7 py-2 bg-red-500 rounded-md text-white' 
                    onClick={()=>{
                        handleDelete(item.id)
                    }}>Delete</button>
                </td>
            </tr>
           )} 
           
        </tbody>
    </table>
</div>

  )
}

export default Products