import React from "react";

const Articles = ({ title, body }) => {
  return (
  <article className="articleCard">
    <h3> {title} </h3>
    <p> {body} </p>
  </article>

  );
};

export default Articles;
