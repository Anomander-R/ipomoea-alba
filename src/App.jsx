/* eslint-disable no-unused-vars */
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import { useState, useEffect, useRef } from "react";

const listOfItems = [
  {
    path: "images/img1.jpg",
    author: "Wallpaper-Fenix.eu",
    title: "Design Slider",
    topic: "Spaceship",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.",
    textColor: "white",
  },

  {
    path: "images/img2.jpg",
    author: "astropioneers.com",
    title: "e-learning",
    topic: "Loner",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.",
    textColor: "white",
  },
  {
    path: "images/img3.jpg",
    author: "Milky Way",
    title: "Design Slider",
    topic: "Mt Rainier",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.",
    textColor: "white",
  },
  {
    path: "images/img4.jpg",
    author: "esa.int",
    title: "Design Slider",
    topic: "Earth",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.",
    textColor: "white",
  },
  {
    path: "images/img5.jpg",
    author: "Wallpapergod.com",
    title: "Unknown planet",
    topic: "Battle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.",
    textColor: "black",
  },
];

export default function App() {
  const [elements, setElements] = useState(listOfItems);
  const [nextPressed, setNextPressed] = useState(false);
  const [prevPressed, setPrevPressed] = useState(false);
  const autoNextRef = useRef();

  const changeOrder = (type) => {
    let newElements = [...elements];
    if (type === "next") {
      let firstElement = newElements.shift();
      newElements.push(firstElement);
    } else {
      let lastElement = newElements.pop();
      newElements.unshift(lastElement);
    }

    setElements(newElements);
  };
  const clickNext = () => {
    //console.log("click next");
    changeOrder("next");
    setNextPressed(true);
  };

  const clickPrev = () => {
    //console.log("click prev");
    changeOrder("prev");
    setPrevPressed(true);
  };
  const callBacks = [clickNext, clickPrev, nextPressed, prevPressed];

  useEffect(() => {
    if (nextPressed) {
      setTimeout(() => setNextPressed(false), 3000);
    }
    if (prevPressed) {
      setTimeout(() => setPrevPressed(false), 3000);
    }
  }, [nextPressed, prevPressed]);

  useEffect(() => {
    clearInterval(autoNextRef.current);
    autoNextRef.current = setInterval(() => {
      clickNext();
    }, 7000);
    return () => clearInterval(autoNextRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [elements]);

  return (
    <>
      <Header />
      <Carousel listOfItems={elements} callBacks={callBacks} />
    </>
  );
}
