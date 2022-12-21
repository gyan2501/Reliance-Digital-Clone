import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import { AppContext } from "../Context/AppContext";
import Banner from "./Banner";

import Style from "./Home.module.css";
import ProductSlide from "./ProductSlide";
import ProductSlide2 from "./ProductSlide2";

const Home = () => {
  const navigate = useNavigate();

  const {
    images,
    addItems1,
    addItems2,
    addItems3,
    addItems4,
    addItems5,
    addItems11,
    addItems6,
    addItems7,
    addItems8,
    addItems9,
    addItems10,
    bigarr,
  } = useContext(AppContext);

  useEffect(() => {
    localStorage.setItem("bigarr", JSON.stringify(bigarr));
  });

  return (
    <div>
      <img
        style={{ width: "100%" }}
        src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx"
        alt="banner"
      />
      <Banner list={images} />

      <br />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1 className={Style.zz}>SMARTWATCHES AT NEVER BEFORE PRICES |</h1>
        <br />
        <h1 className={Style.zr} onClick={() => navigate("/smartwatches")}>
          VIEW ALL
        </h1>
      </div>
      <br />

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img
            style={{ height: "350px" }}
            src="https://www.reliancedigital.in/medias/Apple-Watches-Producst-Carousel-29-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NTYyOHxpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDQyLzk5MjgzNzA5Nzg4NDYuanBnfDg5OTE2MzFkOTU2YmI1ODhjOTZmODQ2YzkyNjUzNjYwZTYxZGQ2NGY4OTdhNmU3YjBkZGZmZGI3MzM2OWQwNzQ"
            alt="watch-section"
          />
        </div>
        <div style={{ width: "70%" }}>
          <ProductSlide list={addItems8} number={4} />
        </div>
      </div>

      <br />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1 className={Style.zz}>BEST DEALS ON LATEST LAPTOPS |</h1>
        <br />
        <h1 className={Style.zr} onClick={() => navigate("/laptops")}>
          VIEW ALL
        </h1>
      </div>

      <div style={{ width: "95%", margin: "auto" }}>
        <ProductSlide list={addItems1} number={5} />
      </div>
      <br />
      <hr />
      <br />

      <h1 className={Style.zz}>GREAT DEALS ON ELECTRONICS</h1>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          width: "95%",
          margin: "auto",
          gap: "25px",
        }}
      >
        {addItems4.map((e) => (
          <img src={e} alt="no" />
        ))}
      </div>
      <br />
      <br />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1 className={Style.zz}>LOWEST PRICES ON SMALL APPLIANCES |</h1>
        <br />
        <h1 className={Style.zr} onClick={() => navigate("/small_appliances")}>
          VIEW ALL
        </h1>
      </div>
      <br />
      <div style={{ width: "95%", margin: "auto" }}>
        <ProductSlide list={addItems2} number={5} />
      </div>
      <br />
      <hr />
      <br />
      <h1 className={Style.zz}>TOP BRANDS - WASHING MACHINE</h1>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          margin: "auto",
        }}
      >
        {addItems3.map((e) => (
          <img src={e} alt="no" />
        ))}
      </div>
      <br />

      <Banner list={addItems5} />
      <hr />
      <br />

      <h1 className={Style.zy} style={{ color: "#1f4985" }}>
        THE RELIANCE DIGITAL BRAND PROMISE
      </h1>
      <br />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {addItems7.map((e) => (
          <div className={Style.sd}>
            <img
              src={e.img}
              alt="no"
              style={{ backgroundColor: "#f5f5f5", width: "40px" }}
            />
            <p>{e.h1}</p>
            <p>{e.h2}</p>
          </div>
        ))}
      </div>
      <br />
      <br />
      <hr />
      <br />

      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1 className={Style.zz}>LATEST SMARTPHONES |</h1>
        <br />
        <h1 className={Style.zr} onClick={() => navigate("/smartphone")}>
          VIEW ALL
        </h1>
      </div>

      <div style={{ width: "95%", margin: "auto" }}>
        <ProductSlide list={addItems11} number={5} />
      </div>
      <br />
      <hr />
      <br />

      {/* <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1 className={Style.zz}>SMARTWATCHES AT NEVER BEFORE PRICES |</h1>
        <br />
        <h1 className={Style.zr} onClick={() => navigate("/smartwatches")}>
          VIEW ALL
        </h1>
      </div>
      <br /> */}
      {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img
            style={{ height: "350px" }}
            src="https://www.reliancedigital.in/medias/Smartwatches-at-NEVER-before-prices.jpg?context=bWFzdGVyfGltYWdlc3w5NjczNHxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGZiLzk4NjAwNjU5NTE3NzQuanBnfGMwMmUwNTdhMzY1NDBmNjk3ZWJiZmNiMTBkZGRhOGZjNTYxNjgxMTQ4YjllYjhjYjRiZTAxYTU5MWUyMWNiZWE"
            alt="no"
          />
        </div>
        <div style={{ width: "70%" }}>
          <ProductSlide list={addItems8} number={4} />
        </div>
      </div> */}

      <br />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1 className={Style.zz}>TRENDING IN TELEVISIONS |</h1>
        <br />
        <h1 className={Style.zr} onClick={() => navigate("/topsellers")}>
          VIEW ALL
        </h1>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ width: "70%" }}>
          <ProductSlide list={addItems9} number={4} />
        </div>
        <div>
          <img
            style={{ height: "350px" }}
            src="https://www.reliancedigital.in/medias/Trending-in-TVs-Producst-Carousel-05-15-2022.jpg?context=bWFzdGVyfGltYWdlc3w4MTM1OHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDkwLzk5MjgxNjcxMjkxMTguanBnfGZhOTkxYjA5YzE4N2Q5NzIxOThhMjUzNzYxMTljYjdhZDMzODAyMjJlM2MzMDdjZmFjM2Q4ZDY2MTZmNzQzNTI"
            alt="no"
          />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1 className={Style.zz}>LATEST TABLET LAUNCHES |</h1>
        <br />
        <h1 className={Style.zr} onClick={() => navigate("/tablets")}>
          VIEW ALL
        </h1>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <img
            style={{ height: "350px" }}
            src="https://www.reliancedigital.in/medias/Tablets.jpg?context=bWFzdGVyfGltYWdlc3w1NDUyNHxpbWFnZS9qcGVnfGltYWdlcy9oYTgvaGRiLzk4NjIyMDgwOTQyMzguanBnfDJkYTA3NzA1YWUxZmNiMGY0N2EzZjBjOTlkMTNiYzlkNjM5NjAxN2YzMWRjNjA3MjljNDExYzg3OGU1OTJhM2Y"
            alt="no"
          />
        </div>

        <div style={{ width: "70%" }}>
          <ProductSlide list={addItems10} number={4} />
        </div>
      </div>
      <br />
      <br />
      <h1 className={Style.zy}>EXPLORE OUR RANGE OF PRODUCTS</h1>
      <br />
      <div style={{ width: "95%", margin: "auto" }}>
        <ProductSlide2 list={addItems6} number={5} />{" "}
      </div>
      <br />
    </div>
  );
};

export default Home;
