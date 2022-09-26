import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friend}) => { return <section className={css.sectionFriendList}>
<ul className={css.friendList} key="friendList">
  {friend.map(item => <li className={css.items} key={item.id}>
  <span className={css.status} style={{backgroundColor: checkStatus(item.isOnline)}}>{item.isOnline}</span>
  <img className={css.avatar} src={item.avatar} alt="User avatar" width="48" />
  <p className={css.name}>{item.name}</p>
</li>
  )}
</ul>
</section>
}

function checkStatus (isOnline) {
return isOnline? 'green':'red' 
}

checkStatus.propTypes = PropTypes.func
FriendList.propTypes = {
    friend: PropTypes.array.isRequired,
    item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
})
}