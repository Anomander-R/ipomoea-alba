/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const proba ={
    path: "images/img1.jpg",
    author: "Something",
    title: "Design Slider",
    topic: "Space",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptate doloribus magnam corporis veniam harum maiores iusto veritatis a perferendis.",
}

const ThumbnailItem = ({item=proba}) => {
    const {path, author, title,topic,description} = item;
  return (
    <div className="item">
    <img src={path} alt="img" />
    <div className="content">
        <div className="title">
            {title}
        </div>
        <div className="description">
            {description}
        </div>
    </div>
    </div>
  )
}

export default ThumbnailItem