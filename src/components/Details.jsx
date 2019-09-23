import React from 'react';
import '../css/Details.css';
import Detail from './Detail';

const Details = (props) => {
    return (
        <div className='details'>
            <div className='prod'>
                {props.storage[props.key_product].stock * props.storage[props.key_product].production} / s
            </div>
            {Object.keys(props.storage[props.key_product].require)
                .map((key_element, i) => (
                    <div key={key_element}>
                        <Detail
                            storage={props.storage}
                            key_element={key_element}
                            key_product={props.key_product} />
                    </div>
                )
                )}
        </div>
    );
}

export default Details;