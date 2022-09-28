import React, { useState } from "react";
import members from "./data";
import "./Member.css";
import {
  FaCaretRight,
  FaCaretLeft,
  FaCheckDouble,
  FaPeopleArrows,
} from "react-icons/fa";

function Members() {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = members[index];

  const checkNumber = (number) => {
    if (number > members.length - 1) {
      return 0;
    }
    if (number < 0) {
      return members.length - 1;
    }
    return number;
  };

  const nextBtn = () => {
    setIndex((index) => checkNumber(index + 1));
  };

  const prevBtn = () => {
    setIndex((index) => checkNumber(index - 1));
  };

  const randomBtn = () => {
    let randomNum = Math.floor(Math.random() * members.length);

    if (randomNum === index) {
      randomNum = index + 1;
    }

    setIndex(checkNumber(randomNum));
  };

  // const prevMember = () => {
  //   setIndex((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  return (
    <main>
      <article className="main-article">
        <div className="container">
          <div className="img-container-a">
            <div className="img-container">
              <FaCheckDouble className="icon-double" />
              <img src={image} alt="" className="img" />
            </div>
          </div>

          <div className="member-info">
            <div className="name-div">
              <h2 className="name">{name}</h2>
            </div>
            <div className="job-div">
              <h3 className="job">{job}</h3>
            </div>
            <p className="text">{text}</p>

            <div className="icons-container-a">
              <div className="icons-container-b">
                <div className="icon-parent">
                  <button onClick={prevBtn} className="icon-left-btn">
                    <FaCaretLeft className="icon-left" />
                  </button>

                  <button onClick={nextBtn} className="icon-right-btn">
                    <FaCaretRight className="icon-right" />
                  </button>
                </div>

                <button className="random-btn" onClick={randomBtn}>
                  Show Random
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Members;
