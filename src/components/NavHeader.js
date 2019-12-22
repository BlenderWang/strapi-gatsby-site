import React, { Component } from "react"
import Menu from "./Menu"
import { Link } from "gatsby"

export default class NavHeader extends Component {
  constructor(props) {
    super(props)

    this.state = {
      prevScrollPos: 0,
      transparent: false,
    }
  }

  handleScroll = () => {
    const { prevScrollPos } = this.state
    const currentScrollPos = window.pageYOffset
    const transparent = prevScrollPos > currentScrollPos

    this.setState({
      prevScrollPos: currentScrollPos,
      transparent,
    })
  }

  componentDidMount() {
    // console.log("mounted")
    window.addEventListener("scroll", this.handleScroll)
  }

  UNSAFE_componentWillMount() {
    // console.log("mount")
    this.setState({
      transparent: true,
    })
  }

  render() {
    const navTrans = !this.state.transparent
      ? `nav-bar-fix-top nav-bar-fix-top--bg-clr`
      : `nav-bar-fix-top`

    return (
      <div className={navTrans}>
        <Link to="/">
          <div className="logo-wrapper">
            <img
              src="https://res.cloudinary.com/shirlzzz9/image/upload/v1577032533/logo.png"
              alt="logo"
              style={{ width: `75% `, height: `auto` }}
            />
          </div>
        </Link>
        <Menu />
      </div>
    )
  }
}
