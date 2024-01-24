import React from 'react';
import Hello from './hello'

const Home = () => {
  return (
    <article data-theme="dark">
      <Hello></Hello>
      HOME
      <button
        className="btn btn-primary">
        Button
      </button>

    </article>
  )
}

export default Home;