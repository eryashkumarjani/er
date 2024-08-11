import React from "react";
import { TbError404 } from "react-icons/tb";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <TbError404 />
      <p> something went wrong! </p>
      <Link to={`/home`}>go to home</Link>
    </section>
  );
};

export default NotFound;
