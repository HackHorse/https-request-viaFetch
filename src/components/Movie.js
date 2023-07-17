import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.release_date}</h3>
      <p>{props.opening_crawl}</p>
    </li>
  );
};

export default Movie;
