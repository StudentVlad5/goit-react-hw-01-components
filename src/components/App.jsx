import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from '../user.json';
import data from '../data.json';
import friend from '../friends.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile user = {user}/>
    <Statistics title="Upload stats" data = {data} />
    <FriendList friend = {friend} />
    </div>
    
  );
};
