import { useReducer } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import { Wrapper, GlobalStyles } from "./App.styled";

function counterReduser(state, action) {
    switch (action.type) {
        case 'good':
            return { ...state, good: state.good + action.payload }
        case 'neutral':
            return { ...state, neutral: state.neutral + action.payload }
        case 'bad':
            return { ...state, bad: state.bad + action.payload }
        default:
            throw new Error(`Unsuported action type ${action.type}`)
    }
}

export default function App() {
    const [state, dispatch] = useReducer(counterReduser, { good: 0, neutral: 0, bad: 0 })

    const total = () => state.good + state.neutral + state.bad;
    const positivePercentage = () => Math.round((state.good / total()) * 100)

    return (
        <Wrapper>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions
                    options={Object.keys(state)}
                    onLeaveFeedback={dispatch}
                />
            </Section>

            <Section title={'Statistics'}>
                <Statistics
                    good={state.good}
                    neutral={state.neutral}
                    bad={state.bad}
                    total={total()}
                    positivePercentage={positivePercentage()}
                />
            </Section>
        </Wrapper>
    )
}