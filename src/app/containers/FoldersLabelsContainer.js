import React from 'react';
import { c } from 'ttag';
import { LabelsContainer } from 'react-components';

import Page from '../components/Page';

export const getLabelsPage = () => {
    return {
        text: c('Title').t`Folders/labels`,
        route: '/settings/labels',
        icon: 'folder-label',
        sections: [
            {
                text: c('Title').t`Folders and labels`,
                id: 'folderlist'
            }
        ]
    };
};

const FoldersLabelsContainer = () => {
    return (
        <Page config={getLabelsPage()}>
            <LabelsContainer />
        </Page>
    );
};

export default FoldersLabelsContainer;
