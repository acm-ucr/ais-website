"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Carousel = ({ images, shadow, init, exit }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: init }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: exit }}
        transition={{ duration: 1 }}
        className={`absolute shadow-[-17px_-17px_0px_0px_#dce6f9] ${shadow}  rounded-2xl -z-10`}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="rounded-2xl object-cover w-full h-full"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Carousel;
