import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className="feedbackOption">
            {options.map(element => {
                return (
                    <button
                        onClick={() => { onLeaveFeedback({ type: element, payload: 1 }) }}
                        key={nanoid()}
                    >{element}</button>
                )
            })}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired
    ).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}