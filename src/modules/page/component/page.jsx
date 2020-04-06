import React from 'react'
import { Header } from 'modules/header';
import { RootRoute } from 'rootRoutes';

export const Page = () => {
    return (
        <div>
            <Header/>
            <RootRoute/>
            <footer>footer</footer>
        </div>
    );
};
