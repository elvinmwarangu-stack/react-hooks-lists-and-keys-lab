import React from "react";

function NavBar() {
  // Define the navigation links in an array
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* Loop through the links array to create <a> elements */}
      {links.map((link) => (
        <a key={link} href={`#${link}`}>
          {link}
        </a>
      ))}
    </nav>
  );
}

export default NavBar;
