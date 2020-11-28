import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider, useDispatch } from 'react-redux';
import { store } from 'store';
import Modal from 'react-modal';
import './style.scss';
import Firebase from 'firebase';

import { Page } from 'modules/page';
import { Auth } from 'shared/components/auth';

export default function App() {
    const customHistory = createBrowserHistory();
    const [isAuthorized, setAuthorized] = useState(false);
    const [isAnswer, setIsAnswer] = useState(false);
    const [isCheckedFirst, setIsCheckedFirst] = useState(false);
    const [isCheckedSec, setIsCheckedSec] = useState(false);
    const [isCheckedThird, setIsCheckedThird] = useState(false);
    const [isCheckedFour, setIsCheckedFour] = useState(false);
    const [hasAccount, setHasAccount] = useState(false);
    const [isSignIn, setSignIn] = useState(false);
    const [isSignUp, setSignUp] = useState(true);
    const db = Firebase.database();
    let [emailForEdit,setEmailForEdit] = useState("");


    const setAuthorizedAfterAuth = () => setAuthorized(!isAuthorized);
    const setSignInHandler = () => {
        setSignUp(!isSignUp);
        setSignIn(!isSignIn) ;
    };
    const setSignUpHandler = () => {
        setSignIn(!isSignIn);
        setSignUp(!isSignUp)  ;
    };

    const [modalIsOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const db = Firebase.database();
        console.log(db)
    }, []);

    function openModal() {
        setIsOpen(true);
    }

    const textAuth = {
        signIn: "SignIn",
        signUp: "SignUp",
    };

    const signUp = (email, password) => {
        Firebase.auth().createUserWithEmailAndPassword(email, password).then(() => setHasAccount(true));
        const currentEmail = email.split("@")[0];
        setEmailForEdit(currentEmail);
        db.ref("/users/"+ currentEmail).set({
            email: email,
            password: password,
            questionAnswers: [
                {"Узнать достопримечательности":false},
                {"Побывать в церквях":false},
                {"Активный отдых":false},
                {"Всего и понемножку":false},
                ]
        });
    };
    const signIn = (email, password) => Firebase.auth().signInWithEmailAndPassword(email, password);

    function closeModal() {
        setAuthorized(true);
        setIsOpen(false);
    }

    const checkboxHandler = email => {
        if(isCheckedFirst===false && isCheckedSec===false && isCheckedThird===false && isCheckedFour===false){
            console.error("Check someone")
        }else{
            db.ref("/users/"+ email).update({
                questionAnswers: [
                    {"Узнать достопримечательности":isCheckedFirst},
                    {"Побывать в церквях": isCheckedSec},
                    {"Активный отдых":isCheckedThird},
                    {"Всего и понемножку": isCheckedFour},
                ]
            });
            setIsAnswer(!isAnswer);
        }
        closeModal()
    };

    return (
        <Provider store={store}>
            <Router history={customHistory}>
                {
                    isAuthorized && isAnswer &&
                    <Page/>
                }
                {
                    !isAuthorized && <Modal
                        isOpen={modalIsOpen}
                        // onRequestClose={closeModal}
                    >
                        <div>
                            { isSignUp && <Auth setSignUpHandler={setSignUpHandler} setSignInHandler={setSignInHandler} hasAccount={hasAccount} onSubmit={signUp} signIn={signIn}
                                  setAuthorizedAfterAuth={setAuthorizedAfterAuth} textAuth={textAuth.signUp}
                                  authTo={textAuth.signIn}/>}
                            { isSignIn && <Auth setSignUpHandler={setSignUpHandler} setSignInHandler={setSignInHandler} hasAccount={hasAccount} onSubmit={signIn} signIn={signUp}
                                  setAuthorizedAfterAuth={setAuthorizedAfterAuth} textAuth={textAuth.signIn}
                                  authTo={textAuth.signUp}/>}
                        </div>
                    </Modal>
                }
                {
                    isAuthorized && !isAnswer &&
                    <Modal
                        isOpen={modalIsOpen}
                        // onRequestClose={closeModal}
                    >
                        <div className="table">
                            <h2>Для чего вы приехали в Гродно?</h2>
                            <tr className="table__elements">
                                <div>
                                    <th className="table__element">Узнать достопримечательности</th>
                                    <input type="checkbox" onChange={()=>setIsCheckedFirst(!isCheckedFirst)} defaultChecked={isCheckedFirst}/>
                                </div>
                                <div>
                                    <th className="table__element">Побывать в церквях/костелах</th>
                                    <input type="checkbox" onChange={()=>setIsCheckedSec(!isCheckedSec)} defaultChecked={isCheckedSec}/>
                                </div>
                                <div>
                                    <th className="table__element">Активный отдых</th>
                                    <input type="checkbox" onChange={()=>setIsCheckedThird(!isCheckedThird)} defaultChecked={isCheckedThird}/>
                                </div>
                                <div>
                                    <th className="table__element">Всего и понемножку</th>
                                    <input type="checkbox" onChange={()=>setIsCheckedFour(!isCheckedFour)} defaultChecked={isCheckedFour}/>
                                </div>
                            </tr >
                            <button onClick={()=>checkboxHandler(emailForEdit)}>Отправить</button>
                            {/*{resultRows}*/}
                            {/*<tfoot>*/}
                            {/*<tr>*/}
                            {/*    <td>chosen site name {this.state.site} </td>*/}
                            {/*    <td>chosen address {this.state.address} </td>*/}
                            {/*</tr>*/}
                            {/*</tfoot>*/}
                        </div>
                    </Modal>
                }
            </Router>
        </Provider>
    )
};
