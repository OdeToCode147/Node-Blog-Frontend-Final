import React from "react";

export function SmallImageOverlay(props) {
  return (
    <div className="position-relative smallImgBox">
      <img src={props.img} alt="" className="image-small" />

      <div class="bottom-left-small">
        <h5 className="m-0">{props.text}</h5>
        <h5>{props.text1}</h5>
        <p className="grey-text">
          {props.type} / {props.date}
        </p>
      </div>
    </div>
  );
}
const LargeImageOverlay = (props) => {
  return (
    <div className="position-relative largeImgBox">
      <img src={props.img} alt="" className="image-large" />

      <div class="bottom-left">
        <h3>{props.text}</h3>
        <p className="text-grey">
          {props.type} / {props.date}
        </p>
      </div>
    </div>
  );
};
export default LargeImageOverlay;
