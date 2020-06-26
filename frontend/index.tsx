import {initializeBlock, useBase, useRecords, Box, Text } from '@airtable/blocks/ui';
import React from 'react';
import {margin} from "@airtable/blocks/dist/types/src/ui/system";

const HelloWorldTypescriptBlock = () => {
    const base = useBase();
    const table = base.getTableByName('Ansatt');
    const records = useRecords(table);

    const bekkere = records.map(record => {
        return (
            <div key={record.id}>
                {record.name || 'Tom record'}
            </div>
        );
    });

    return (
        <div>
            <h1>Bekkerne våre: ✋ </h1>
            <hr/>
            <div>{bekkere}</div>
        </div>
    );
};

initializeBlock(() => <HelloWorldTypescriptBlock />);
