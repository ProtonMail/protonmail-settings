import React from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import { SortableElement } from 'react-sortable-hoc';
import { debounce, noop } from 'proton-shared/lib/helpers/function';
import { Icon, Button } from 'react-components';

import ToggleNotify from './ToggleNotify';
import EditLabelButton from './EditLabelButton';
import DeleteLabelButton from './DeleteLabelButton';

function LabelItem({ label, onToggleChange, onEditLabel, onRemoveLabel }) {
    const { ID, Name, Color, Exclusive, Notify } = label;

    return (
        <tr style={{ backgroundColor: 'white', cursor: 'move' }}>
            <td>
                <Icon name="text-justify" />
            </td>
            <td>
                {Exclusive === 1 && <Icon name="folder" style={{ fill: Color }} className="icon-16p mr1" alt={Name} />}
                {Exclusive === 0 && <Icon name="label" style={{ fill: Color }} className="icon-16p mr1" alt={Name} />}
                {Name}
            </td>
            <td>
                <div className="w10">
                    {Exclusive === 1 && (
                        <ToggleNotify
                            id={`item-${ID}`}
                            type="icon"
                            checked={Notify === 1}
                            onChange={debounce(onToggleChange(label), 300)}
                        />
                    )}
                </div>
            </td>
            <td>
                <EditLabelButton onChange={onEditLabel} label={label} className="mr1" />
                <DeleteLabelButton label={label} onRemove={onRemoveLabel} />
            </td>
        </tr>
    );
}

LabelItem.propTypes = {
    label: PropTypes.object.isRequired,
    onToggleChange: PropTypes.func,
    onEditLabel: PropTypes.func,
    onRemoveLabel: PropTypes.func
};

LabelItem.defaultProps = {
    onToggleChange: noop,
    onEditLabel: noop,
    onRemoveLabel: noop
};

export default SortableElement(LabelItem);
