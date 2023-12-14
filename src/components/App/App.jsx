import css from 'components/App/App.module.css';
import user from 'dataBase/user.json';
import data from 'dataBase/data.json';
import friends from 'dataBase/friends.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={css.container}>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title={'Statistics title'} stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
