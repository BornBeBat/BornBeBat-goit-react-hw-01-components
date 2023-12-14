import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css';
import { formatNumber } from 'utils';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <div className={css.wrapper}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
        </div>
        <p className={css.title}>{username}</p>
        <p className={css.paragraph}>@{tag}</p>
        <p className={css.paragraph}>{location}</p>
      </div>

      <ul className={css.stat}>
        <li className={css.item}>
          <span className={css.label}>Followers:</span>
          <span className={css.quantity}>{formatNumber(followers)}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Views:</span>
          <span className={css.quantity}>{formatNumber(views)}</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Likes:</span>
          <span className={css.quantity}>{formatNumber(likes)}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
