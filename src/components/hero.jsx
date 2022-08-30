import React from "react";

const Hero = () => {
  return (
    <main>

    <section className="hero">
      <div className="hero__miniButton">
        <button type="button" className="hero__miniButton-btn">
          We're Hiring
        </button>
        <p className="hero__miniButton-p">visit our careers page</p>
      </div>

      <div className="hero__main">
        <h1 className="hero__main-h1"> Data to enrich your online business</h1>
        <p className="hero__main-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem odio
          nam suscipit sit dicta, blanditiis ducimus architecto cum ipsam
          dolorem?
        </p>
      </div>

      <div className="section__used">
        <h3 className="section__used-h3">Used by:</h3>
        <div className="section__used-images">
          <img
            src="https://sponsors.vuejs.org/images/ionic.png?v2"
            alt=""
            className="section__used-images-img"
          />
          <img
            src="https://sponsors.vuejs.org/images/buttercms.svg"
            alt=""
            className="section__used-images-img"
          />
          <img
            src="https://sponsors.vuejs.org/images/emq.avif"
            alt=""
            className="section__used-images-img"
          />
        </div>
      </div>
    </section>
    <form className="form">
      
    </form>
    </main>
  );
};

export default Hero;
