import React, {useState} from 'react'
import HomePageItem from './HomePageItem';



function Categorys({gifts,electronics,jewelery,menClothing,womenClothing}) {
    console.log(menClothing);
    const [visibleOne, setvisibleOne] = useState('gifts')
    // var faker = require('faker');

    // var randomName = faker.name.findName(); // Rowan Nikolaus
    // var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    // var randomCard = faker.helpers.createCard(); // random contact card containing many properties
    // console.log({randomName, randomEmail, randomCard});
    return (
        <div>
            <div class="main-section-category font-bold mt-4 text-gray-700 text-2xl">
                <h1 class="flex content-center mb-2">
                    Popular Categorys<svg class="text-yellow-500 h-9 w-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </h1>
                {/* <div class="categorys-icons flex">
                    <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                        onClick={() => setvisibleOne('gifts')}
                    ><svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg></div>
                    <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                        onClick={() => setvisibleOne('tv')}
                    ><svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                    <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                        onClick={() => setvisibleOne('phones')}
                    ><svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></div>
                    <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                        onClick={() => setvisibleOne('books')}
                    ><svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg></div>
                    <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                        onClick={() => setvisibleOne('home')}
                    ><svg class="h-16 w-16" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg></div>
                </div> */}
                <div class="categorys-icons flex text-gray-600">
                        <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                            onClick={() => setvisibleOne('gifts')}
                        ><img src="./Icons/gift.svg" className="w-12 h-12" /></div>
                        <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                            onClick={() => setvisibleOne('electronics')}
                        ><img src="./Icons/electronics.svg" className="w-12 h-12" /></div>
                        <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                            onClick={() => setvisibleOne('jewelery')}
                        ><img src="./Icons/jewelery.svg" className="w-12 h-12" /></div>
                        <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                            onClick={() => setvisibleOne('menClothing')}
                        ><img src="./Icons/men.svg" className="w-12 h-12" /></div>
                        <div class="icondesktop rounded-2xl h-20 w-20 bg-white grid place-items-center mr-2 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 duration-200 first-letter mx-1"
                            onClick={() => setvisibleOne('womenClothing')}
                        ><img src="./Icons/women.svg" className="w-12 h-12" /></div>
                </div>
            </div>
             



                <div class="main-section-deals">
                    <h1 class="flex text-gray-700 mt-2 mb-2 font-bold text-2xl place-items-center">
                        Hot Deals
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" /></svg>
                    </h1>
                    

                     
                    {/* gifts */}
                    {visibleOne == 'gifts' ? 
                    <div class="main-section-products flex overflow-x-scroll">
                    {gifts.map(({id,image,title,category,price}) => {
                            return <HomePageItem
                            id = {id}
                            image = {image}
                            name = {title}
                            make = {category}
                            rating = {() => {Math.floor(Math.random() * 5) + 1}}
                            price = {price}
                            />;
                    })}
                    </div>:null}

                     
                    {/* electronics */}
                    {visibleOne == 'electronics' ? 
                    <div class="main-section-products flex overflow-x-scroll">
                    {electronics.map(({id,image,title,category,price}) => {
                            return <HomePageItem
                            id = {id}
                            image = {image}
                            name = {title}
                            make = {category}
                            rating = {() => {Math.floor(Math.random() * 5) + 1}}
                            price = {price}
                            />;
                    })}
                    </div>:null}

                     
                    {/* jewelery */}
                    {visibleOne == 'jewelery' ? 
                    <div class="main-section-products flex overflow-x-scroll">
                    {jewelery.map(({id,image,title,category,price}) => {
                            return <HomePageItem
                            id = {id}
                            image = {image}
                            name = {title}
                            make = {category}
                            rating = {() => {Math.floor(Math.random() * 5) + 1}}
                            price = {price}
                            />;
                    })}
                    </div>:null}

                     
                    {/* menClothing */}
                    {visibleOne == 'menClothing' ? 
                    <div class="main-section-products flex overflow-x-scroll">
                    {menClothing.map(({id,image,title,category,price}) => {
                            return <HomePageItem
                            id = {id}
                            image = {image}
                            name = {title}
                            make = {category}
                            rating = {() => {Math.floor(Math.random() * 5) + 1}}
                            price = {price}
                            />;
                    })}
                    </div>:null}

                     
                    {/* womenClothing */}
                    {visibleOne == 'womenClothing' ? 
                    <div class="main-section-products flex overflow-x-scroll">
                    {womenClothing.map(({id,image,title,category,price}) => {
                            return <HomePageItem
                            id = {id}
                            image = {image}
                            name = {title}
                            make = {category}
                            rating = {() => {Math.floor(Math.random() * 5) + 1}}
                            price = {price}
                            />;
                    })}
                    </div>:null}

                    
                    
                </div>
        </div>
    )
}

export default Categorys

