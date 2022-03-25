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
export const Layout: FC<LayoutProps> = ({
    children,
    type = 'dashboard',
    title,
    icon,
    userName,
    menuItems,
    contextItems,
    footerTitle,
    footerDescription,
    showContext = true,
    disableContextSwitch = false,
    action
}) => {

    const [contextVisible, setContextVisible] = useState(showContext);

    function toggleContextMenu() {
        setContextVisible(!contextVisible);
    }

    /** Auth Layout */
    if (type === 'auth') return (
        <div className="flex h-screen">
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

    /** Dashboard Layout */
    return (
        <div className="h-screen w-full flex items-start">
            <div className="w-16 h-screen bg-gradient-to-b from-primary to-secondary px-2 py-8 rounded-r-lg shrink-0">
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col space-y-4'>
                        <a href="/">
                            <div className={`flex items-center justify-center cursor-pointer`}>
                                <Typography type='title' theme='light'>{icon}</Typography>
                            </div>
                        </a>
                        <Menu type='vertical-collapsed' items={menuItems} />
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <div className='transform -rotate-90 py-4 text-light text-xs'>{userName}</div>
                        <MenuItem icon={User} />
                        {!disableContextSwitch &&
                            <div onClick={toggleContextMenu} className="w-full">
                                {showContext ? <MenuItem icon={ChevronLeft} /> : <MenuItem icon={ChevronRight} />}
                            </div>}
                    </div>
                </div>
            </div>
            {contextVisible &&
                <div className="w-52 h-screen bg-light px-6 pb-8 pt-24 rounded-r-lg shrink-0">
                    <div className="flex flex-col justify-between h-full">
                        <div className='flex flex-col space-y-6'>
                            <Menu type='vertical-expanded' items={contextItems} />
                            {action}
                        </div>
                        <div className="flex flex-col space-y-1 opacity-60">
                            {footerTitle && <Typography type="headline" theme="dark">{footerTitle}</Typography>}
                            {footerDescription && <Typography type="tiny" theme="dark">{footerDescription}</Typography>}
                        </div>
                    </div>
                </div>
            }
            <div className="p-4 h-screen flex-grow overflow-y-auto">
                {children}
            </div>
        </div>
    );
};
