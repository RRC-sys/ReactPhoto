import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="page-footer grey darken-3">
        <div className="container">
            <div className="row">
                <div className="col s12 l6">
                    <h5>About Me</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum animi exercitationem nostrum, et, in iusto accusamus expedita officia voluptatum cum quibusdam quos ipsam distinctio inventore incidunt commodi sunt dolore impedit?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas repellat asperiores! Reprehenderit saepe molestiae animi id quibusdam consequuntur possimus quisquam quam? Possimus voluptate ea, quidem voluptatibus totam ex fuga?</p>
                </div>
                <div className="col s12 l4 offset-l2">
                    <h5>Connect</h5>
                    <ul>
                        <li>
                            <NavLink to="/" className="grey-text text-lighten-3" >Facebook</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="grey-text text-lighten-3" >Twitter</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="grey-text text-lighten-3" >Liked In</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="grey-text text-lighten-3" >Instagram</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright grey darken-4">
            <div className="container center-align">
                &copy;2023 Photo Ninja
            </div>
        </div>
    </footer>
  )
}

export default Footer