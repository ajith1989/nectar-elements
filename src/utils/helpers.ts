import { GradientTypes, Sizes, ThemeTypes, TypographyTypes } from "./enums";

export function getTypographyStyle(type: TypographyTypes) {
    if (type === 'text') return 'text-base';
    if (type === 'caption') return 'text-6xl font-bold';
    if (type === 'header') return 'text-5xl';
    if (type === 'title') return 'text-4xl font-bold';
    if (type === 'subtitle') return 'text-3xl';
    if (type === 'headline') return 'text-2xl font-bold';
    if (type === 'body') return 'text-xl font-semibold';
    if (type === 'small') return 'text-sm';
    if (type === 'tiny') return 'text-xs';
    return 'text-base'
}

export function getTypographyTheme(theme: ThemeTypes) {
    if (theme === 'dark') return "text-dark";
    if (theme === 'primary') return "text-primary";
    if (theme === 'secondary') return "text-secondary";
    if (theme === 'accent1') return "text-accent1";
    if (theme === 'accent2') return "text-accent2";
    if (theme === 'success') return "text-success";
    if (theme === 'danger') return "text-danger";
    if (theme === 'warning') return "text-warning";
    if (theme === 'light') return "text-light";
    return "text-dark";
}

export function getTypographyAlternateTheme(theme: ThemeTypes) {
    if (theme === 'dark') return "text-dark";
    if (theme === 'primary') return "text-primary";
    if (theme === 'secondary') return "text-secondary";
    if (theme === 'accent1') return "text-dark";
    if (theme === 'accent2') return "text-dark";
    if (theme === 'success') return "text-success";
    if (theme === 'danger') return "text-danger";
    if (theme === 'warning') return "text-dark";
    if (theme === 'light') return "text-dark";
    return "text-dark";
}

export function getButtonTheme(theme: ThemeTypes) {
    if (theme === 'primary') return "bg-primary text-light";
    if (theme === 'secondary') return "bg-secondary text-light";
    if (theme === 'accent1') return "bg-accent1 text-dark";
    if (theme === 'accent2')  return "bg-accent2 text-dark";
    if (theme === 'success') return "bg-success text-light";
    if (theme === 'danger') return "bg-danger text-light";
    if (theme === 'warning') return "bg-warning text-dark";
    if (theme === 'dark') return "bg-dark text-light";
    if (theme === 'light') return "bg-light text-dark";
    return "bg-primary text-light";
}

export function getGhostButtonTheme(theme: ThemeTypes){
    if(theme === 'primary') return "border-primary text-primary border-2";
    if (theme === 'secondary') return "border-secondary text-secondary border-2";
    if (theme === 'accent1') return "border-accent1 text-dark border-2";
    if (theme === 'accent2') return "border-accent2 text-dark border-2";
    if (theme === 'success') return "border-success text-success border-2";
    if (theme === 'danger') return "border-danger text-danger border-2";
    if (theme === 'warning') return "border-warning text-dark border-2";
    if (theme === 'dark') return "border-dark text-dark border-2";
    if (theme === 'light') return "border-light text-light border-2";
    return "border-primary text-primary border-2";
}

export function getFontSize(size:Sizes) {
    if (size === 'medium') {
        return 'text-4xl';
    }
    if (size === 'small') {
        return 'text-2xl';
    }
    return 'text-6xl'
}

export function getGradientStyle(gradient:GradientTypes){
    if( gradient === 'gradient1') return 'bg-gradient-to-r from-primary to-secondary';
    if( gradient === 'gradient2') return 'bg-gradient-to-r from-accent1 to-accent2';
    if(gradient === 'dark') return 'bg-gradient-to-r from-dark to-dark/80';
    if(gradient === 'light') return 'bg-gradient-to-r from-light to-light/50';
    return 'bg-gradient-to-r from-primary to-secondary';
}