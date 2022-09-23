import PropTypes from 'prop-types';
import css from './Description.module.css';

export const Description = ({user}) => {

return <div className={css.description}  key={user.username}>
    <img
      src={user.avatar}
      alt={user.username}
      className={css.avatar}
    />
    <p className={css.name}>{user.username}</p>
    <p className={css.tag}>{user.tag}</p>
    <p className={css.location}>{user.location}</p>
  </div>
}

Description.propTypes = {
user: PropTypes.shape({
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  
})
}