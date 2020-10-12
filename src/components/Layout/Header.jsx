import { Link } from "gatsby";
import React from "react";

function Header({ siteTitle, siteDescription }) {
  return (
    <Link to="/">
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
  );
}
export { Header };
export default Header;
