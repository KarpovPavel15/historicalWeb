import React from 'react'
import { default as Header } from 'modules/header';
import { RootRoute } from 'rootRoute';

export const Page = () => {
    return (
        <div>
            <Header/>
            <RootRoute/>
            <footer>footer</footer>
        </div>
    );
};
