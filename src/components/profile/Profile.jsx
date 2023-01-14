import styled from 'styled-components';

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;

export const Profile = ({ username, tag, location, avatar, stats }) => {
  //   const formattedStart = formatEventStart(start);
  //   const duration = formatEventDuration(start, end);

  return (
    <div class="profile">
      <div class="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          class="avatar"
        />
        <p class="name">Petra Marica</p>
        <p class="tag">@pmarica</p>
        <p class="location">Salvador, Brasil</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
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
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
