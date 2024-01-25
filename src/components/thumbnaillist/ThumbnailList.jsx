/* eslint-disable react/prop-types */
import ThumbnailItem from "../thumbnailitem/ThumbnailItem";

const ThumbnailList = ({listOfItems}) => {
  let newArray = [...listOfItems];
  let firstItem = newArray.shift();
  newArray.push(firstItem);
  return (
    <div className="thumbnail">
    {newArray.map((element, index)=>{
      return(<ThumbnailItem item={element} key={index}/>)
    })}
    </div>
  )
}

export default ThumbnailList