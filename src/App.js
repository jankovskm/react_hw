import "./App.css";
import { Route, Routes, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import Movies from './components/Movies';
import { useState } from "react";
import NewMovie from "./components/NewMovie";
import { NotFound } from "./components/NotFound";
import MovieInfo from "./components/MovieInfo";

//Da dodademe uste edna komponenta newMovie koja kje se renderira na /movies/new
// vnatre neka imame nekoja forma so 3 inputi, ime / zanr i rating, da gi cuvame vo nekoj stejt
// i pri submit na formata da gi ispecatime vo konzola, da se napravi notFound komponenta
// kade sto vo h1 kje stavime 404 so crven tekst a pod nego nekoj obicen div koj kje bide sin
// neka bide so tekst The resource you are looking for is missing.

function App() {
  const [movies,setMovies] = useState([
    {
        id:1,
        title: 'The Whale',
        date: '09-12-2022',
        director: 'Darren Aronofsky',
        url: 'D30r0CwtIKc',
        reminder: true,
    },
    {
        id:2,
        title: 'La Stranezza',
        date: '27-10-2022',
        director: 'Roberto Andò',
        url: '8O4zRPgNXSs',
        reminder: true,
    },
    {
        id:3,
        title: 'Nuovo Cinema Paradiso',
        date: '17-11-1988',
        director: 'Giuseppe Tornatore',
        url: 'JMyVSD6OvO8',
        reminder: false,
    },
]);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/add_movie">Add Movie</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<Movies movies={movies}/>}>
          <Route path=":id" element={<MovieInfo />}></Route>
        </Route>
        <Route path="/add_movie" element={<NewMovie />}></Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
