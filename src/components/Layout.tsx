import React, { FC, useState } from 'react';
import { ChevronLeft, ChevronRight, User } from 'react-feather';
import { LayoutProps } from './../utils/types';
import { Box } from './Box';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';
import { Spacer } from './Spacer';
import { Typography } from './Typography';

/**
 * Layout will be rendered based on Layout Type
 */
export const Layout: FC<LayoutProps> = ({ children, type = 'dashboard', meta, title, icon, userName, menuItems, contextItems }) => {

    const [showContext, setShowContext] = useState(true);

    function toggleContextMenu() {
        setShowContext(!showContext);
    }


    if (type === 'auth') return (
        <div className="flex h-screen">
            {meta}
            <div className='w-96 m-auto'>
                <Box>
                    <Typography
                        theme="light"
                        type="title"
                    >
                        {title}
                    </Typography>
                </Box>
                <Spacer size='large' />
                {children}
            </div>
        </div>
    )
    return (
        <div className="h-screen w-full flex items-start">
            {meta}
            <div className="w-16 h-screen bg-gradient-to-b from-primary to-secondary px-2 py-8 rounded-r-lg shrink-0">
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col space-y-4'>
                        <a href="/">
                            <div className={`flex items-center justify-center cursor-pointer`}>
                                <Typography type='title' theme='light'>{icon}</Typography>
                            </div>
                        </a>
                        <Menu type='vertical-collapsed' items={menuItems} />
                        <div className="flex flex-col items-center space-y-2">
                            <div className='transform -rotate-90 py-4 text-light text-xs'>{userName}</div>
                            <MenuItem icon={User} />
                            <div onClick={toggleContextMenu} className="w-full">
                                {showContext ? <MenuItem icon={ChevronLeft} /> : <MenuItem icon={ChevronRight} />}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            {showContext &&
                <div className="w-52 h-screen bg-light px-6 pb-8 pt-24 rounded-r-lg shrink-0">
                    <Menu type='vertical-expanded' items={contextItems} />
                </div>
            }
            <div className="p-4 h-screen flex-grow overflow-y-auto">
                {children}
            </div>
        </div>
    );
};
