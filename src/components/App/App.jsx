import user from 'dataBase/user.json';
import data from 'dataBase/data.json';
import friends from 'dataBase/friends.json';
import transactions from 'dataBase/transactions.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { AppContainer } from './App.styled';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <AppContainer>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title={'Statistics title'} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </AppContainer>
  );
};
