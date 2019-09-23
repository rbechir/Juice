import React from 'react';

const getImage = key_product => {
    try {
        return (require(`../img/${key_product}.jpg`));
    } catch {
        return (null);
    }
}

const Logo = (props) => {
    return (
        <div className='logo-container'>
            <img className={props.name}
                onClick={props.onClick}
                src={getImage(props.key_product)}
                alt={props.key_product} />
        </div>
    );
}

export default Logo;