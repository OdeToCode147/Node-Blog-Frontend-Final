import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import ArticlesCard, {
  TopPostCard,
  TopPostsCardsHead,
} from "../Components/ArticlesCard";

export default function Fitness() {
  const [Post, setPost] = useState("");

  const [FirstPost, setFirstPost] = useState("");

  const [TopPost, setTopPost] = useState("");

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/fitnessPost")
      .then((res) => res.json())
      .then((json) => setPost(json));
  }, []);

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/fitnessFirstPost")
      .then((res) => res.json())
      .then((json) => setFirstPost(json));
  }, []);

  useEffect(() => {
    fetch("https://node-blog-backend-final-5ln4.vercel.app/fitnessTopPost")
      .then((res) => res.json())
      .then((json) => setTopPost(json));
  }, []);
  return (
    <>
      <Header />
      <hr className="container headingPartition" />
      <div className="container">
        <div className="d-flex content-box">
          <div className="content-box-main">
            <h2 className=" mt-3 Page-heading">Bollywood</h2>
            <div className="page-line"></div>
            <br />
            {Post &&
              Post.map((val) => {
                return (
                  <>
                    <ArticlesCard
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
          <div className="content-box-side">
            <h2 className="mt-3 top-posts">Top Posts</h2>
            <div className="page-line-2 mb-4"></div>
            {FirstPost &&
              FirstPost.map((val) => {
                return (
                  <>
                    <TopPostCard
                      id={val.id}
                      img={val.img}
                      title={val.title}
                      date={val.date}
                      type={val.type}
                      num={val.num}
                    />
                    <hr />
                  </>
                );
              })}
            {TopPost &&
              TopPost.map((val) => {
                return (
                  <>
                    <TopPostsCardsHead
                      id={val.id}
                      img={val.img}
                      title={val.title}
                      date={val.date}
                      type={val.type}
                      num={val.num}
                    />
                    <hr />
                  </>
                );
              })}
            <div className="side-bar">
              <p className="text-center ad">Advertisement</p>
              <img
                src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/11/pay-using-amazon-pay-100-instant-cashback-ad-times-of-india-mumbai-10-11-2018.png"
                alt=""
                width="400px"
                height="775 px"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
