import React from 'react';
import '../css/Workers.css';
import { currency } from '../products_en';

const Workers = ({ storage, production, workersCost, key_product, changeWorkerNumber }) => {
    let add = '';
    let onClickAdd = () => changeWorkerNumber(key_product, 1);
    let del = '';
    let onClickDel = () => changeWorkerNumber(key_product, -1);
    
    if (storage[currency].stock < 100 * Math.pow(2, storage[key_product].workers)
        || workersCost + storage[key_product].totalCost > production) {
        onClickAdd = null;
        add = 'worker-transparent';
    }
    if (storage[key_product].workers <= 0) {
        onClickDel = null;
        del = 'worker-transparent';
    }

    return (
        <div className='workers'>
            <button className={add}
                onClick={onClickAdd}>
                <strong>+</strong>
            </button>
            <strong>{storage[key_product].workers}</strong>
            <button className={del}
                onClick={onClickDel}>
                <strong>-</strong>
            </button>
        </div>
    );
}

export default Workers;