import React from "react";

import '../styles/SideMenu.css'

import homeIcon from "../assets/home.PNG";
import fileIcon from "../assets/file.PNG";
import paperIcon from "../assets/paper.PNG";
import profile from "../assets/profile.PNG";
import shopIcon from "../assets/shop.PNG";
import boxIcon from "../assets/box.PNG";
import percentIcon from "../assets/percent.PNG";
import creditIcon from "../assets/credit.PNG";
import bellIcon from "../assets/bell.PNG";
import badgeIcon from "../assets/badge.PNG";
import stackIcon from "../assets/stack.PNG";
import peopleIcon from "../assets/people.PNG";

const SideMenu = () => {
  const icons = [
    { id: 1, name: homeIcon },
    { id: 2, name: fileIcon },
    { id: 3, name: paperIcon },
    { id: 4, name: profile },
    { id: 5, name: shopIcon },
    { id: 6, name: boxIcon },
    { id: 7, name: percentIcon },
    { id: 8, name: creditIcon },
    { id: 9, name: bellIcon },
    { id: 10, name: badgeIcon },
    { id: 11, name: stackIcon },
    { id: 12, name: peopleIcon },
  ];
  return (
    <div className="sidebar-wrapper">
      {icons.map((icon) => (
        <div key={icon.id}>{<img src={`${icon.name}`} alt={icon.name} />}</div>
        ))}
    </div>
  );
};

export default SideMenu;
