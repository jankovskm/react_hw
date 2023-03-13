import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react';

const Movie = ({movie}) => {
    const [url, setUrl] = useState(false);

    const showUrl = () => {
        setUrl(true);
    }

  return (
    <div>
        <Link onClick={showUrl} to={`/movies/${movie.id}`}><h3>{movie.title}</h3></Link>
        <h5>{movie.director}</h5>
        <p>{movie.date}</p>
        {url && <Outlet context={{ url: movie.url }} />}
    </div>
  )
}

export default Movie