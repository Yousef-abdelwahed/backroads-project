import React from "react";
import "./home.css";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <section id="home">
        <Container>
          <div className=" text-center ">
            <div className=" col-sm-12 home-bannar">
              <h1>Continue Exploring</h1>
              <p>Lorem ipsum dolor sit amet.</p>
              <a href="#tours" className="btn home-btn">
                Explore Tours
              </a>
            </div>
            {/* <Col md={8} sm={12}>
              <div className="home-bannar">
                <h1>Continue Exploring</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  earum cumque fugiat corrupti? Ipsum reprehenderit tempora
                  magni officiis tenetur odio totam libero id ad, rerum omnis
                  ipsam pariatur inventore vero!
                </p>
                <a href="#tours" className="btn hero-btn">
                  Explore Tours
                </a>
              </div>
            </Col> */}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
