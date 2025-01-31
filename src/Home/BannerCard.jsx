// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import { EffectCards, Autoplay } from 'swiper/modules';
// import './BannerCard.css';

// const BannerCard = () => {
//   const bannerBooks = [
//     { 
//       id: 1, 
//       image: "/src/assets/banner-books/book1.jpg", 
//       title: "The Great Gatsby"
//     },
//     { 
//       id: 2, 
//       image: "/src/assets/banner-books/book2.jpg", 
//       title: "To Kill a Mockingbird"
//     },
//     { 
//       id: 3, 
//       image: "/src/assets/banner-books/book3.jpg", 
//       title: "1984"
//     },
//     { 
//       id: 4, 
//       image: "/src/assets/banner-books/book4.jpg", 
//       title: "Pride and Prejudice"
//     },
//     { 
//       id: 5, 
//       image: "/src/assets/banner-books/book5.jpg", 
//       title: "The Catcher in the Rye"
//     },
//     { 
//       id: 6, 
//       image: "/src/assets/banner-books/book6.jpg", 
//       title: "Lord of the Rings"
//     },
//     { 
//       id: 7, 
//       image: "/src/assets/banner-books/book7.jpg", 
//       title: "The Hobbit"
//     },
//     { 
//       id: 8, 
//       image: "/src/assets/banner-books/book8.jpg", 
//       title: "Harry Potter"
//     },
//     { 
//       id: 9, 
//       image: "/src/assets/banner-books/book9.jpg", 
//       title: "The Alchemist"
//     }
//   ];

//   return (
//     <div className="banner-card-container">
//       <Swiper
//         effect="cards"
//         grabCursor={true}
//         modules={[EffectCards, Autoplay]}
//         className="my-swiper"
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//       >
//         {bannerBooks.map((book) => (
//           <SwiperSlide key={book.id}>
//             <div 
//               className="slide-content"
//               style={{ backgroundImage: `url(${book.image})` }}
//             >
//               <div className="slide-overlay">
//                 <h3 className="slide-title">{book.title}</h3>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default BannerCard;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Autoplay } from 'swiper/modules';
import './BannerCard.css';

const BannerCard = () => {
  const bannerBooks = [
    { 
      id: 1, 
      image: "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg", 
      title: "The Great Gatsby"
    },
    { 
      id: 2, 
      image: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg", 
      title: "To Kill a Mockingbird"
    },
    { 
      id: 3, 
      image: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg", 
      title: "1984"
    },
    { 
      id: 4, 
      image: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg", 
      title: "Pride and Prejudice"
    },
    { 
      id: 5, 
      image: "https://images-na.ssl-images-amazon.com/images/I/71VzrMauEuL.jpg", 
      title: "The Catcher in the Rye"
    },
    { 
      id: 6, 
      image: "https://images-na.ssl-images-amazon.com/images/I/91ocU8970hL.jpg", 
      title: "Lord of the Rings"
    },
    { 
      id: 7, 
      image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg", 
      title: "The Hobbit"
    },
    { 
      id: 8, 
      image: "https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg", 
      title: "Harry Potter"
    },
    { 
      id: 9, 
      image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg", 
      title: "The Alchemist"
    }
  ];

  return (
    <div className="banner-card-container">
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        className="my-swiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {bannerBooks.map((book) => (
          <SwiperSlide key={book.id}>
            <div 
              className="slide-content"
              style={{ backgroundImage: `url(${book.image})` }}
            >
              <div className="slide-overlay">
                <h3 className="slide-title">{book.title}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCard;

