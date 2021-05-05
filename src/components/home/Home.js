import React from 'react'
import Header from "../header/Header"
import Banner from "../banner/bannner"
import CardCatalogy from "../card/CardCatalogy"

export default function Home() {
    return (
        <div className="homeContainer"> 
           <Header />
           <Banner />
           <CardCatalogy />
        </div>
    )
}
