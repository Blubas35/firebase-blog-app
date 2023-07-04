import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

SwiperCore.use([Virtual, Navigation, Pagination]);

const Trending = ({ blogs }) => {
  return (
    <>
      <div>
        <div className="blog-heading text-start py-2 mb-4">Trending</div>
      </div>
      {/* <OwlCarousel className="owl-theme" {...options}>
        {blogs?.map((item) => (
          <>
            {console.log(item.title)}
            <div className="item px-2" key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <div className="trending-img-position">
                  <div className="trending-img-size">
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="trending-img-relative"
                    />
                  </div>
                  <div className="trending-img-absolute"></div>
                  <div className="trending-img-absolute-1">
                    <span className="text-white">{item.title}</span>
                    <div className="trending-meta-info">
                      {item.author} - {item.timestamp.toDate().toDateString()}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </OwlCarousel> */}
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            type: "bullets",
          }}
          navigation={true}
          virtual
          rewind={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {blogs.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="item px-2">
                <Link to={`/detail/${item.id}`}>
                  <div className="trending-img-position">
                    <div className="trending-img-size">
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        className="trending-img-relative"
                      />
                    </div>
                    <div className="trending-img-absolute"></div>
                    <div className="trending-img-absolute-1">
                      <span className="text-white">{item.title}</span>
                      <div className="trending-meta-info">
                        {item.author} - {item.timestamp.toDate().toDateString()}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </>
  );
};

export default Trending;
