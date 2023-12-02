import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../StyleSheets/RateeCard.css';

function RateeCard({ RateeId, Name, Country, Discipline }) {
    const navigate = useNavigate();

    const navigateToRateePage = () => {
        navigate(`/ratee/${RateeId}`);
    };

    return (
        <div className='AthleteCard'>
            <h2>
                <span onClick={navigateToRateePage}>{Name}</span>
            </h2>
            <p>Country: {Country}</p>
            <p>Discipline: {Discipline}</p>
        </div>
    );
}

export default RateeCard;
