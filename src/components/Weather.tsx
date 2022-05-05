import React, { FC } from 'react';
import { Cloud, CloudDrizzle, CloudLightning, CloudRain, CloudSnow, Loader, Sun, Sunrise, Wind } from 'react-feather';
import { WeatherProps } from '../utils/types';

/**
 * Weather Widget
 */
export const Weather: FC<WeatherProps> = ({ temperature, location, condition, unit = '°C', loading = false }) => {

    if (loading) {
        return (
            <div className='flex items-center px-4 py-2 rounded-md bg-light space-x-2'>
                {React.createElement(Loader, { size: 16, className: 'animate-spin' })}
                <div className='h-6 w-1/2 bg-white rounded-sm animate-pulse' />
            </div>
        )
    }

    // 'drizzle' | 'lightning' | 'rain' | 'snow' | 'cloudy' | 'sunny' | 'storm'
    function renderWeatherIcon() {
        let icon = Sun;
        if (condition === 'drizzle') icon = CloudDrizzle
        if (condition === 'lightning') icon = CloudLightning
        if (condition === 'rain') icon = CloudRain
        if (condition === 'snow') icon = CloudSnow
        if (condition === 'cloudy') icon = Cloud
        if (condition === 'sunny') icon = Sunrise
        if (condition === 'storm') icon = Wind
        return React.createElement(icon, { size: 16 })
    }

    return (
        <div className='flex items-center px-4 py-2 rounded-md bg-light space-x-2'>
            {renderWeatherIcon()}
            <span className='flex items-center space-x-1 font-semibold'>{`${temperature}${unit}`}</span>
            <span className='text-primary text-xs'>{location}</span>
        </div>
    );
};

