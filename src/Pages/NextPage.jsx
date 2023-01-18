import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Card from "../Components/HomeCard";
import Button from "react-bootstrap/Button";
import face from "../Images/face.png";
import share from "../Images/share.svg";
import clap from "../Images/clap.svg";
import { useLocation } from "react-router-dom";

const NextPage = () => {
  const [MorefromSiren, setMorefromSiren] = useState("");
  const location = useLocation();
  const { data } = location.state;
  console.log(data);

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/moreFromSiren")
      .then((res) => res.json())
      .then((json) => setMorefromSiren(json));
  }, []);
  return (
    <>
      <div className="container header ">
        <div className="d-flex mt-3">
          <p className="h6 Vlogo">The</p>
          <h3 className="head4 Hlogo"> Siren</h3>
        </div>
        <NavLink to="/" className="title">
          <Button variant="outline-danger h-30 mt-3 ">Get Started</Button>
        </NavLink>
      </div>
      <hr className="hr" />
      <div className="d-flex next-box">
        <div className="share-box">
          <a href="#k" className="d-flex text-decoration-none ">
            <img src={clap} alt="" />
            <p className="ms-4 text-dark my-3">9.3K</p>
          </a>
          <a href="#ff" className="d-flex mt-3 text-decoration-none">
            <img src={share} alt="" />
            <p className="ms-4 text-dark my-3">Share this article</p>
          </a>
        </div>
        <div className="box-center">
          <h3 className="my-3 ">{data.title} </h3>
          <div className="d-flex mb-3">
            <img src={face} alt="" className="circle me-3 " />
            <div className="logo-detail">
              <h5 className="m-0 mt-1">Dmitry Nozhe</h5>
              <p className="grey-text m-0 text-muted">
                {data.date} · 10 min read
              </p>
            </div>
            <a href="#fg" className="mt-3 ms-5">
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook text-grey"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram-square ms-1 text-grey"></i>
              </a>
              <a href="https://twitter.com/">
                <i className="fab fa-twitter ms-1 text-grey"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fab fa-youtube ms-1 text-grey"></i>
              </a>
            </a>
          </div>
          <img
            src={data.img}
            alt=""
            height="200px"
            width="396px"
            className="card-img"
          />

          <p className="next-para">{data.details}</p>

          <div className="resp-share-box ">
            <a href="#k" className="d-flex text-decoration-none">
              <img src={clap} alt="" className="img-res" />
              <p className="text-dark ">9.3K</p>
            </a>
            <a href="#ff" className="d-flex text-decoration-none">
              <img src={share} alt="" className="img-res" />
              <p className="text-dark ">Share this article</p>
            </a>
          </div>
        </div>
        <div className="side-bar">
          <p className="text-center ad">Advertisement</p>
          <img
            className="adv-article"
            src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/11/pay-using-amazon-pay-100-instant-cashback-ad-times-of-india-mumbai-10-11-2018.png"
            alt=""
            width="400px"
            height="610 px"
          />
        </div>
      </div>
      <h2 className="mt-5 mb-1 latest-article">More from The Siren</h2>
      <div className="line-article"></div>
      <br />
      <br />
      <div>
        <div className="cards-container">
          {MorefromSiren &&
            MorefromSiren.map((val) => {
              return (
                <>
                  <Card
                    id={val.id}
                    img={val.img}
                    title={val.title}
                    details={val.details}
                    date={val.date}
                    type={val.type}
                  />
                  <hr />
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default NextPage;
