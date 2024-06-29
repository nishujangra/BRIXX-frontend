import MainLayout from '../../components/MainLayout';
import React from 'react'
import TechnicalEvents from './container/TechnicalEvents';
import CulturalEvents from './container/CulturalEvents';

const EventPage = () => {
    return (
        <MainLayout>
            <TechnicalEvents />
            <CulturalEvents ></CulturalEvents>
        </MainLayout>
    )
}

export default EventPage
