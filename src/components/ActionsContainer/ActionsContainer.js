import React from 'react';

const ActionsContainer = ( {click, action} ) => {
    return(
        <div>
            <button onClick={click}>{action}</button>
        </div>
    );
};

export default ActionsContainer;