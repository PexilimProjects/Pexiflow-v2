import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function index() {
  return (
    <div className='dark:bg-[#24292E] dark:border-0 dark:text-white bg-Grey rounded-[8px] w-full py-[18px] px-[24px]'>
      <Navbar/>
      <Outlet/></div>
  )
}
