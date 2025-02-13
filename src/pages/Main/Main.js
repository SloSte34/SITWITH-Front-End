import React, { useEffect, useState } from 'react';
import Carousel from '../../components/Carousel/Carousel';
// import Chair from './Chair';
import ChairList from './ChairList';
import './Main.scss';

const Main = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch('/data/mainBanner.json')
      .then(res => res.json())
      .then(res => setBanner(res));
  });
  return (
    <main className="main">
      <section className="carousel-section">
        <Carousel slides={banner} />
      </section>
      <section className="product-section">
        <article className="section-inner">
          <div className="section-header">
            <h2 className="section-title">TASK CHAIR</h2>
            <a className="link-more" href="#;">
              ALL PRODUCTS
            </a>
          </div>
          <div className="section-body col-2">
            <ChairList category="office" />
          </div>
        </article>
      </section>
      <section className="product-section">
        <article className="section-inner">
          <div className="section-header">
            <h2 className="section-title">KIDS CHAIR</h2>
            <a href="#;" className="link-more">
              ALL PRODUCTS
            </a>
          </div>
          <div className="section-body col-3">
            <ChairList category="baby" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Main;
