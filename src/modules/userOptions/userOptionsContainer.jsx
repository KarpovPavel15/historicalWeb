import React, { useEffect } from 'react';
import { setWorkersRequestAction, UserOptions } from 'modules/userOptions';
import { useDispatch, useSelector } from 'react-redux';

export default function UserOptionsContainer() {
    const dispatch = useDispatch();
    const {languages} = useSelector(state => state);
    
    useEffect(() => {
        dispatch(setWorkersRequestAction());
    }, []);

    return <UserOptions languages={languages}/>


};
