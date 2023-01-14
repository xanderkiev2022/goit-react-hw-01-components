import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats}) {
  return (
<section className={css.statistics}>
  <h2 className={css.title}>{title}</h2>

  <ul className={css.statList}>
    <li className={css.statItem}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.persentage}</span>
    </li>
    <li className={css.statItem}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.persentage}</span>
    </li>
    <li className={css.statItem}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.persentage}</span>
    </li>
    <li className={css.statItem}>
      <span className={css.label}>{stats.label}</span>
      <span className={css.percentage}>{stats.persentage}</span>
    </li>
  </ul>
</section>
  );
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
