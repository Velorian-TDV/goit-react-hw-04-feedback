import PropTypes from 'prop-types';
import Notification from "../Notification/Notification";

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className="statistics">
            {total === 0 ?
                (<Notification message='There is no feedback' />)
                :
                (<ul className="statisticsList">
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {total}</li>
                    <li>Positive feedback: {positivePercentage}%</li>
                </ul>)}
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}