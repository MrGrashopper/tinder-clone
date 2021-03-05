import React, { useState } from 'react';
import '../styles/TinderCards.scss';
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
        },
        {
            name: "Jeff Bezoz",
            url: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg",
        }        
    ]);

    const swiped = (direction) => {
        console.log('You swiped: ' + direction)
    };
       
    const outOffFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOffFrame(person.name)}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card" 
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
