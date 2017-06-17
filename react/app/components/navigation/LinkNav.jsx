import React from 'react'
import { Link } from 'react-router'

export const LinkNav = (props) => (
    <li className={props.router.location.pathname==props.to?'active':''}><Link to={props.to}>{props.children}</Link></li>
);