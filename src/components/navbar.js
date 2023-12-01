import React, { useState } from "react";
import { Link } from "react-router-dom";
// Import icons individually or as needed
import { Group, Code } from "@mantine/core";
import {
  IconUserCircle,
  IconMessages,
  IconCoin,
  IconSearch,
  //IconSwitchHorizontal,
  IconLogout,
  IconLetterB,
  IconHome
} from "@tabler/icons-react";

import classes from "./navbar.module.css";
import '@mantine/core/styles.css'
const data = [
  { link: "/admin/profile", label: "Profile", icon: IconUserCircle },
  { link: "/admin/search", label: "Search", icon: IconSearch },
  { link: "/admin/chat", label: "Chat", icon: IconMessages },
  { link: "/admin/sell", label: "Sell", icon: IconCoin },
];

function Navbar({isOpen}) {
    
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      to={item.link}
      key={item.label}
      onClick={() => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.75} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav
      className={`${classes["navbar"]} ${isOpen ? classes["open"] : ""}`}
      style={{ transition: "transform 0.3s" }}
    >
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <IconLetterB size={28} color="#d35934" stroke="3"/><p>BITS BUY</p>
          <Code fw={700}>v0.0.0</Code>
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        {/*<a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
          <span>Change account</span>
        </a>*/}

        <a
          href="#"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
