'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import misheveve from '@/assets/misheveve.jpg';
import nyamachoma from '@/assets/nyama_choma.jpg';
import wali_wa_mnazi from '@/assets/wali_wa_mnazi.jpg';
import smocha from '@/assets/smosha.jpg';
import mutura from '@/assets/mutura.jpg';
import matoke from '@/assets/matoke.jpg';
import githeri from '@/assets/githeri.webp';
import classes from './image-slideshow.module.css';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
  { image: misheveve, alt: 'traditional kenyan meal'},
  { image: nyamachoma, alt: 'Grilled meat paired with kachumbari'},
  { image: wali_wa_mnazi, alt: 'creamy coconut rice dish'},
  { image: smocha, alt: 'spicy sausage and chill mixture of soft chapati'},
  { image: matoke, alt: 'plantains simmered in a flovourful tomato based source'},
  { image: mutura, alt: 'popular streetfood made from goat lamb or cow interstines'},
  { image: githeri, alt: 'A wholesome Kenyan vegetarian dish made with corn and beans'}
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}