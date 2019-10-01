import React from 'react';
import './CelebrityPanel.component.css';

const CelebrityPanel = ({ celebrity, remove, key}) => (
    <div className="celeb-panel aic">
        <div>
            <img className="profile-photo" alt={celebrity.name} src={celebrity.pictureUrl}></img>
        </div>
        <p>{celebrity.name}</p>
        <p>{celebrity.popularity.toFixed(2)}</p>
        <button onClick={() => remove(key)}>Delete</button>
    </div>
);
export default CelebrityPanel;