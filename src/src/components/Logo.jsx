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
    let name = 'logo';
    if (buyProduct) {
        if (Object.values(storage[key_product].complete).includes(false)) {
            name = 'logo transparent';
        } else {
            onClick = () => buyProduct(key_product);
        }
    }
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