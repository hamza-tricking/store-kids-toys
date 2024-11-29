import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Filter from "../filter";
const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showingItems, setitems] = useState("aa");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 90) {
      setitems("item-solo");
    }
  }, [scrollY]); // This will run every time the scroll position changes

  // lazyLoding/

  // lazyLoding/
  return (
    <div className="home">
      <div className="hero-part">
        <img alt="" src="/images/hero.jpg"></img>
      </div>
      <div className="slogon">
        <div>"Play, Learn, Grow – Toys for Every Stage"</div>
      </div>
      <section className="controllIng">
        <div className="controll-showing">
          <div className="hedear-controller">
            <br></br>
            <div style={{ marginRight: "10px" }}>
              {" "}
              <Filter />
            </div>
            {"             "} filter
            <div className="middle-header">all items</div>
            <div className="right-header">
              <div>one</div>
              <div>line of 3 </div>
              <div> line of 5</div>
            </div>
            <div className="right-header2">stored by</div>
          </div>

          <section className="items">
            <div className="filter-items">
              <div>price</div>
              <div>location</div>
              <div>color</div>
              <div>quantité</div>
              <div>city</div>
            </div>

            {/* shownig items part / */}
            <div className="show-items">
              <div className={showingItems}>
                <img
                  srcSet="/images/products/game (1).jpg 600w, /images/products/game (1)@2x.jpg 1200w"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  src="/images/products/game (1).jpg"
                  alt="Game 1"
                  loading="lazy"
                />
              </div>
              <div className={showingItems}>
                <img
                  srcSet="/images/products/game (2).jpg 600w, /images/products/game (2)@2x.jpg 1200w"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  src="/images/products/game (2).jpg"
                  alt="Game 2"
                  loading="lazy"
                />
              </div>
              <div className={showingItems}>
                <img
                  srcSet="/images/products/game (3).jpg 600w, /images/products/game (3)@2x.jpg 1200w"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  src="/images/products/game (3).jpg"
                  alt="Game 3"
                  loading="lazy"
                />
              </div>
              <div className={showingItems}>
                <img
                  srcSet="/images/products/game (4).jpg 600w, /images/products/game (4)@2x.jpg 1200w"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  src="/images/products/game (4).jpg"
                  alt="Game 4"
                  loading="lazy"
                />
              </div>
              <div className={showingItems}>
                <img
                  srcSet="/images/products/game (5).jpg 600w, /images/products/game (5)@2x.jpg 1200w"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  src="/images/products/game (5).jpg"
                  alt="Game 5"
                  loading="lazy"
                />
              </div>
              <div className={showingItems}>
                <img
                  srcSet="/images/products/game (6).jpg 600w, /images/products/game (6)@2x.jpg 1200w"
                  sizes="(max-width: 600px) 100vw, 50vw"
                  src="/images/products/game (6).jpg"
                  alt="Game 6"
                  loading="lazy"
                />
              </div>
            </div>
            {/* shownig items part / */}
          </section>
        </div>
      </section>
    </div>
    // https://color.adobe.com/search?q=black /
  );
};

export default Home;
