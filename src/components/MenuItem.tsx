import React, { FC } from 'react'
import { MenuItemProps } from '../utils/types'

/**
 * Menu Item for Expanded Menu
 */
export const MenuItem: FC<MenuItemProps> = ({ icon, active }) => {

    return (
        <div className={`w-full py-3 ${active ? 'bg-dark/40' : 'bg-dark/10'} rounded flex items-center justify-center text-white hover:bg-dark/50 cursor-pointer group`}>
            <div className='group-hover:animate-pulse'>{icon && React.createElement(icon, { size: 16 })}</div>
        </div>
    )
}
