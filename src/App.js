import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData.js';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    const deleteFeedback = id => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };
    return (
        <>
            <Header text='Feedback App' />
            <div className='App container'>
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                />
            </div>
        </>
    );
}

export default App;
