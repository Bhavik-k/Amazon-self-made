import React, {useState} from 'react'
import Header from '../components/Header'
import HomePageItem from '../components/HomePageItem'
import { useRouter } from "next/dist/client/router";



function search({Data}) {


    const router = useRouter()
    const {query} = (router.query);
    const [stupidChanceSystem, setstupidChanceSystem] = useState('')
    
    // console.log(SearchResult);
    const [SearchedData, setSearchedData] = useState([])
    // fetch

    // fetch('https://api.npms.io/v2/search?q='+query)
    fetch('https://bhavik-amazon-api.herokuapp.com/getallDataSearch?search='+query)
    
    .then(response => response.json())
    .then(data => setSearchedData(data));
	console.log(SearchedData);

    
    










    // FilteredData = FilteredData.sort((a, b) => (a.price > b.price ? 1 : -1));



    return (
        <div>
            <Header/>
            <div className="flex border-b-2 py-1 px-4">
                <div className="px-3 py-1 border-2 rounded-full mr-2 cursor-pointer hover:shadow-md active:scale-95"
                    onClick={() =>{
                        FilteredData = FilteredData.sort((a, b) => (a.price > b.price ? 1 : -1));
                        // stupidChanceSystem == 'o'
                        // ?setstupidChanceSystem('x')
                        // :setstupidChanceSystem('o')
                        
                        // console.log(FilteredData);
                    }}>
                    <h1>Price: Low to High</h1>
                </div>
                <div className="px-3 py-1 border-2 rounded-full cursor-pointer hover:shadow-md active:scale-95"
                    onClick={() =>{
                        // FilteredData = FilteredData.sort((a, b) => (a.price > b.price ? -1 : 1));
                        console.log(FilteredData);
                        stupidChanceSystem == 'x'
                        ?setstupidChanceSystem('o')
                        :setstupidChanceSystem('x')

                        // console.log(FilteredData);
                    }}>
                    <h1>Price: High to Low</h1>
                </div>
            </div>

            <div className="Results p-5">
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 " id= "searchResultDivToAddAndRemoveResulteOnFilter">
                    {/* <HomePageItem/> */}
                    {SearchedData.map(({id,image,make,price,rating,title},i) => {
                        console.log('lol');
                        return <HomePageItem
                        	key= {id}
                        	id= {id}
                        	name= {title}
                        	image= {image}
                           	make= {make}
                           	price= {price}
                           	rating= {rating}
                           />
                        })}
                </div>
            </div>
        </div>
    )
}

export default search

// export async function getServerSideProps() {
//     const Data = await fetch('http://localhost:1985/getallData')
//     .then(
//       (res) => res.json()
//     );
    
//     return{
//       props: {
//         Data: Data
//       }
//     }
// }
