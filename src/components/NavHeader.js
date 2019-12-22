import React, { Component } from "react"
import Menu from "./Menu"
import Title from "./Title"
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
          <Title title={"W"} subtitle={"In Action"} />
        </Link>
        <Menu />
      </div>
    )
  }
}
