import React from 'react'
import Styl from '../components/Inscription.css'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom"

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Inscription() {

    const [email, setEmail] = useState();
    const [passWord, setPassWord] = useState();
    const [passWordValidation, setPasswordValidation] = useState();
    const [arr, setArr] = useState([]);

    const handleInfo = async () => {
        if (email && passWord && passWordValidation) {
            setArr([{
                email: email,
                password: passWord,
                passwordValidation: passWordValidation
            }])

            return  await axios.post('http://localhost:2000/user', {
                body : JSON.stringify(arr),
                Headers : {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => console.log(arr))

         
/*
            if(arr[0].password != arr[0].passwordValidation) {
                alert('mots de pass non identiques')
            };
*/
       /*  await  axios.post('http://localhost:2000/user/signup', arr)
         console.log(arr) */
           


        }
else {
    alert('champs vides');
}
    }
    

    useEffect(() => {
        handleInfo();
    }, [])


    return (
        <div className="Inscription">

            <div className="form-container">

                <form className="form" onSubmit={(e) => e.preventDefault()}>

                    <input type="email" placeholder="entrer adresse mail" className="emailAdress" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder="entrer mot de passe" className="passWord" onChange={(e) => setPassWord(e.target.value)} value={passWord} />
                    <input type="password" placeholder="confirmer mot de passe" className="passWordValidation" onChange={(e) => setPasswordValidation(e.target.value)} value={passWordValidation} />
                    <button onClick={(e) => {
                        handleInfo(e);
                        console.log(arr);
                    }
                    }> Envoyer </button>

                </form>
                <Link to={'/connexion'}>
                    <p> Connexion  </p>
                </Link>

            </div>
        </div>
    )



}
