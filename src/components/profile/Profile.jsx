// import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

function Profile({ username, tag, location, avatar, stats }) {
  return (
    // <div></div>
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <l i>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </l>
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

export default Profile;
