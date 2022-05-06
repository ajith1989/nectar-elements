import React from "react";
import { FC } from "react";
import { TabProps } from "../utils/types";
import { Tab } from '@headlessui/react'
import cuid from "cuid";

/**
 * Tab Component
 */
export const Tabs: FC<TabProps> = ({ list, panels, direction = 'horizontal', defaultIndex = 0, selectedIndex, onTabChange }) => {

    return (
        <div className="w-full px-2 py-16 sm:px-0">
            <Tab.Group vertical={direction === 'vertical'} defaultIndex={defaultIndex} onChange={onTabChange} selectedIndex={selectedIndex}>
                <Tab.List className="flex space-x-1 rounded-xl bg-light p-1">
                    {list && list.map(item => (
                        <Tab key={cuid()} className={({ selected }) =>
                            `w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                      ${selected ? 'bg-gradient-to-tr from-primary to-secondary text-white shadow' : 'hover:text-primary'}
                    `}>{item}</Tab>))}
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {panels && panels.map(panel =>
                    (<Tab.Panel key={cuid()}
                        className="rounded-xl bg-light p-3 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                    >{panel}</Tab.Panel>))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};
