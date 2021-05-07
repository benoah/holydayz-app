import React from 'react'
import Header from "../header/Header"
import Banner from "../banner/bannner"
import CardCatalogy from "../card/CardCatalogy"
import CityCard from "../card/CityCard"
import Contact from "../contact/Contact"
import Loginpage from '../login/Loginpage'
import DetailCard from '../detailpage/DetailCard'


export default function Home() {
    return (
        <div className="homeContainer"> 
         <Loginpage />
           <Header />
           <Banner />
           <CardCatalogy />
           < CityCard />
           <DetailCard />

           <Contact />
          
        </div>
    )
}
