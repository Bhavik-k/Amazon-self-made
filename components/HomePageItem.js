import React from 'react'
import { useRouter } from "next/dist/client/router";


function HomePageItem({id, image, name, make, rating, price}) {

    // console.log(id);


    const router = useRouter()

    const BuyingPageReDirect = (ranges) =>{
        router.push({
            pathname:"/BuyingPage",
            query: {
                id: id
            }
        })
    }

    
    return (
        <div class="main-products m-2 cursor-pointer"
        onClick={() => BuyingPageReDirect()}>
            <div class="produc-image h-52 w-52 bg-white rounded-2xl flex items-center justify-center relative  item-center">
                <img class="left-1/4 top-4 h-auto w-auto max-w-full max-h-full rounded-2xl" src={image} alt=""/>
                {/* <Image
                        src={image}
                        layout="fill"
                        // objectFit="cover"
                        // objectPosition="center"
                        className="absolute top-0 bottom-0 left-0 right-0 max-h-fill max-w-fill"  
                /> */}

            </div>
            <div class="product-name text-gray-700 font-bold mt-2">
                {name}
            </div>
            <div class="product-make text-green-700 font-bold">
                {make}
            </div>
            <div class="product-rating text-yellow-500 font-bold">
            ⭐ {rating}
            </div>
            <div class="product-price font-bold text-red-900 my-2 font-lg text-3xl">
                ${price}
            </div>
        </div>
                        
    )
}

export default HomePageItem
