import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  role: 'text-md text-black font-light',
  description: 'text-md text-gray-600 font-light',
};

const SummaryItem = ({ name, role, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link} target="_blank" rel="noreferrer" >{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black target:_blank ' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      {role ? <p className={classes.role}>{role}</p> : null}
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default SummaryItem;
