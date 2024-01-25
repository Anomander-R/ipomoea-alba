/* eslint-disable react/prop-types */
import ArrowsNavigation from "../arrowsnavigation/ArrowsNavigation";
import CarouselItem from "../carouselitem/CarouselItem";
import ProgressBar from "../progressbar/ProgressBar";
import ThumbnailList from "../thumbnaillist/ThumbnailList";

const Carousel = ({ listOfItems, callBacks }) => {
  return (
    <div
      className={`carousel${callBacks[2] ? " next" : ""}${
        callBacks[3] ? " prev" : ""
      }`}
    >
      <div className="list">
        {listOfItems.map((element) => {
          return <CarouselItem item={element} key={element.path} />;
        })}
      </div>
      <ThumbnailList listOfItems={listOfItems} />
      <ProgressBar />
      <ArrowsNavigation callBacks={callBacks} />
    </div>
  );
};

export default Carousel;
