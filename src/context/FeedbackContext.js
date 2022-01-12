import { createContext, useState } from 'react';
import FeedbackData from '../data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4();
        console.log(newFeedback);
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = id => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    const editFeedback = item => {
        setFeedbackEdit({ item, edit: true });
    };

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map(item =>
                item.id === id ? { ...item, ...updItem } : item
            )
        );
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
