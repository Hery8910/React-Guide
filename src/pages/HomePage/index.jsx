import React from "react";
import styles from "./HomePage.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function HomePage() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.h1}>
          A open source <span className={styles.span}>React </span> components
          library
        </h1>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          // ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          // autoPlaySpeed={5000}
          // keyBoardControl={true}
          customTransition="all 5s"
          transitionDuration={1000}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          // dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <img
            className={styles.Card}
            src="public/images/Card_Component.webp"
            alt="Web example"
          />
          <img
            className={styles.Card}
            src="public/images/Form.webp"
            alt="Web example"
          />
          <img
            className={styles.Table}
            src="public/images/Table.webp"
            alt="Web example"
          />
          <img
            className={styles.Footer}
            src="public/images/Footer.webp"
            alt="Web example"
          />
        </Carousel>
      </header>

      <section className={styles.section}>
        <p className={styles.p}>
          As part of the React course I participated in, we were required to
          demonstrate our acquired knowledge by creating a functional
          application with React. That is when I considered creating an
          application that would help me find information about React more
          efficiently, have code examples that I could copy and use in any
          project, and, if necessary, quickly and directly access the official
          documentation. I hope it will be as useful to you as it has been for
          me.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Objectives</h2>
        <p className={styles.p}>
          The objectives of the project were quite clear from the beginning. I
          wanted to create a collection of components, hooks, relevant
          information on styling, best practices, and exercise examples. In
          general, I aimed to compile the knowledge I have acquired during my
          studies to assist other programming students like myself. The project
          is open-source with the goal of showcasing how I developed this
          project and motivating others to develop their own solutions or
          contribute to this one.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Benefits</h2>
        <p className={styles.p}>
          This project provides quick access to collected information about
          React and offers practical exercises to learn React in a more hands-on
          manner. The ready-to-use component examples make it easier to solve
          these exercises and allow you to start creating your own projects. All
          the information gathered has been sourced from the official
          documentation, but it may contain errors or be outdated. Therefore, I
          always recommend using the official documentation for a more
          comprehensive guide.
        </p>
      </section>
    </main>
  );
}

export default HomePage;
