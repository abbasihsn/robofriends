import React from 'react';
import Card from './card'



const CardList = ({robots})=>{
    const cardComponents = robots.map(user=>{
        return <Card key={user.id} id={user.id} title={user.name} email={user.email}/>});
    return (
        <div>
            {cardComponents}
        </div>
    );
}

export default CardList;