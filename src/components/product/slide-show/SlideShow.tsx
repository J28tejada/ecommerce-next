'use client';
import { useState } from 'react';

import { Swiper as SwiperObject } from 'swiper'
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './SlideShow.css';
import Image from 'next/image';


interface Props {
    images: string[];
    title: string;
    className?: string;
}


export const SlideShow = ({  images, title, className }: Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
    
    return (
        <div className={className}>
            <Swiper
                style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                } as React.CSSProperties
                }
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >

                {
                    images.map( image => (
                        <SwiperSlide>
                            <Image
                            width={1080}
                            height={820}
                            src={ `/products/${image}`}
                            alt={title}
                            className='rounded-lg object-fill'
                            />
                        </SwiperSlide>   
                    ))
                }                
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    images.map( image => (
                        <SwiperSlide>
                            <Image
                            width={300}
                            height={300}
                            src={ `/products/${image}`}
                            alt={title}
                            className='rounded-lg object-fill'
                            />
                        </SwiperSlide>   
                    ))
                }
            </Swiper>
        </div>
    )
}