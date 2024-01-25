/* eslint-disable react/prop-types */
const ArrowsNavigation = ({callBacks}) => {
  return (
    <div className="arrows">
        <button id="prev" onClick={()=>callBacks[1]()}>&#60;</button>
        <button id="next" onClick={()=>callBacks[0]()}>&#62;</button>
    </div>
  )
}

export default ArrowsNavigation