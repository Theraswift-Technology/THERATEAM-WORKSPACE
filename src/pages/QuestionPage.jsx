'use client';

import React, { useState } from 'react';
import { questions } from '../data/questions';

const QuestionPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState({});

    const currentQuestion = questions[currentQuestionIndex];
    const totalQuestions = questions.length;

    // Calculate progress percentage
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

    const handleOptionSelect = (option) => {
        if (currentQuestion.type === 'radio') {
            setAnswers(prev => ({ ...prev, [currentQuestion.id]: option }));
        } else if (currentQuestion.type === 'checkbox') {
            const currentAnswers = answers[currentQuestion.id] || [];
            if (currentAnswers.includes(option)) {
                setAnswers(prev => ({
                    ...prev,
                    [currentQuestion.id]: currentAnswers.filter(item => item !== option)
                }));
            } else {
                setAnswers(prev => ({
                    ...prev,
                    [currentQuestion.id]: [...currentAnswers, option]
                }));
            }
        }
    };

    const handleInputChange = (e) => {
        setAnswers(prev => ({ ...prev, [currentQuestion.id]: e.target.value }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            window.scrollTo(0, 0); // Scroll to top on next question
        } else {
            console.log('Form Submitted:', answers);
            alert('Questionnaire Completed! Answers logged to console.');
            // Here you would redirect or submit to backend
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const isCurrentQuestionAnswered = () => {
        const answer = answers[currentQuestion.id];
        if (currentQuestion.type === 'checkbox') {
            return answer && answer.length > 0;
        }
        return answer !== undefined && answer !== '';
    };

    return (
        <div className="question-page-container">
            {/* Progress Section */}
            <div className="progress-container">
                <div className="progress-bar-bg" style={{ overflow: 'hidden' }}>
                    <div
                        style={{
                            width: `${progressPercentage}%`,
                            height: '100%',
                            backgroundColor: '#000',
                            transition: 'width 0.3s ease'
                        }}
                    />
                </div>
                <div className="progress-step-indicator">{currentQuestionIndex + 1}</div>
            </div>

            {/* Question Section */}
            <div className="question-content">
                <h2 className="question-title">{currentQuestion.question}</h2>

                {/* Render based on type */}
                {['radio', 'checkbox'].includes(currentQuestion.type) && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        {currentQuestion.options.map((option, index) => {
                            const isSelected = currentQuestion.type === 'radio'
                                ? answers[currentQuestion.id] === option
                                : (answers[currentQuestion.id] || []).includes(option);

                            return (
                                <button
                                    key={index}
                                    className={`option-btn ${isSelected ? 'selected' : ''}`}
                                    onClick={() => handleOptionSelect(option)}
                                >
                                    <div className="option-radio" style={{ backgroundColor: isSelected ? '#000' : 'white' }}></div>
                                    <span className="option-text">{option}</span>
                                </button>
                            );
                        })}
                    </div>
                )}

                {['text', 'email'].includes(currentQuestion.type) && (
                    <input
                        type={currentQuestion.type}
                        className={`input-${currentQuestion.type}`}
                        placeholder={currentQuestion.placeholder}
                        value={answers[currentQuestion.id] || ''}
                        onChange={handleInputChange}
                    />
                )}

                {currentQuestion.type === 'textarea' && (
                    <textarea
                        className="input-textarea"
                        placeholder={currentQuestion.placeholder}
                        value={answers[currentQuestion.id] || ''}
                        onChange={handleInputChange}
                    />
                )}

                {currentQuestion.type === 'select' && (
                    <select
                        className="input-select"
                        value={answers[currentQuestion.id] || ''}
                        onChange={handleInputChange}
                    >
                        <option value="">Select an option</option>
                        {currentQuestion.options.map((opt, i) => (
                            <option key={i} value={opt}>{opt}</option>
                        ))}
                    </select>
                )}

                {/* Navigation Buttons */}
                <div className="navigation-buttons">
                    {currentQuestionIndex > 0 && (
                        <button
                            className="prev-btn"
                            onClick={handlePrevious}
                        >
                            Previous
                        </button>
                    )}

                    <button
                        className="next-btn"
                        onClick={handleNext}
                        disabled={!isCurrentQuestionAnswered()}
                    >
                        {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuestionPage;
