import React, {Component} from 'react';
import firebase from 'firebase';
import NormalUserDiv from '../NormalUsers/NormalUsers';
import AdmDiv from '../AdmUsers/AdmUsers';

const seletor = (props) =>{
        const isLoggedIn = props.login;
        return (
            <div>
            {isLoggedIn ? <NormalUserDiv/> : <AdmDiv/>};
            </div>
        );
}

export default seletor;