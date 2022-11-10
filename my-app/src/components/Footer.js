import React from "react";
import Reviews from "../Reviews.json";
import "../footer.css"

function Footer() {
  let { reviews } = Reviews;

  return (
    <div className="footerComponent">
      <p>Footer</p>
      {reviews.map((r) => (
        <div>
          <h3>{r.quote}</h3>
          <p>{r.name}</p>
          <p>{r.year}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
