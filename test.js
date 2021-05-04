.CarouselContainer{
    background: #000 !important;
    height: 100vh;
}
.Carousel__innercontainerimage{
    height: 560px;
    background-size: cover;
    filter: brightness(50%);
    margin-top: 64px;
}

.Carousel__innercontainertext{
    position: absolute;
    top: 80px;
    font-family: 'Poppins', sans-serif;
 
}

.Carousel__innercontainerheader{
    font-size: 40px;
    font-weight: 900;
    line-height: 40px;
    letter-spacing:4px;
}

.Carousel__innercontainerheadername{
    font-size: 40px;
    font-weight: 800;
    line-height: 64px;
}
.Carousel__innercontainerdescription{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    padding: 16px;

}



.Carousel__search{
    margin-top: 4px;
}

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    height: 100px;
    width: 100px;
    background-size: 100%, 100%;
    border-radius: 50%;
  
    background-image: none;
  }
  
  .carousel-control-next-icon:after
  {
    content: '->';
    width: 64px;
    color:   #592466;
    transition: all 0.2s;
  }
  
  .carousel-control-prev-icon:after {
    content: '<-';
    width: 64px;
  
    color:  #592466;
    transition: all 0.2s;
  }
  
  
  .carousel-indicators {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    list-style: none;
  }



  .carousel-indicators li {
    box-sizing: content-box;
    flex: 0 1 auto;
    text-indent: -999px;
    cursor: pointer;
 
    background-color:  #592466;
  }

  .carousel-indicators li  .active{
    box-sizing: content-box;
    flex: 0 1 auto;
    text-indent: -999px;
    cursor: pointer;
    display: none;

  }


  .Search__SearchButton{
    padding: 10px;
    margin: 0;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-weight: 700;
    background-color: #ff0063;;
    border-color: #ff0063;;
  }






  .Search__SearchButton:hover {
    transform: scale(1.02);
    color: #f1f1f1;
  }


  .banner__search{
    background-color: white;
        border-color: #592466;

  }
  .adress-text{
      color: #f1f1f1;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
  }
  @media screen and (min-width: 812px) {
 

  .Carousel__innercontainerheader{
    font-size: 48px;
    font-weight: 900;
    line-height: 68px;
    letter-spacing:4px;
}
.Carousel__innercontainerheadername{
  font-size: 80px;
  font-weight: 800;
  line-height: 108px;
}

.carousel-control-next-icon:after
{
  font-size: 32px;

}

.carousel-control-prev-icon:after {
  font-size: 32px;

}

.Carousel__innercontainerdescription{
  font-size: 20px;
  font-weight: 00;
  line-height: 40px;
  background-color: rgba(210, 182, 177, 0.2);
}
  
}

