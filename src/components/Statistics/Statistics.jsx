// import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats}) {
  return (
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
    {stats.map(stat => 
    <li 
    className={css.statItem} 
    key={stat.id}
    style={{backgroundColor: `${RandomColor()}` }}
    >
    <span className={css.label}>{stat.label}</span>
    <span className={css.percentage}>{stat.percentage} %</span> </li>)}
  </ul>
</section>
);
}

const random = () => Math.floor(255 * Math.random());
function RandomColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
}

Statistics.propTypes = {
  data: PropTypes.exact({
    title: PropTypes.string,
    stats: PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  }),
};
