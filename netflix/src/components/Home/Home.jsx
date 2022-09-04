import React, { useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios';
import { Link } from 'react-router-dom';

const apiKey = "525159632a723a5a5f75a33ac5c4ba97";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const popular = "popular"
const topRated = "top_rated";
const Card = ({ img }) =>(
   <img className="card" src={img} alt="cover" />
);

const Row = ({ title, arr= []}) => (
    <div className="row">
        <h2>{title}</h2>
        <div>
          {
            arr.map((item, index) => (
                <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))
          }
        </div>

    </div>
);

function Home() {

  const [upcomingMovie, setUpcomingMovie] = useState([])
  const [nowPlayingMovie, setNowPlayingMovie] = useState([])
  const [popularMovie, setPopularMovie] = useState([])
  const [topRatedMovie, setTopRatedMovie] = useState([])
  const [genre, setGenre] = useState([])
  



  useEffect(() => {

    const fetchUpcoming = async() => {
      const { data: { results }} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
      setUpcomingMovie(results);
    };

    const fetchNowPlaying = async() => {
      const { data: { results }} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovie(results);
    };

    const fetchPopular = async() => {
      const { data: { results }} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovie(results);
    };

    const fetchTopRated = async () => {
      const {
          data: { genre },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovie(genre);
    };

    const getAllGenre = async() => {
      const { data: { results }} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(results);
    };
    
    getAllGenre();
    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchTopRated();
  }, [])
  return (
    <section className='home'>
      <div className="banner"></div>
      <Row title={"Upcoming"} arr={upcomingMovie} />
      <Row title={"Now Playing"} arr={nowPlayingMovie} />
      <Row title={"Popular"} arr={popularMovie} />
      <Row title={"Top Rated"} arr={topRatedMovie} />

      <div className="genreBox">
                {/* {genre.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>
                        {item.name}
                    </Link>
                ))} */}
      </div>

    </section>
  )
}

export default Home