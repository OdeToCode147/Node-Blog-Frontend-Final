import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import Card, { LatestArticleCard } from "../Components/HomeCard";
import LargeImageOverlay, {
  SmallImageOverlay,
} from "../Components/ImageLayover";

export default function Home() {
  const [Latest, setLatest] = useState("");
  const [LatestArticle, setLatestArticle] = useState("");
  const [MorefromSiren, setMorefromSiren] = useState("");
  const [smImg, setsmImg] = useState("");
  const [lgImg, setlgImg] = useState("");

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/latest")
      .then((res) => res.json())
      .then((json) => setLatest(json));
  }, []);

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/latestArticle")
      .then((res) => res.json())
      .then((json) => setLatestArticle(json));
  }, []);

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/moreFromSiren")
      .then((res) => res.json())
      .then((json) => setMorefromSiren(json));
  }, []);

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/smText")
      .then((res) => res.json())
      .then((json) => setsmImg(json));
  }, []);

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/lgText")
      .then((res) => res.json())
      .then((json) => setlgImg(json));
  }, []);

  return (
    <div>
      <Header />
      <hr className="container headingPartition" />
      <div className="container box">
        {lgImg &&
          lgImg.map((val) => {
            return (
              <LargeImageOverlay
                img={val.img}
                text={val.text}
                type={val.type}
                date={val.date}
              />
            );
          })}
        <div className="side-box d-flex">
          {smImg &&
            smImg.map((val) => {
              return (
                <SmallImageOverlay
                  img={val.img}
                  text={val.text}
                  text1={val.text1}
                  type={val.type}
                  date={val.date}
                />
              );
            })}
        </div>
      </div>
      <h2 className="mt-4 mb-1 latest-heading">The Latest</h2>
      <div className="line mb-4"></div>
      <div className="cards-container">
        {Latest &&
          Latest.map((val) => {
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

      <h2 className="mt-5 mb-1 latest-article">The Latest Article</h2>
      <div className="line"></div>
      <div className="d-flex ver-article ">
        <div>
          {LatestArticle &&
            LatestArticle.map((val) => {
              return (
                <>
                  <LatestArticleCard
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

        <div className="side-bar">
          <p className="text-center ad">Advertisement</p>
          <img
            src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/11/pay-using-amazon-pay-100-instant-cashback-ad-times-of-india-mumbai-10-11-2018.png"
            alt=""
            width="500px"
            height="755 px"
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
    </div>
  );
}
