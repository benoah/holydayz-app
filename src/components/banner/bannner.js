import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Search from "../search/Search";



//import Button from "react-bootstrap/Button";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/"
const url = "http://localhost:1337/banners";


export default function Banner() {
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await axios.get(`${url}`);
        console.log(response.data);
        setBanners(response.data);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {banners.map(function (banner) {
        return (

          <div className="CarouselContainer" key={banner.id}>
              <Container>
              <Carousel className="container">
              <Carousel.Item className="Carousel__innercontainer ">
                <img
                  className="d-block w-100 Carousel__innercontainerimage"
                  src={banner.img_third}
                  alt="First slide"
                />
                <Carousel.Caption className="Carousel__innercontainertext">
                  <h3 className="Carousel__innercontainerheader">{banner.Type}   </h3>
                  <h1 className="Carousel__innercontainerheadername">
                    CINQ SUITS
                  </h1>
                  <p className="Carousel__innercontainerdescription underline--magical ">
                  {banner.Desription} 
                  </p>
                </Carousel.Caption>
                <Carousel.Caption className="Carousel__innercontainerspan">
                  <h1>
                    <span> {banner.id} </span>
                  </h1>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="Carousel__innercontainer">
                <img
                  className="d-block w-100 Carousel__innercontainerimage"
                  src={banner.img}
                  alt="First slide"
                />
                <Carousel.Caption className="Carousel__innercontainertext">
                  <h3 className="Carousel__innercontainerheader">{banner.Type} </h3>
                  <h1 className="Carousel__innercontainerheadername">BQ LUX</h1>
                  <p className="Carousel__innercontainerdescription underline--magical ">
                    Bienvenue à l’Hôtel Particulier Montmartre, le plus privé et
                    le plus petit des hôtels bergen
                  </p>
                </Carousel.Caption>
                <Carousel.Caption className="Carousel__innercontainerspan">
                  <h1>
                    <span>02</span>
                  </h1>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className="Carousel__innercontainer">
                <img
                  className="d-block w-100 Carousel__innercontainerimage"
                  src={banner.img_third}
                  alt="First slide"
                />
                <Carousel.Caption className="Carousel__innercontainertext">
                  <h3 className="Carousel__innercontainerheader">Hotel</h3>
                  <h1 className="Carousel__innercontainerheadername">FJORDEN</h1>
                  <p className="Carousel__innercontainerdescription underline--magical ">
                    Bienvenue à l’Hôtel Particulier Montmartre, le plus privé et
                    le plus petit des hôtels bergen
                  </p>
                </Carousel.Caption>
                <Carousel.Caption className="Carousel__innercontainerspan">
                  <h1>
                    <span>03</span>
                  </h1>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
              </Container>
            <Container>
                <Row>
                    <Col>
                    <p className="container adress-text"> 17 BERGENGATEN , 0673 BERGEN</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="container">
                    <div className="banner__search ">
                    {showSearch && <Search />} 
            <Button   onClick={() => setShowSearch(!showSearch)} className="Search__SearchButton " variant="outline">         
             {showSearch ? "Hide" : "Search Dates"}
</Button>
</div> 
        </Col>


                </Row>

            </Container>

         </div>
         
         
        );
      })}
    </>
  );
}
