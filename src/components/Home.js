import React from "react";

const Home = () => {
  return (
    <>
      <div className="homemain">
        <h1 className="hometitle">
          Welcome to <span className="gems1">GEMS</span>
        </h1>
        <div className="container" id="paragraph">
          <p className="p1">
            Welcome to our <span className="gems1">GEMS</span> website! We offer a seamless experience by
            providing you with access to the latest news, exciting games, and a
            vast collection of movies. Our platform utilizes APIs to deliver
            real-time updates, ensuring you never miss out on the latest
            happenings in the world of entertainment and beyond.
          </p>
          <p className="p1">
            Whether you're a news enthusiast, a gaming aficionado, or a movie
            buff, our website has something special for you. Explore a diverse
            range of content, stay informed, and immerse yourself in the
            entertainment of your choice. Start your journey with us and
            discover a world of endless possibilities!
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
