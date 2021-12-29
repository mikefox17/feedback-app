import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData.js';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutIconLink from './components/AboutIconLink';
function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = id => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => item.id !== id));
        }
    };

    const addFeedback = newFeedback => {
        newFeedback.id = uuidv4();
        console.log(newFeedback);
        setFeedback([newFeedback, ...feedback]);
    };

    return (
        <Router>
            <Header text='Feedback App' />
            <div className='App container'>
                <Routes>
                    <Route
                        exact
                        path='/'
                        element={
                            <>
                                <FeedbackForm handleAdd={addFeedback} />
                                <FeedbackStats feedback={feedback} />
                                <FeedbackList
                                    feedback={feedback}
                                    handleDelete={deleteFeedback}
                                />
                            </>
                        }
                    ></Route>
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
                <div>
                    <AboutIconLink />
                </div>
            </div>
        </Router>
    );
}

export default App;
