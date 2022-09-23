import { Description } from 'components/Description/Description';
import user from '../user.json';

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
    ><Description user = {user}/>
    </div>
    
  );
};
