import React from "react";
import { Link } from "react-router-dom";
export const NoMatch = () => {
  return (
    <>
      <div>NoMatch</div>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
};
