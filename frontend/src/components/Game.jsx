import React, { useState } from 'react';
import Decision from './Decision';

const Game = () => {
    const [role, setRole] = useState(null);
    const roles = [
        'Fisherman',
        'Ship Captain',
        'Tourism Operator',
        'Marine Biologist',
        'Coastal Engineer',
        'Oceanographer',
        'Environmental Scientist',
        'Marine Conservationist',
        'Tourism Guide',
        'Weather Analyst'
    ];

    const handleRoleSelection = (selectedRole) => {
        setRole(selectedRole);
    };

    return (
        
        <div>
            

            {!role ? (
                <div>
                    <h2>Select Your Role</h2>
                    <div>
                        {roles.map((role, index) => (
                            <button key={index} onClick={() => handleRoleSelection(role)}>
                                {role}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <Decision role={role} />
            )}
        </div>
    );
};

export default Game;
