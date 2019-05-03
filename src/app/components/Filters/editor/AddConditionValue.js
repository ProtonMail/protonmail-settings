import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { Row, Input, Button } from 'react-components';
import { noop } from 'proton-shared/lib/helpers/function';

function AddCondtionValue({ onAdd, className }) {
    const [state, setState] = useState('');

    const addEffect = () => {
        state && onAdd(state);
        setState('');
    };

    const handleKeyUp = ({ key, target }) => {
        if (key !== 'Enter') {
            return;
        }
        addEffect();
    };

    const handleInput = ({ target }) => setState(target.value);
    const handleClick = addEffect;

    return (
        <Row className={className}>
            <Input
                id="textOrPattern"
                value={state}
                onKeyUp={handleKeyUp}
                onInput={handleInput}
                placeholder={c('Info').t`Text or pattern`}
                required
            />
            <Button onClick={handleClick} className="ml1">{c('Action').t`Add`}</Button>
        </Row>
    );
}

AddCondtionValue.propTypes = {
    className: PropTypes.string,
    onAdd: PropTypes.fun
};

AddCondtionValue.defaultProps = {
    className: '',
    onAdd: noop
};

export default AddCondtionValue;
