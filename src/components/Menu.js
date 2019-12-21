import React, { Component } from "react"
import { Link } from "gatsby"
import Hamburger from "./Hamburger"

export default class Menu extends Component {
  state = {
    items: [
      {
        id: 0,
        pageName: "home",
        name: "home"
      },
      {
        id: 1,
        pageName: "about",
        name: "about"
      },
      {
        id: 2,
        pageName: `what's new`,
        name: "whats-new"
      },
      {
        id: 3,
        pageName: "career",
        name: "career"
      },
      {
        id: 4,
        pageName: "contact",
        name: "contact"
      },
    ],
    open: false,
  }

  toggleMenu = () => {
    this.setState({
      open: !this.state.open,
    })
  }

  render() {
    const open = this.state.open
    const items = this.state.items
    const hamburger = open ? "menu-btn__hamburger open" : "menu-btn__hamburger"
    const nav = open ? "nav open" : "nav"
    const menuList = open ? "menu-list open" : "menu-list"
    const menuItem = open ? "menu-list__item open" : "menu-list__item"

    return (
      <div>
        <Hamburger handleClick={this.toggleMenu} hamburgerClass={hamburger} />
        <div className={nav}>
          <ul className={menuList}>
            {items.map(item => (
              <li
                key={item.id}
                className={menuItem}
                onClick={this.toggleMenu}
              >
                <Link to={`/#${item.name}`} className="menu-list__link">
                  {item.pageName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
