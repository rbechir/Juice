import React from 'react';
import '../css/Workers.css';
import { currency } from '../products_en';

const Workers = (props) => {
    let add = '';
    let onClickAdd = () => props.changeWorkerNumber(props.key_product, 1);
    let del = '';
    let onClickDel = () => props.changeWorkerNumber(props.key_product, -1);

    if (props.storage[currency].stock < 100 * Math.pow(2, props.storage[props.key_product].workers)
        || props.workersCost + props.storage[props.key_product].totalCost > props.production) {
        onClickAdd = null;
        add = 'worker-transparent';
    }
    if (props.storage[props.key_product].workers <= 0) {
        onClickDel = null;
        del = 'worker-transparent';
    }

    return (
        <div className='workers'>
            <button className={add}
                onClick={onClickAdd}>
                <strong>+</strong>
            </button>
            <strong>{props.storage[props.key_product].workers}</strong>
            <button className={del}
                onClick={onClickDel}>
                <strong>-</strong>
            </button>
        </div>
    );
}

export default Workers;