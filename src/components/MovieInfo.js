import React from 'react'
import { useParams, Link, useOutletContext } from "react-router-dom";

const MovieInfo = () => {
  const { id } = useParams();
  console.log(id);
  const object = useOutletContext();
  const url = object.url;
  console.log(object);

  return (
    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${url}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  )
}

export default MovieInfo