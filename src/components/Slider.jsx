import React, {useRef, useState} from "react";


import { Navigation, Thumbs} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';





export default function Slider (props) {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
   
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    
    

    

    return (
    <>
    <div className="slider__body">
        <Swiper
            style={{margin: 0}}
            modules={[Navigation, Thumbs]}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            thumbs={{ swiper: thumbsSwiper }}
        >
            <SwiperSlide><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>

            <div className="slider__prev-arrow" ref={navigationPrevRef}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.9487" cy="17.9487" r="17.9487" fill="#C60101"/>
                    <path d="M20.3423 13.1624L14.3594 17.9487L20.3423 22.735" fill="#C60101"/>
                    <path d="M20.3423 13.1624L14.3594 17.9487L20.3423 22.735" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="slider__next-arrow" ref={navigationNextRef}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.9487" cy="18.0513" r="17.9487" transform="rotate(-180 17.9487 18.0513)" fill="#C60101"/>
                    <path d="M15.5552 22.8376L21.5381 18.0513L15.5552 13.265" fill="#C60101"/>
                    <path d="M15.5552 22.8376L21.5381 18.0513L15.5552 13.265" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </Swiper>

        <Swiper
            className="slider__preview"
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumbsSwiper}
            slidesPerView={6}
            spaceBetween={12}
        >
            <SwiperSlide className="preview__item"><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide className="preview__item"><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide className="preview__item"><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide className="preview__item"><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide className="preview__item"><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
            <SwiperSlide className="preview__item"><img className="swiper__img" src={props.link} alt="pellets-slider" /></SwiperSlide>
        </Swiper>

        
        
    </div>
    </>
    );
};