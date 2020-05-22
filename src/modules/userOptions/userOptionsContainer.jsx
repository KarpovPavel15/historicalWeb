import React, { useEffect } from 'react';
import { setLanguageListRequestAction } from 'modules/userOptions';
import { useDispatch, useSelector } from 'react-redux';
import { UserOptions } from './component';

export default function UserOptionsContainer() {
    const dispatch = useDispatch();
    const {languages} = useSelector(state => state);

    useEffect(() => {
        dispatch(setLanguageListRequestAction());
    }, []);

    return <UserOptions languages={languages}/>


};
