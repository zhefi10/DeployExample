import React, {useContext} from 'react';
import { UserContext } from './context';
import Card2 from './customCard';
import { auth } from '../config/firebase-conf';
import { Row } from "react-bootstrap";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

export default function User(){

    const {useState, useEffect} = React;
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState('');
    
    useEffect(()=>{
        console.log('inside useEffect')

        onAuthStateChanged(auth, usr => {
          usr ? setLogged(true) : setLogged(false);
          setUser(usr.email);

        })
    }, [])

    return(
        <div className="container content align-right">
            {logged ? (
              <Row>
              <div className='col-sm-12'>
              <h5>User: {user}</h5>
              </div>
              </Row>
                 
            ) : ( 
            <Row>
              <div className='col-sm-12'>
                <span></span>
              </div>
            </Row>
               )}
        </div>
    );
}

