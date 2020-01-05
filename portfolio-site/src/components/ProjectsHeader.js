import React from 'react';

const ProjectsHeader = () => (
  <header>
    <NavLink to='/portfolio/1' activeClassName='is-active'>
      Item One
    </NavLink>
    <NavLink to='/portfolio/2' activeClassName='is-active'>
      Item Two
    </NavLink>
  </header>
);

export default ProjectsHeader;
