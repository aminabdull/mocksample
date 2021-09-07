import React from 'react'
import './select.scss';

const Select = ({label, array, ...rest}) => {
    return (
        <div className="input-wrapper">
            <p className="label">{ label }</p>
            <select className="input" {...rest} >
                <option value="">Pilih { label }</option>
                {array.map(arr =>
                <option key={arr.key} value={arr.key}>{arr.value}</option>
                )};
            </select>
        </div>
    )
}

export default Select
