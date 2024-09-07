import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner'; 

const Decision = ({ role }) => {
    const [oceanCondition, setOceanCondition] = useState(null);
    const [decision, setDecision] = useState('');
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        
        const fetchConditions = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/ocean-conditions');
                setOceanCondition(response.data);
            } catch (error) {
                console.error('Error fetching ocean conditions:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchConditions();
    }, []);

    const handleDecision = (userDecision) => {
        if (oceanCondition && userDecision === oceanCondition.goodFor) {
            setDecision('Correct Decision! Points awarded.');
        } else {
            setDecision('Wrong Decision! You lost points.');
        }
    };

    return (
        <div>
            <h2>Your Role: {role}</h2>
            {loading ? (
                <Spinner /> // Show spinner while loading
            ) : (
                oceanCondition && (
                    <div>
                        <p>Ocean Condition: {oceanCondition.condition}</p>
                        <div>
                            <img
                                style={{ height: "300px", borderRadius: "10px", border: "1px solid black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
                                src={oceanCondition.imageLink}
                                alt="Ocean Condition"
                            />
                        </div>
                        <p>Message: {oceanCondition.message}</p>
                        <div>
                            <button onClick={() => handleDecision('fishing')}>Go Fishing</button>
                            <button onClick={() => handleDecision('stay-on-shore')}>Stay on Shore</button>
                            <button onClick={() => handleDecision('evacuation')}>Evacuate</button>
                        </div>
                    </div>
                )
            )}
            {decision && <p>{decision}</p>}
        </div>
    );
};

export default Decision;
