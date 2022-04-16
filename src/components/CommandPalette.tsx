import React, { FC, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Search } from 'react-feather'
import { Input } from './Input';
import { Button } from './Button';
import { CommandPaletteProps } from '../utils/types';

/**
 * Command Palette Component
 */
export const CommandPalette: FC<CommandPaletteProps> = ({ onSearch }) => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)


    return (
        <div>
            <div onClick={openModal}>
                <Button icon={Search} theme='dark'>{`Search ⌘+K`}</Button>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={closeModal}
                >
                    <div className="min-h-screen px-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-dark/50" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block w-5/6 p-6 my-8 overflow-hidden text-left transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className='flex items-center space-x-2'>
                                    <div className='flex-grow'>
                                        <Input type='text' name='search' placeholder='Search Anything' register={() => { }} />
                                    </div>
                                    <Button onClick={onSearch} theme='primary' icon={Search}>Search</Button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};
