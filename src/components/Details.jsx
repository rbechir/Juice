import React from 'react';
import './Details.css';
import Detail from './Detail';

const Details = ({ storage, key_product, completeDetail }) => {
    return (
        <div className='details'>
            <div className='prod'>
                {storage[key_product].stock * storage[key_product].production} / s
            </div>
            {Object.keys(storage[key_product].require)
                .map((key_element, i) => (
                    <div key={key_element}>
                        <Detail
                            storage={storage}
                            key_element={key_element}
                            key_product={key_product}
                            completeDetail={completeDetail} />
                    </div>
            ))}
        </div>
    );
}

export default Details;