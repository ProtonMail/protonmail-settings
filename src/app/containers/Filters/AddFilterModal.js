import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { c } from 'ttag';
import {
    Modal,
    HeaderModal,
    InnerModal,
    FooterModal,
    ContentModal,
    PrimaryButton,
    Button,
    Input,
    Label,
    Row
} from 'react-components';
import { newFilter, format as formatFilter } from 'proton-shared/lib/filters/factory';
import { validate, validateComplex } from 'proton-shared/lib/filters/validator';
import { noop } from 'proton-shared/lib/helpers/function';

import ConditionsEditor from '../../components/Filters/editor/Conditions';
import ActionsEditor from '../../components/Filters/editor/Actions';
import OperatorEditor from '../../components/Filters/editor/Operator';
import SieveEditor from '../../components/Filters/editor/Sieve';
import PreviewFilter from '../../components/Filters/editor/Preview';

function AddFilterModal({ filter, type, onSubmit, loading, ...props }) {
    const filterModel = newFilter(filter, type);
    const [model, setModel] = useState(filterModel);
    const [isPreview, setPreview] = useState(false);
    const [isInvalid, setValitidy] = useState(false);
    const [sieveCode, setSieveCode] = useState(filterModel.Sieve || '');

    console.log('Open filter', filter);

    const handleChange = (key) => (data) => {
        console.log('[handleChange]', key, data, model);
        setModel({
            ...model,
            Simple: {
                ...model.Simple,
                [key]: Array.isArray(data) ? data : { ...model.Simple[key], ...data }
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (type === 'complex') {
            const filter = {
                ...model,
                Sieve: sieveCode
            };
            const { isValid } = validateComplex(filter);

            if (isInvalid || !isValid) {
                return alert('NEIN NEIN NEIN');
            }

            return onSubmit(formatFilter(filter, 'complex'));
        }

        const filter = formatFilter(model, 'simple');
        const { isValid, ...errors } = validate(filter);

        console.log('FILTER', filter);
        if (!isValid) {
            console.log(errors);
            return alert('NEIN NEIN NEIN');
        }

        onSubmit(filter);
    };

    const handleInputName = ({ target }) => {
        console.log('[handleInputName]', target.value);
        setModel({
            ...model,
            Name: target.value
        });
    };

    const handleChangeBeforeLint = () => setValitidy(true);
    const handleChangeSieve = (err, code) => {
        setValitidy(err);
        if (!err) {
            setSieveCode(code);
        }
    };
    const handleClickPreview = () => setPreview(!isPreview);

    return (
        <Modal {...props} loading={loading}>
            <HeaderModal onClose={props.onClose}>
                {!isPreview ? c('Add Filter Modal').t`Custom Filter` : c('Add Filter Modal').t`Custom Filter (Preview)`}
            </HeaderModal>

            <ContentModal onSubmit={noop} loading={loading}>
                {type === 'complex' && !isPreview ? (
                    <InnerModal>
                        <Row>
                            <Label htmlFor="accountName">{c('New Label form').t`Name`}</Label>
                            <Input
                                id="accountName"
                                type="text"
                                value={model.Name}
                                onInput={handleInputName}
                                placeholder={c('New Label form').t('Name')}
                                required
                            />
                        </Row>
                        <SieveEditor
                            filter={filterModel}
                            onChange={handleChangeSieve}
                            onChangeBeforeLint={handleChangeBeforeLint}
                        />
                    </InnerModal>
                ) : null}

                {type !== 'complex' && !isPreview ? (
                    <InnerModal>
                        <Row>
                            <Label htmlFor="accountName">{c('New Label form').t`Name`}</Label>
                            <Input
                                id="accountName"
                                type="text"
                                value={model.Name}
                                onInput={handleInputName}
                                placeholder={c('New Label form').t('Name')}
                                required
                            />
                        </Row>

                        <OperatorEditor filter={filterModel} onChange={handleChange('Operator')} />
                        <ConditionsEditor filter={filterModel} onChange={handleChange('Conditions')} />
                        <ActionsEditor filter={filterModel} onChange={handleChange('Actions')} />
                    </InnerModal>
                ) : null}

                {isPreview ? (
                    <InnerModal>
                        <PreviewFilter filter={model} />
                    </InnerModal>
                ) : null}

                {isPreview ? (
                    <FooterModal>
                        <Button type="button" onClick={handleClickPreview}>{c('Action').t`Back`}</Button>
                        <PrimaryButton disabled={loading} onClick={handleSubmit}>
                            {c('Action').t`Save`}
                        </PrimaryButton>
                    </FooterModal>
                ) : null}

                {!isPreview ? (
                    <FooterModal>
                        <Button onClick={props.onClose}>{c('Action').t`Close`}</Button>
                        {type !== 'complex' ? (
                            <Button type="button" className="mlauto mr1" onClick={handleClickPreview}>{c('Action')
                                .t`Preview`}</Button>
                        ) : null}
                        <PrimaryButton disabled={loading} onClick={handleSubmit}>
                            {c('Action').t`Save`}
                        </PrimaryButton>
                    </FooterModal>
                ) : null}
            </ContentModal>
        </Modal>
    );
}

AddFilterModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

AddFilterModal.defaultProps = {
    show: false,
    mode: 'create'
};

export default AddFilterModal;
