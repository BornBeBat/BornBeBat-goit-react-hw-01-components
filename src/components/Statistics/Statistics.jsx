import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';
import { getRandomColor } from 'utils';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsContainer>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(curent => (
          <Item style={{ backgroundColor: getRandomColor() }} key={curent.id}>
            <Label>{curent.label}</Label>
            <Percentage>{curent.percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
