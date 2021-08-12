import React from 'react'
import Header from '../components/Header'
import { useRouter } from "next/dist/client/router";
import StarRating from 'react-star-rating'

function BuyingPage({Data}) {

    const router = useRouter()


    const {id} = (router.query);
    
    const Datum = Data[id];
    // console.log(Datum);
    
    return (
        <div>
            <Header/>
            <div className="p-5 lg:flex block">
                <div class="produc-image flex-1 bg-white rounded-2xl flex items-center justify-center relative item-center p-3 max-w-[700px]">
                    <img class="left-1/4 top-4 h-auto w-auto max-w-full max-h-full rounded-2xl" src={Datum.image} alt={Datum.image}/>
                </div>
                
                
                <div className="flex-1 p-3">
                    <h1 className="text-3xl font-bold">{Datum.title}</h1>
                    <div class="product-make text-green-700 font-bold text-xl mt-2">
                        {Datum.make}
                        
                    </div>
                    <div class="product-rating text-yellow-500 font-bold mb-3">
                        {Datum.rating}
                    </div>
                    <div className="flex  border-t-2">
                        <h1>Price:</h1>
                        <div>
                            <h1 className="product-price font-semibold text-red-600 font-lg text-3xl mx-2">${Datum.price}</h1>
                            <h1 className="mx-2">Inclusive of all taxes</h1>
                        </div>
                    </div>
                    <p className="my-5">{Datum.description}</p>
                    
                    <div className="flex border-t-2">
                        <div className="w-20 mx-6 grid place-items-center my-5">
                            <img src="./buyIcon/10-days.png" alt="" className="w-14"/>
                            <h1 className="text-sm text-green-700 text-center">10 Days Returnable</h1>
                        </div>
                        <div className="w-20 mx-6 grid place-items-center my-5">
                            <img src="./buyIcon/Delivery.png" alt="" className="w-14"/>
                            <h1 className="text-sm text-green-700 text-center">Amazon Delivered</h1>
                        </div>
                        <div className="w-20 mx-6 grid place-items-center my-5">
                            <img src="./buyIcon/No-Contact.png" alt="" className="w-14"/>
                            <h1 className="text-sm text-green-700 text-center">No-Contact Delivery</h1>
                        </div>
                    </div>

                    <div className="buyButtonDiv px-5 py-2 rounded-md border-2 lg:max-w-[300px]">
                        {/* Quantity */}
                        <div className="flex mt-2 place-items-center">
                            <h5>Quantity:</h5>
                            <select className="border-2 px-2 py-1 rounded-md ml-2" name="" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div className="flex lg:block my-5 place-items-center">
                            <div className="py-2 px-4 mx-2 my-3 bg-yellow-300 shadow-md rounded-full flex-grow grid place-items-center cursor-pointer hover:shadow-lg hover:scale-105 duration-200 active:scale-95">
                                Add To Cart
                            </div>
                            <div className="py-2 px-4 mx-2 my-3 bg-yellow-500 shadow-md rounded-full flex-grow grid place-items-center cursor-pointer hover:shadow-lg hover:scale-105 duration-200 active:scale-95">
                                Buy Now
                            </div>
                        </div>
                        <h1 className="flex place-items-center text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                            Secure transaction
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyingPage

export async function getServerSideProps() {
    const Data = await fetch('https://bhavik-amazon-api.herokuapp.com//getallData')
    .then(
      (res) => res.json()
    );
    
    return{
      props: {
        Data: Data
      }
    }
}
