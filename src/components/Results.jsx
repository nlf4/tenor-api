import React from "react";
import Masonry from 'react-masonry-css'
import '../style.css'

const Results = ({ data }) => {
  return (
    <Masonry
    breakpointCols={3}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
    {data.map(gif => (
          <img id="img-item" key={gif.title} src={gif.media[0].tinygif.url} alt="" />
      ))}
  </Masonry>
    
  );
};

export default Results;
