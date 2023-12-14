import PropTypes from 'prop-types';
import {
  HistoryContainer,
  Thead,
  Tbody,
  ColumHead,
  ColumBody,
  Row,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <HistoryContainer>
      <Thead>
        <tr>
          <ColumHead>Type</ColumHead>
          <ColumHead>Amount</ColumHead>
          <ColumHead>Currency</ColumHead>
        </tr>
      </Thead>
      <Tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <Row key={id} index={index}>
            <ColumBody>{type}</ColumBody>
            <ColumBody>{Math.round(amount)}</ColumBody>
            <ColumBody>{currency}</ColumBody>
          </Row>
        ))}
      </Tbody>
    </HistoryContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
