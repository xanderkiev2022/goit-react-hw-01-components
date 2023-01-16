// import React from 'react';
import PropTypes from 'prop-types';
import css from './Profile.module.css';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.statList}>
        <li className={css.statItem}>
          <span className={css.label}>Followers </span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.label}>Views </span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.statItem}>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>

    // <div className={css.event}>
    //   <h2 className={css.title}>{name}</h2>
    //   <p className={css.info}>
    //     <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
    //     {location}
    //   </p>
    //   <p className={css.info}>
    //     <FaUserAlt className={css.icon} size={iconSize.sm} />
    //     {speaker}
    //   </p>
    //   <p className={css.info}>
    //     <FaCalendarAlt className={css.icon} size={iconSize.sm} />
    //     {formattedStart}
    //   </p>
    //   <p className={css.info}>
    //     <FaClock className={css.icon} size={iconSize.sm} />
    //     {duration}
    //   </p>
    //   <span className={`${css.chip} ${css[type]}`}>{type}</span>
    // </div>
  );
}

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
