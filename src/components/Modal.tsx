import React, { FC, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X } from 'react-feather'
import { ModalProps } from '../utils/types';

/**
 * Modal Component
 */
export const Modal: FC<ModalProps> = ({ children, title, content, extra, open = false, openModal, closeModal }) => {

    return (
        <div>
            <div onClick={openModal}>
                {children}
            </div>
            <Transition appear show={open} as={Fragment}>
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
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <div className='flex items-center justify-between'>
                                    {
                                        title && <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            {title}
                                        </Dialog.Title>
                                    }
                                    <div className='text-primary cursor-pointer text-xs bg-light rounded p-2 hover:text-dark' onClick={() => closeModal}>
                                        <X />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    {content}
                                </div>
                                {
                                    extra &&
                                    <div className="mt-6">
                                        {extra}
                                    </div>
                                }

                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};
