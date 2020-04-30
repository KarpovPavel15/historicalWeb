import React, { useEffect } from 'react';
import { setLanguageListRequestAction, UserOptions } from 'modules/userOptions';
import { useDispatch, useSelector } from 'react-redux';

export default function UserOptionsContainer() {
    const dispatch = useDispatch();
    const {languages} = useSelector(state => state);

    useEffect(() => {
        dispatch(setLanguageListRequestAction());
    }, []);

    return <UserOptions languages={languages}/>


};
