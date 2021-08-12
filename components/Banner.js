import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from "next/dist/client/router";

function Banner() {
  const router = useRouter()

    return (
        <div class="mainsection-banner h-44 rounded-lg flex relative w-auto max-w-4xl mx-auto mt-5" >
            <Image
                    src="/img/Banner.webp"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="rounded-lg z-10 "  
            />
            <div class="button bg-white text-black w-50 h-10 flex place-items-center content-center m-4 rounded-full px-5 shadow-sm z-20 absolute left-1/2 hover:shadow-md hover:scale-105 cursor-pointer duration-500"
                onClick={() => router.push({pathname:"/AllProducts",})}
            >
                Browse More products
            </div>
        </div>
    )
}


export default Banner