// import React from 'react';
import classes from './Data.module.css'

const Data = (props: { name: string | undefined; children: string | undefined; title: string | undefined; }) => {
  return (
    <li className={classes.data}>
      <h2>{props.name}</h2>
      <h3>{props.children}</h3>
    </li>
  );
};

export default Data;
