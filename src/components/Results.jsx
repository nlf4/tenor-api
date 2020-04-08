import React from "react";
import Masonry from 'react-masonry-css'
import '../style.css'

const Results = ({ data }) => {
  return (
    <Masonry
    breakpointCols={1}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
    {data.map(gif => (
      <a href={gif.url} id={gif.id}>
        <img id="img-item" key={gif.title} src={gif.media[0].tinygif.url} alt="" />
      </a>
          
      ))}
  </Masonry>
    
  );
};

export default Results;
