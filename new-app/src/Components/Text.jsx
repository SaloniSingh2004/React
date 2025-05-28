import React from 'react'

export default function Text() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://auspost.com.au/content/dam/corp/travel-essentials/destination-guides/italy/photo-antipasto-platter-italian-food.jpg" class="d-block w-100" alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src="https://th.bing.com/th/id/R.5fc4cfe09f9d22a5d2b02f1ef66fc889?rik=Cr1yn9HJ7kCuYw&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f23400000%2fFood-delicious-recipes-23444865-1024-768.jpg&ehk=yxtFPd2cLWwzV6XI6%2fEQqbw9vXmMZMAbKeLdmkEPKCE%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.mashed.com/img/gallery/the-best-new-fast-food-menu-items-weve-tried-in-2023-so-far/l-intro-1682446897.jpg" class="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  )
}
