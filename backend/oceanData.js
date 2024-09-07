const oceanConditions = [
    {
        condition: 'PFZ (Potential Fishing Zone)',
        message: 'Ideal for fishing today! Go to the PFZ zone.',
        goodFor: 'fishing',
        risk: 'low',
        imageLink: "https://www.shutterstock.com/image-vector/boy-sits-on-rock-catches-600nw-709098922.jpg",
       
    },
    {
        condition: 'Tsunami Alert',
        message: 'Dangerous conditions! Evacuate immediately.',
        goodFor: 'evacuation',
        risk: 'high',
        imageLink: "https://cdn.vectorstock.com/i/500p/09/08/scary-cartoon-people-water-overflow-tsunami-wave-vector-27190908.jpg",
        
    },
    {
        condition: 'Storm Approaching',
        message: 'Stormy weather ahead. Avoid the sea.',
        goodFor: 'stay-on-shore',
        risk: 'medium',
        imageLink: "https://t4.ftcdn.net/jpg/01/90/94/87/360_F_190948706_zqCg49CsUmcGlu7UYLtrh8GyHl3qTszI.jpg",
        
    }
];

export function getOceanConditions() {
    const randomCondition = oceanConditions[Math.floor(Math.random() * oceanConditions.length)];
    return randomCondition;
}
