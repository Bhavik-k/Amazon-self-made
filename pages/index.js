import Head from 'next/head'
import Banner from '../components/Banner'
import Categorys from '../components/Categorys'
import Header from '../components/Header'


export default function Home({gifts, electronics,jewelery,menClothing,womenClothing}) {
  console.log(electronics)

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
        <link rel="icon" href="https://i.dlpng.com/static/png/5385003-amazon-arrow-png-pictures-trzcacakrs-amazon-arrow-png-2000_2000_preview.png" />
      </Head>

      {/* header */}
      <Header/>
      <div className="MainSection px-6">
        <Banner/>
        <Categorys
        gifts = {gifts}
        electronics = {electronics}
        jewelery = {jewelery}
        menClothing = {menClothing}
        womenClothing = {womenClothing}
        />
      </div>

    
    </div>
  )
}


export async function getStaticProps() {
  // const homeData = await fetch('https://bhavik-amazon-api.herokuapp.com//getHomePageData').
  // then(
  //   (res) => res.json()
  // );
  // return{
  //   props: {
  //     homeData
  //   }
  // }
  const gifts = await fetch('https://fakestoreapi.com/products?limit=10').then((res) => res.json());
  const electronics = await fetch('https://fakestoreapi.com/products/category/electronics').then((res) => res.json());
  const jewelery = await fetch('https://fakestoreapi.com/products/category/jewelery').then((res) => res.json());
  const menClothing = await fetch('https://fakestoreapi.com/products/category/men\'s%20clothing').then((res) => res.json());
  const womenClothing = await fetch('https://fakestoreapi.com/products/category/women\'s%20clothing').then((res) => res.json());
  return{
    props: {
      gifts,
      electronics,
      jewelery,
      menClothing,
      womenClothing
    }
  }

}