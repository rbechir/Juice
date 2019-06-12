import React from 'react';

const getImage = key_product => {
    try {
        return (require(`../img/${key_product}.jpg`));
    } catch {
        return (null);
    }
}

const Logo = ({ onClick, key_product, name }) => {
    return (
        <div className='logo-container'>
            <img className={name}
                onClick={onClick}
                src={getImage(key_product)}
                alt={key_product} />
        </div>
    );
}

export default Logo;