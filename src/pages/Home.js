import React, {Component, useEffect, useState } from 'react'

import parse from 'html-react-parser'
import '../styles/home.scss'
import slide1 from '../imgs/slide1.jpg'
import slide2 from '../imgs/slide2.jpg'
import slide3 from '../imgs/slide3.jpg'


function Home() {



  const posts = [
    {
      id: 1,
      title: "ალგეთის საწვრთნელ ბაზაზე სამეთაურო-საშტაბო სწავლება დასრულდა",
      desc: "ალგეთის საწვრთნელ ბაზაზე ამოცანაზე ორიენტირებული ოთხდღიანი სწავლება დასრულდა.",
      img: "https://mod.gov.ge/uploads/2022/October/algetis-sawvrtnel-bazaze-sametauro-sashtabo-swavleba-dasrulda/algetis-sawvrtnel-bazaze-sametauro-sashtabo-swavleba-dasrulda.jpeg",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://media.istockphoto.com/id/622974056/photo/political-speech.jpg?s=2048x2048&w=is&k=20&c=qgiRZzTkVxBz7wTenCg7AjfI4hP3K3fZ3NaBtNywpQ4=",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://media.istockphoto.com/id/946578380/photo/talking-to-audience.jpg?s=2048x2048&w=is&k=20&c=LCveLY52GirUxcQ_NGa92MujpYej6mTu0dr8jppWt0E=",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/76971/fighter-jet-fighter-aircraft-f-16-falcon-aircraft-76971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/73869/honor-guard-15s-guard-russian-73869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Leopard_2_A5_der_Bundeswehr.jpg",
    },
  ];



  let template = ``;
  for (let i = 0; i < posts.length; i++) {
    if (i % 3 == 0)
      template += `<div className = 'row'>`;

    template += `
          <div className='col-md-4'>
            <div className='post card' key=${posts[i].id}>
            <div className='card-body'>
              <h5 className='card-title'>${posts[i].title}</h5>
  
              <img src="${posts[i].img}" alt="" />
  
              <p className='card-text'>${posts[i].desc}</p>
  
              </div>
            </div>
          </div>
        `

    if (i % 3 == 2)
      template += `</div>`;
  }

  const [html, setHtml] = useState("");

  useEffect(() => {
    setHtml(template)
  }, [html])


  return (
    <>
     <div className='carousel'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img style={{height: '50vh', width: '50vh'}} src={slide1} class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block text-white">
                <h5>22 აპრილი</h5>
                <p>წვრთნებისა და სამხედრო განათლების მხარდამჭერი ცენტრი „კრწანისის“ დღე</p>
              </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img style={{height: '50vh', width: '50vh'}} src={slide2} class="d-block w-100" alt="..."/>
              <div class="carousel-caption d-none d-md-block text-white">
                <h5>15 მარტი</h5>
                <p>არტილერიის დღე</p>
              </div>
          </div>
          <div class="carousel-item">
            <img style={{height: '50vh', width: '50vh'}} src={slide3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block text-white">
              <h5>6 თებერვალი</h5>
              <p>კიბერუსაფრთხოების დღე</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      </div>

      {parse(html)}
    </>
  )
}

export default Home