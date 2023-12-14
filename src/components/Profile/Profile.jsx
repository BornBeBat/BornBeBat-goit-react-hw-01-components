import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Wrapper,
  Avatar,
  Username,
  Text,
  StatisticContainer,
  Item,
  Label,
  Quantity,
} from './Profile.styled';
import { formatNumber } from 'utils';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, likes, views } = stats;
  return (
    <ProfileContainer>
      <Description>
        <Wrapper>
          <Avatar src={avatar} alt="User avatar" />
        </Wrapper>
        <Username>{username}</Username>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <StatisticContainer>
        <Item>
          <Label>Followers:</Label>
          <Quantity>{formatNumber(followers)}</Quantity>
        </Item>
        <Item>
          <Label>Views:</Label>
          <Quantity>{formatNumber(views)}</Quantity>
        </Item>
        <Item>
          <Label>Likes:</Label>
          <Quantity>{formatNumber(likes)}</Quantity>
        </Item>
      </StatisticContainer>
    </ProfileContainer>
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
