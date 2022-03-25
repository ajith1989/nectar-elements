import React, { FC } from 'react';
import cuid from 'cuid';
import { Alert } from './Alert';
import { EMPTY_DATA, EMPTY_HEADER } from '../utils/messages';
import { TableProps } from '../utils/types';


/**
 * Box component wraps all box styles in the design system
 */
export const Table: FC<TableProps> = ({ headers, data }) => {

    if (data?.length <= 0) return <Alert showIcon theme="warning">{EMPTY_DATA}</Alert>

    if (headers?.length <= 0) return <Alert showIcon theme="warning">{EMPTY_HEADER}</Alert>

    return (
        <div role="table" className="shadow overflow-x-scroll rounded-lg">
            <table className="table-auto w-full">
                <thead className="text-left bg-gradient-to-r from-primary to-secondary text-light rounded-lg">
                    <tr>
                        {
                            headers?.length &&
                            headers.map(header => (
                                <th key={cuid()} className="p-4">{header}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.length &&
                        data.map((row, index) => (
                            <tr key={cuid()} className={`${index % 2 === 0 ? "bg-white" : "bg-light/50"} border-b border-primary/5 hover:text-primary hover:bg-primary/10`}>
                                {
                                    row?.length &&
                                    row.map(record => (
                                        <td key={cuid()} className="p-4">{record}</td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
