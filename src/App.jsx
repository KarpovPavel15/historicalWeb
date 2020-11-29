import React, { useEffect, useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
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
    const [isError, setIsError] = useState(false);
    const db = Firebase.database();
    let [emailForEdit, setEmailForEdit] = useState("");
    const [stateQuestions, setStateQuestions] = useState(false);

    useEffect(() => {
        let user = localStorage.getItem('user');
        let currentUser = JSON.parse(user);
        if (currentUser && currentUser.hasOwnProperty('id')) {
            currentUser.questionAnswers.map(el => {
                if (el["Узнать достопримечательности"] === true) {
                    setAuthorized(true);
                    setIsAnswer(true)
                } else if (el["Побывать в церквях"] === true) {
                    setAuthorized(true);
                    setIsAnswer(true)
                } else if (el["Активный отдых"] === true) {
                    setAuthorized(true);
                    setIsAnswer(true)
                } else if (el["Всего и понемножку"] === true) {
                    setAuthorized(true);
                    setIsAnswer(true)
                }
            })
        }
    }, []);

    const setAuthorizedAfterAuth = () => setAuthorized(!isAuthorized);
    const setSignInHandler = () => {
        setSignUp(!isSignUp);
        setSignIn(!isSignIn);
    };
    const setSignUpHandler = () => {
        setSignIn(!isSignIn);
        setSignUp(!isSignUp);
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

    const getUsers = email => {
        const users = db.ref("/users/" + email);
        users.on('value', elem => elem.val().questionAnswers.map(el => {
            if (el["Узнать достопримечательности"] === true) {
                setStateQuestions(true);
                setIsAnswer(true);
            } else if (el["Побывать в церквях"] === true) {
                setStateQuestions(true);
                setIsAnswer(true);
            } else if (el["Активный отдых"] === true) {
                setStateQuestions(true);
                setIsAnswer(true);
            } else if (el["Всего и понемножку"] === true) {
                setStateQuestions(true);
                setIsAnswer(true);
            }
        }));
        users.on('value', elem => {
            return localStorage.setItem("user", JSON.stringify({
                id: elem.val().email,
                email: elem.val().email,
                password: elem.val().password,
                questionAnswers: elem.val().questionAnswers
            }));
        });
    };


    const signUp = (email, password) => {

        Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                console.log(result);
                setHasAccount(true)
            }).catch(function () {
            setIsError(true)
        });

        const currentEmail = email.split("@")[0];
        isError && setEmailForEdit(currentEmail);
        db.ref("/users/" + currentEmail).set({
            email: email,
            password: password,
            questionAnswers: [
                {"Узнать достопримечательности": false},
                {"Побывать в церквях": false},
                {"Активный отдых": false},
                {"Всего и понемножку": false},
            ]
        });
        return isError
    };
    const signIn = (email, password) => {
        Firebase.auth().signInWithEmailAndPassword(email, password);
        getUsers(email.split("@")[0]);
    };

    function closeModal() {
        setAuthorized(true);
        setIsOpen(false);
    }

    const checkboxHandler = email => {
        if (isCheckedFirst === false && isCheckedSec === false && isCheckedThird === false && isCheckedFour === false) {
            console.error("Check someone")
        } else {
            db.ref("/users/" + email).update({
                questionAnswers: [
                    {"Узнать достопримечательности": isCheckedFirst},
                    {"Побывать в церквях": isCheckedSec},
                    {"Активный отдых": isCheckedThird},
                    {"Всего и понемножку": isCheckedFour},
                ]
            });
            setIsAnswer(!isAnswer);
            const users = db.ref("/users/" + email);
            users.on('value', elem => {
                return localStorage.setItem("user", JSON.stringify({
                    id: elem.val().email,
                    email: elem.val().email,
                    password: elem.val().password,
                    questionAnswers: elem.val().questionAnswers
                }));
            });
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
                            {isSignUp && <Auth setSignUpHandler={setSignUpHandler} setSignInHandler={setSignInHandler}
                                               hasAccount={hasAccount} onSubmit={signUp} signIn={signIn}
                                               setAuthorizedAfterAuth={setAuthorizedAfterAuth}
                                               textAuth={textAuth.signUp}
                                               authTo={textAuth.signIn}/>}
                            {isSignIn && <Auth setSignUpHandler={setSignUpHandler} setSignInHandler={setSignInHandler}
                                               hasAccount={hasAccount} onSubmit={signIn} signIn={signUp}
                                               setAuthorizedAfterAuth={setAuthorizedAfterAuth}
                                               textAuth={textAuth.signIn}
                                               authTo={textAuth.signUp}/>}
                        </div>
                    </Modal>
                }
                {
                    !stateQuestions && isAuthorized && !isAnswer &&
                    <Modal
                        isOpen={modalIsOpen}
                        // onRequestClose={closeModal}
                    >
                        <div className="table">
                            <h2>Для чего вы приехали в Гродно?</h2>
                            <tr className="table__elements">
                                <div>
                                    <th className="table__element">Узнать достопримечательности</th>
                                    <input type="checkbox" onChange={() => setIsCheckedFirst(!isCheckedFirst)}
                                           defaultChecked={isCheckedFirst}/>
                                </div>
                                <div>
                                    <th className="table__element">Побывать в церквях/костелах</th>
                                    <input type="checkbox" onChange={() => setIsCheckedSec(!isCheckedSec)}
                                           defaultChecked={isCheckedSec}/>
                                </div>
                                <div>
                                    <th className="table__element">Активный отдых</th>
                                    <input type="checkbox" onChange={() => setIsCheckedThird(!isCheckedThird)}
                                           defaultChecked={isCheckedThird}/>
                                </div>
                                <div>
                                    <th className="table__element">Всего и понемножку</th>
                                    <input type="checkbox" onChange={() => setIsCheckedFour(!isCheckedFour)}
                                           defaultChecked={isCheckedFour}/>
                                </div>
                            </tr>
                            <button onClick={() => checkboxHandler(emailForEdit)}>Отправить</button>
                        </div>
                    </Modal>
                }
            </Router>
        </Provider>
    )
};
