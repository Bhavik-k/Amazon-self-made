import React, {useState} from 'react'
import Header from '../components/Header'
import HomePageItem from '../components/HomePageItem'
import { useRouter } from "next/dist/client/router";



function search({Data}) {


    const router = useRouter()
    const {query} = (router.query);
    const [stupidChanceSystem, setstupidChanceSystem] = useState('')

    // console.log(SearchResult);

    var FilteredData =[]

    // Search Algorithm
    Data.forEach(Datum => {
        const DatumTitle = ((Datum.title).toLowerCase() + ' ' + (Datum.make).toLowerCase());
        DatumTitle.replace

        const queryArray = query.split(' ');
        var totalNumberMached = 0;
        queryArray.forEach(queryAr => {
            // console.log(DatumTitle, queryAr);
            if (DatumTitle.includes(queryAr.toLowerCase()) && queryAr != ''){
                totalNumberMached +=1;
            }
        });
        if (totalNumberMached >= 1) {
            FilteredData.push(Datum);
        }
        
    });
    FilteredData = FilteredData.sort((a, b) => (a.price > b.price ? 1 : -1));



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
                    {/* {stupidChanceSystem == 'x'?  */}
                    {FilteredData.map(({id,image,make,price,rating,title},i) => {
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
                        })}{/* : FilteredData.map(({id,image,make,price,rating,title}) => {
                        console.log('olo');
                        return <h1>olo</h1>
                    })
                   }*/}
                </div>
            </div>
        </div>
    )
}

export default search

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
