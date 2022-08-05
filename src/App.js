import {Link, Route, Routes} from "react-router-dom";

import './App.css';
import {MoviesPage} from "./pages";
import {Headers, MovieInfo, PosterPreview} from "./components";
import SearchForm from "./components/searchForm/SearchForm";


function App() {
  return (
    <div>
        <Headers/>
        <div>
            <Routes>
                <Route path={'/'} element={<MoviesPage/>}/>
                <Route path={'/movi'} element={<MovieInfo/>}/>
                <Route path={'/poster'} element={<PosterPreview/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
