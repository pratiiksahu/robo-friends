import React from 'react';

const Card = ({ name, email, id }) => {
    // Destructring part 2
    return (
        // We cannot have multiple elements in a component
        <div className='tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robots" className="src" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;