import React from 'react';

const getImage = key_product => {
    try {
        return (require(`../img/${key_product}.jpg`));
    } catch {
        return (null);
    }
}

const Logo = ({ storage, key_product, buyProduct }) => {
    let onClick = null;
    if (buyProduct
        && !Object.values(storage[key_product].complete).includes(false)) {
        onClick = () => buyProduct(key_product);
    }
    return (
        <div className='logo-container'>
            <img className='logo'
                onClick={onClick}
                src={getImage(key_product)}
                alt={key_product} />
        </div>
    );
}

export default Logo;