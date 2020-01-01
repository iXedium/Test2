import React from 'react';
import { NavLink } from 'react-router-dom';

const GridItem = (props) => {
    return (
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName="active"
        className="x-grid-item t-shadow-lift"
      >
        <p className="x-grid-number">{props.number}</p>
        <div className="x-grid-line"></div>
        <p className="x-grid-title">{props.name}</p>
      </NavLink>
    );
};

export default GridItem;