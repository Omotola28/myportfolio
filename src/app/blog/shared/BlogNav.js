import React from 'react'
import { NavLink } from 'react-router-dom'
//import Moment from 'moment'
//import calenderStrings from './../../../components/DateFormat'

const BlogNav = ({ to, date }) => {
  return (

 <nav className="level">
    <div className="level-left">
      <NavLink className="level-item button is-medium is-warning has-text-grey-dark is-link is-outlined" to={to}>{to === '/blog' ? 'Back to Blog' : 'Read More'}</NavLink>
    </div>
    <div className="level-right">
      <p className="level-item has-text-grey-dark is-size-6">
           {date}
      </p>
    </div>
  </nav>

)

}
export default BlogNav