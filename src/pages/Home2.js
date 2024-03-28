// import React, { Component, useEffect, useState } from 'react'
// import '../styles/home.scss'
// export default class Home extends Component {

//   render() {
//     const posts = [
//       {
//         id: 1,
//         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//         img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       },
//       {
//         id: 2,
//         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//         img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       },
//       {
//         id: 3,
//         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//         img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       },
//       {
//         id: 4,
//         title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
//         desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
//         img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       },
//     ];


//     let columns = 0;
//     let template = ``;
//     for (let i = 0; i < posts.length; i++) {
//       if (i % 3 == 0)
//         template += `<div className = 'row'>`;

//       template += `
//         <div className='col-md-4'>
//           <div className='post card' key=${posts[i].id}>
//           <div className='card-body'>
//             <h5 className='card-title'>{post.title}</h5>

//             <img src=${posts[i].src} alt="" />

//             <p className='card-text'>${posts[i].desc}</p>

//             </div>
//           </div>
//         </div>
//       ` 

//       if (i % 3 == 2)
//         template += `</div>`;
//     }

//     const[html, setHtml] = useState<String>("");

//     useEffect(() => {
//       setHtml(template)
//     }, [html])
   

//     return (
//       <>
      
      
//       </>
//     )
//   }
// }
