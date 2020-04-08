import React from "react";
import Masonry from 'react-masonry-css'
import '../style.css'

const Suggestions = ({ data, getGifs }) => {
  return (
    <Masonry
    breakpointCols={1}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
    {data.map(suggest => (
          <button className="suggest-btn">{suggest}</button>
      ))}
  </Masonry>
    
  );
};

export default Suggestions;
