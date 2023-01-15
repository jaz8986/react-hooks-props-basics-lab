import React from "react";

function Home({ user }) {
  const color = user.color
  return (
    <div id="home">
      <h1 style={{color: color}}>
        {user.name} is a Web Developer from {user.city}
      </h1>
    </div>
  );
}

export default Home;
