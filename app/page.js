"use client"


import axios from 'axios'
import Link from 'next/link'
/*import React, { useState } from 'react'

  const page = () => {
  const [username, setusername] = useState(" ")
  return (

    <>
    <h1 className='mb-5'>Enter the text here</h1>
    <form>
      <input type='text' className='border-zinc-800 border-2 py-4 px-2 text-xl' value={username} 
      onChange={(e)=>{              ///this is two way binding
        e.preventDefault()
        setusername(e.target.value)
        console.log(username)
      }}>
      </input>
    </form>
    </>
  )
}

export default page
*/

/*  import React from 'react'
import Link from 'next/link'

                                     /////tHIS IS APP ROUTING
const page = () => {
  return (
    <>
    <div className='h-16 px-5 bg-green-500 flex items-center justify-between'>
    <Link href={"/Contact"}>Contact this</Link>
    </div>
    </>
  )
}

export default page


*/

import React, { useContext, useEffect, useState } from 'react'
import {Mycontext} from './Helper/Context'    //// HERE THE CONTEXT API IS CALLED REFER CONTEXT.JS PAGE FR MORE INFO

const page = () => {
  const contextwalauser= useContext(Mycontext)
  console.log(contextwalauser)
  const [users, setusers] = useState([])
  const getUsers=async()=>
  {
    const {data}=await axios.get("https://jsonplaceholder.typicode.com/users")
    setusers(data)


  }
  useEffect(() => {
    getUsers()
  
   
  }, [])
  
  return (
    <>
    <button onClick={
      getUsers
    }  className=' bg-blue-700 text-white py-2 px-4 mr-3 rounded'>Get Data</button>
    <div className='p-8 bg-slate-100 mt-5' >
      {/* <ul>
        {users.map((e)=>{
          return <li> {e.username}</li>
        })}
      </ul> */}
      <ul>
        {users.map((e)=>{
          return <li>{e.username}  ---<Link href={`/${e.id}`}>Explore</Link> </li> 
        })}
      </ul>
    </div>
    </>
  )
}

export default page