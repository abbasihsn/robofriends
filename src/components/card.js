import React from 'react';


const Card = ({email, id, title})=>{
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='test' src={`https://robohash.org/${id}?200*200`}/>
            <div>
                <h2>{title}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;