/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const proba ={
    path: "images/img1.jpg",
    author: "Something",
    title: "Design Slider",
    topic: "Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.",
    textColor: 'white',
}

function CarouselItem({item=proba}) {
  const githubUrl='https://github.com/Anomander-R/ipomoea-alba';
    const {path, author, title,topic,description, textColor} = item;
    const handleClick =()=>{
      window.open(githubUrl, '_blank');
    }
  return (
    <>
      <div className="item">
        <img src={path} alt={title} />
        <div className="content">
          <div className="author">{author}</div>
          <div className="title">{title}</div>
          <div className="topic">{topic}</div>
          <div className={`description ${textColor}`}>
            {description}
          </div>
          <div className="buttons">
            <button>See More</button>
            <button onClick={handleClick}>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselItem;
