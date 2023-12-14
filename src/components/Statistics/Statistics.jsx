import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import { getRandomColor } from 'utils';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(curent => (
          <li
            className={css.item}
            style={{ backgroundColor: getRandomColor() }}
            key={curent.id}
          >
            <span className={css.label}>{curent.label}</span>
            <span className={css.percentage}>{curent.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
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
