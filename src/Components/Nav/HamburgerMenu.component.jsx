import React from "react";
import { Link, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { Link as LinkReacRouterDom } from "react-router-dom";

import navItems from "./nav-items.js";
import navLinks from "./nav-links.js";

const HamburgerMenu = () => {
  return (
    <NavbarMenu>
      {navItems.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <LinkReacRouterDom to={`${navLinks[index]}`}>
            <Link color={"foreground"} className="w-full" size="lg">
              {item}
            </Link>
          </LinkReacRouterDom>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default HamburgerMenu;
