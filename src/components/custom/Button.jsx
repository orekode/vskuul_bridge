import React from 'react'
import { Link } from 'react-router-dom'

export const Md = ({ children, extra="", link="", ...props }) => {
  return (
    <Link to={link} className={"bg-[#8c271e] text-lg font-semibold px-6 pb-2 pt-1 text-white rounded-3xl block text-center " + extra} size="lg" {...props}>{children}</Link>

  )
}

export const OutlineMd = ({ children, extra="", link="", ...props }) => {
    return (
      <Link to={link} className={"border-[#8c271e] border-2 text-[#8c271e] text-lg font-semibold px-6 pb-2 pt-1 rounded-3xl block text-center " + extra} size="lg" {...props}>{children}</Link>
    )
}

export default Md