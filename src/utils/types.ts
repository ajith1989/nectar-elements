import { HTMLAttributes, MouseEventHandler, ReactChild } from "react";
import { DirectionTypes, GradientTypes, InputTypes, LayoutTypes, ListTypes, MenuTypes, RatingTypes, Sizes, ThemeTypes, TrendTypes, TypographyTypes, WeatherConditions } from "./enums";

/** Alert */
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    /** Alert child can be a String */
    children: string;
    /** Optional. Specifies the Alert theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. To show or hide icon */
    showIcon?: boolean;
    /** Loading State */
    loading?: boolean;
}

/** Avatar */
export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    /** Text inside Avatar component */
    children?: string;
    /** Optional. Specifies rounded box or rectangular box for Avatar */
    rounded?: boolean;
    /** Optional. Specifies the Avatar theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. Icon instead of text for the Avatar component */
    icon?: Icon;
    /** Loading State */
    loading?: boolean;
}

/** Badge */
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Optional. Number inside Avatar component */
    count?: number;
    /** Optional. Specifies the Badge theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. Icon instead of text for the Badge component */
    icon?: Icon;
    /** Loading State */
    loading?: boolean;
}

/** Box */
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    /** Box child can be a React Node or a String */
    children: ReactChild | string;
    /** Optional. Specifies the Box gradient defined in the design system */
    gradient?: GradientTypes;
    /** Loading State */
    loading?: boolean;
}

/** Breadcrumbs */
export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
    /** Input data to build Breadcrumbs */
    items: Array<{
        label: string,
        link?: string
    }>
}

/** Button */
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Text inside button component */
    children: string;
    /** Optional. Converts button to ghost mode */
    ghost?: boolean;
    /** Optional. Specifies the button theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. Prefix icon before the button component */
    icon?: Icon;
    /** Loading State */
    loading?: boolean;
}

/** Command Palette */
export interface CommandPaletteProps extends HTMLAttributes<HTMLDivElement> {
    /** Search Function */
    onSearch?: ()=>void;
}

/** Counter */
export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
    /** Optional. Icon for Counter */
    icon?: Icon;
    /** Optional. Specifies the label for counter */
    label: string;
    /** Optional. Count for counter */
    count: number;
    /** Optional. Specifies the Counter theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. With or without border */
    border?: boolean;
    /** Loading State */
    loading?: boolean;
}


/** HyperLink */
export interface HyperlinkProps extends HTMLAttributes<HTMLAnchorElement> {
    /** Label for which hyperlink is to be applied */
    label: string;
    /** Optional. Hyperlink Url */
    link?: string;
    /** Optional. To show or hide icon */
    showIcon?: boolean;
}

/** Input */
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    /** Specifies Input type */
    type: InputTypes,
    /** Label for Input Component */
    label?: string,
    /** Placeholder for Input Component */
    placeholder?: string,
    /** Name variable for Input Component */
    name: string,
    /** Specifies required or not validation */
    required?: boolean,
    /** Min number count */
    min?: number,
    /** Max number count */
    max?: number,
    /** Min Length count */
    minLength?: number,
    /** Max Length count */
    maxLength?: number,
    /** Validation Reg Expression */
    pattern?: string,
    /** Specifies disabled or not */
    disabled?: boolean,
    /** Register function of react hook form */
    register: Function,
    /** Options for input component */
    options?: string[],
    /** Specifies multiple or not */
    multiple?: boolean,
    /** Direction */
    direction?: DirectionTypes;
}

/** Layout */
export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    /** Content part of Layout component */
    children: ReactChild;
    /** Layout Type */
    type: LayoutTypes;
    /** Icon to be showed in the menu */
    icon?: string;
    /** Icon to be showed in the menu */
    title?: string;
    /** Icon to be showed in the menu */
    menuItems?: Array<{
        label?: string,
        link?: string,
        onClick?: React.MouseEventHandler<HTMLDivElement>,
        active: boolean,
        icon: Icon
    }>;
    /** Icon to be showed in the menu */
    contextItems?: Array<{
        label?: string,
        link: string,
        active: boolean,
        icon?: Icon
    }>;
    /** Username shown on collapsed menu */
    userName?: string;
    /** Footer Title for Dashboard Layout */
    footerTitle?: string;
    /** Footer Description for Dashboard Layout */
    footerDescription?:string;
    /** Show Context Menu in Dashboard Layout */
    showContext?:boolean;
    /** Hide Context Toggle Menu in Dashboard Layout */
    disableContextSwitch?: boolean,
    /** Additional Action inside Context Menu of Dashboard Layout */
    action?: ReactChild;
    /** Page Header Component */
    pageHeader?: ReactChild
}

/** List */
export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    /** List Title */
    title: string;
    /** Optional. List SubTitle */
    subTitle?: string;
    /** Optional. List Description */
    description?: ReactChild | string;
    /** Optional. List Tag */
    tag?: string;
    /** Optional. Tag Theme */
    tagTheme?: ThemeTypes;
    /** Optional. List footer */
    footer?: ReactChild | string;
    /** Thumbnail Image Component */
    image?: ReactChild;
    /** Optional. Specifies the list theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. Prefix icon before the list component */
    icon?: Icon;
    /** Optional. Prefix icon before the list component */
    layout?: ListTypes;
    /** List Link */
    link?: string;
    /** Clickable or not */
    clickable?: boolean;
    /** Loading State */
    loading?: boolean;
}

/** Loader */
export interface LoaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Message */
    message?: string;
}

/** Menu */
export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
    /** Type of Menu */
    type?: MenuTypes;
    /** Menu Items */
    items: Array<{
        onClick?: React.MouseEventHandler<HTMLDivElement>,
        label?: string,
        link?: string,
        active: boolean,
        icon?: Icon
    }>;
    /** Loading State */
    loading?: boolean;
}

/** Menu Item */
export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
    /** Active Item or not */
    active?:boolean;
    /** Action component inside Menu. Only for Expanded Menu */
    icon?: Icon
}

/** Modal */
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Wrapper */
    children:ReactChild;
    /** Component inside Modal */
    content:ReactChild;
    /** Modal Title */
    title?: string,
    /** Additional Component */
    extra?: ReactChild;
    /** Open or Close State */
    open?: boolean;
    /** Function to open modal. Set open state to true */
    openModal?: MouseEventHandler<HTMLDivElement> | undefined;
    /** Function to close modal. Set open state to false */
    closeModal: (value: boolean) => void;

}

/** Page Header */
export interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
    /** Title */
    title: string;
    /** Right Side Components */
    extra?: Array<ReactChild>;
    /** Show or Hide Back Button */
    showBackButton?: boolean;
    /** Loading State */
    loading?: boolean;
}

/** Progress */
export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
    /** Optional. Label for Progress component */
    label?: string;
    /** Optional. Percent number for Progress component */
    percentage?: number;
    /** Optional. Specifies the Progress theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. To show or hide percentage */
    showPercentage?: boolean;
   /** Loading State */
   loading?: boolean;
}

/** Quote */
export interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
    /** Quote child can be a React Node or a String */
    children: ReactChild | string;
    /** Optional. Specifies the Quote gradient defined in the design system */
    gradient?: GradientTypes;
    /** Optional. Specifies the Quote font size defined in the design system */
    size?: Sizes;
}

/** Rating */
export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
    /** Rating Value */
    value: number;
    /** Rating Type */
    type: RatingTypes;
}

/** Spacer */
export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
    /** Size for Spacer */
    size: Sizes;
}

/** Tab */
export interface TabProps extends HTMLAttributes<HTMLDivElement> {
    /** Tab List */
    list: string[];
    /** Panel List */
    panels: ReactChild[];
    /** Direction */
    direction?: DirectionTypes;
    /** Default Index */
    defaultIndex?: number;
    /** Selected Index */
    selectedIndex?: number;
    /** On Tab Change */
    onTabChange?: ((index: number) => void) | undefined
}

/** Table */
export interface TableProps extends HTMLAttributes<HTMLDivElement> {
    /** Header Columns */
    headers: string[];
    /** Data Columns */
    data: string[][];
    /** Loading State */
    loading?: boolean;
}

/** Tag */
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    /** Text inside tag component */
    children: string;
    /** Optional. Specifies the tag theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. Prefix icon before the tag component */
    icon?: Icon;
    /** Loading State */
    loading?: boolean;
}

/** Thumbnail */
export interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
    /** Thumbnail Title */
    title?: string;
    /** Thumbnail Description */
    description?: string;
    /** Thumbnail Tag */
    tag?: string;
    /** Thumbnail Image Component */
    image?: ReactChild;
    /** Thumbnail Link */
    link?: string;
    /** Clickable or not */
    clickable?: boolean;
    /** Loading State */
    loading?: boolean;

}

/** Timeline */
export interface TimelineProps extends HTMLAttributes<HTMLDivElement> {
    /** Timeline Items */
    items: Array<
        {
            time: string,
            title: string,
            description: string
        }
    >;
    /** Loading State */
    loading?: boolean;
}

/** Toggle */
export interface ToggleProps extends HTMLAttributes<HTMLElement> {
    /** Optional. Label for Toggle component */
    label?: string;
    /** Optional. Specifies checked state of Toggle component */
    checked?: boolean;
    /** Optional. Specifies the button theme defined in the design system */
    theme?: ThemeTypes;
}

/** Tooltip */
export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
    /** Component being wrapped for Tooltip */
    children: ReactChild;
    /** Optional. Hyperlink Url */
    message: string;
}

/** Trend */
export interface TrendProps extends HTMLAttributes<HTMLDivElement> {
    /** Icon */
    icon?: Icon;
    /** Label */
    label: string;
    /** Meta Information */
    meta: string;
    /** Count */
    count: number;
    /** Theme */
    theme?: ThemeTypes;
    /** Border State */
    border?: boolean;
    /** up or down states */
    trend?: TrendTypes;
    /** Extra content */
    extra?: string;
    /** Loading State */
    loading?: boolean;
}

/** Typography */
export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
    /** Typography child can be a React Node or a String */
    children: ReactChild | string;
    /** Optional. Specifies the typography theme defined in the design system */
    theme?: ThemeTypes;
    /** Optional. Prefix icon before the typography component */
    icon?: Icon;
    /** Optional. Specifies the typography type defined in the design system */
    type?: TypographyTypes
}

/** Upload */
export interface UploadProps extends HTMLAttributes<HTMLLabelElement> {
    /** Label */
    label?: string;
    /** Name */
    name?: string;
    /** Name */
    id?: string;
    /** Multiple Files */
    multiple?: boolean;
    /** Theme */
    theme?: ThemeTypes;
    /** Accepted file types */
    accept?: string;
    /** Direction */
    direction?: DirectionTypes;
}

/** Weather */
export interface WeatherProps extends HTMLAttributes<HTMLDivElement> {
    /** Current Temperature */
    temperature: number;
    /** Weather Location */
    location: string;
    /** Current Weather Condition */
    condition: WeatherConditions;
    /** Weather Unit */
    unit?: string;
    /** Loading State */
    loading?: boolean;
}

interface IconProps {
    size?: number;
    color?: string;
}

export type Icon = (props: IconProps) => JSX.Element | null;
