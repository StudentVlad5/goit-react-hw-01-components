import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({data}) => {
        return <section className={css.statistic} key="statistics">
    <h2 className={css.title}>Upload stats</h2>
      <ul className={css.statList}>
        {data.map(item => 
      <li className={css.item} key={item.id} style={{backgroundColor : getRandomHexColor(), width: findWidth(data)}}>
        <span className={css.label}>{item.label}</span>
        <span className={css.percentage}>{item.percentage}%</span>
      </li>)}
    </ul>
  </section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function findWidth(data) {
const widthOfStat =  300 / data.length + 'px';
return widthOfStat}


Statistics.propTypes = {
        data: PropTypes.array.isRequired,
        item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,

    })
    }