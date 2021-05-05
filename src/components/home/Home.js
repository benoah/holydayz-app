import React from 'react'
import Header from "../header/Header"
import Banner from "../banner/bannner"
import CardCatalogy from "../card/CardCatalogy"
import CityCard from "../card/CityCard"
import Contact from "../contact/Contact"
import Login from '../login/Login'
import DetailCard from '../detailpage/DetailCard'


export default function Home() {
    return (
        <div className="homeContainer"> 
           <Header />
           <Banner />
           <CardCatalogy />
           < CityCard />
           <DetailCard />

           <Contact />
           <Login />
        </div>
    )
}
