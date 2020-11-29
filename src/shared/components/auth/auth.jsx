import React, { useState } from 'react';
import './auth.scss'

export const Auth = ({setSignInHandler,setSignUpHandler,onSubmit, textAuth, authTo, setAuthorizedAfterAuth}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = () => {
        if(email!=="" && password!==""){
            let isAuth = onSubmit(email, password);
            isAuth && setAuthorizedAfterAuth();
        }
    };

    const authHandler = authTo => authTo ==="SignIn" ? setSignUpHandler() : setSignInHandler() ;

    const onChangeEmail = ({currentTarget: {value}}) => setEmail(value);

    const onChangePassword = ({currentTarget: {value}}) => setPassword(value);

    return (
        <div className="auth">
            <h2>{textAuth}</h2>
            <div>
                <input type="text" id="email" placeholder="Email" onChange={onChangeEmail}/>
                <input type="password" id="password" placeholder="Password" onChange={onChangePassword}/>
            </div>
            <div>
                <button type="submit" onClick={()=>submitHandler()}>Submit</button>
                <button type="submit" onClick={()=>authHandler(authTo)}>{authTo}</button>
            </div>
        </div>
    )
};
