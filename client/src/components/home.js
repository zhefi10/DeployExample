import Card1 from './customCard';
import React, {useContext} from 'react';
import { UserContext } from './context';
import { auth } from '../config/firebase-conf';
import { onAuthStateChanged } from 'firebase/auth';

export default function Home(){
    const {data, setData} = useContext(UserContext);

    onAuthStateChanged(auth, (user) => {
        console.log('entered change')
        if (user) {
            const uid = user.uid;
            console.log(user);
            console.log(user.email);
            console.log('uid =', uid);     
            let data2 = data;
                data2.userLogged = user.email;
                setData(data2); 
                console.log(data);
                console.log(data2);
                return('yes');
        } else {
            console.log('User is not logged in');
        }
      });

    return(
        <div className="content">           
            <Card1 
                status=""
                bgcolor="light"
                txtcolor="black"
                header=""
                title="Welcome to Smart Bank"
                text="We help you build your heritage"
                body={(<img src="favicon.png" className="img-fluid" alt="Responsive image"/>)}
            />
        </div>
    );

}