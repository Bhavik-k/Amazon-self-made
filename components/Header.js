import React, { useState } from "react";
import Image from 'next/image'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRouter } from "next/dist/client/router";


function Header() {
    // const [searchInput, setSearchInput] = useState('')

    const [searchInput, setsearchInput] = useState('');

    const router = useRouter()

    const search = (ranges) =>{
        router.push({
            pathname:"/search",
            query: {
                query: searchInput
            }
        })
    }


    // router.push("/")
    return (
        <div class="header md:h-16 h-auto bg-gray-900 items-center sticky">
            <div className="flex items-center">

                <div class="logo w-30 h-16 ml-10">
                    <img class="w-30 h-16 pt-1.5 object-contained" src="./img/Amazon logo.png" alt=""/>
                </div>
                <div class="search hidden md:flex ml-5">
                    
                    <input 
                    value={searchInput}
                    onChange={(e) =>setsearchInput(e.target.value)}
                    type="text" id="serach" placeholder="Search..." class="h-9 w-30 px-3 text-white bg-gray-800 border border-gray-500 rounded-l-xl outline-none placeholder-white"/>
                    
                    <div class="searchicon bg bg-yellow-500 h-9 w-10 rounded-r-xl flex justify-center items-center text-white cursor-pointer"
                    onClick={() => search()}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
                <div class="righticon text-white flex ml-auto items-center">
                    <svg class="h4 w-4 justify-around  " xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <a href="l">
                        <div class="justify-around mx-3 cart bg-yellow-500 flex place-items-center justify-center h-10 w-10 rounded-xl">
                            
                            <svg class="h4 w-4 " xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>

                    </a>
                    <svg class="h4 w-4 justify-around mr-2 " xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    {/* <svg class="h-10 rounded-full bg-white mr-1" data-jdenticon-value="fr. Mathew Karickal"></svg>  */}
                    {/* <svg class="h-10 rounded-full bg-white mr-1" data-jdenticon-value="b"></svg>  */}
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-10 rounded-full  mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 p1 border-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
            
            <div class="search flex-grow  px-5 py-3 flex md:hidden items-center">
                    
                <input 
                value={searchInput}
                onChange={(e) =>setsearchInput(e.target.value)}
                type="text" id="serach" placeholder="Search..."class="h-9 w-30 px-3 text-white bg-gray-800 border border-gray-500 rounded-l-xl outline-none placeholder-white flex-grow"/>
                    
                <div class="searchicon bg bg-yellow-500 h-9 w-10 rounded-r-xl flex justify-center items-center text-white cursor-pointer"
                    onClick={() => search()}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>
                
        
        </div>
    )
}

export default Header   
