interface IconProps {
    size?: number;
    color?: string;
}

export type TypographyType = 'caption' | 'header' | 'title' | 'subtitle' | 'headline' | 'body' | 'text' | 'small' | 'tiny';
export type Theme = 'primary' | 'secondary' | 'accent1' | 'accent2' | 'success' | 'danger' | 'warning' | 'dark' | 'light';
export type Gradient = 'gradient1' | 'gradient2' | 'dark' | 'light';
export type Size = 'large' | 'medium' | 'small';
export type TrendType = 'up' | 'down';
export type Icon = (props: IconProps) => JSX.Element | null;