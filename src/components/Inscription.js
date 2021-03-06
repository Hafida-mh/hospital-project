import React from 'react'
import Styl from '../components/Inscription.css'
import ReactDom from 'react-dom'
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
    const [users, setUsers] = useState([""]);
   

    const handleUserInfo = async (e) => {
     e.preventDefault();


     try {
     if(email && passWord && passWordValidation) {
        const { data } = await axios.post(`#user`, {
            userEmail : email,
            userPassword : passWord,
            userPassWordValidation : passWordValidation
        });
      
        
     setUsers([...users,{
            userEmail : data.data.userEmail,
            userPassword : data.data.userPassword,
            userPassWordValidation : data.data.userPassWordValidation
        }

     ])



     console.log(users);
     } 
  } catch (error) {
      console.log(error);
  } }
   
   


  /*  const newuser = []
arr && newuser  = {email : arr.email}
   */ 


    /*
 const handleInfo =  () => {
        if (email && passWord && passWordValidation) {

            let dataa = {
                "email" : email,
                "password" : passWord,
                "passwordValidation" : passWordValidation
            }

        
            setArr([{
                email: email,
                password: passWord,
                passwordValidation: passWordValidation
            }])

 console.log(dataa); 

            return axios.post('http://localhost:2000/user/', {
                body : JSON.stringify(dataa),
                Headers : {
                    'Content-Type' : 'application/json'
                }
            })
            .then(res => res)
            .catch(err => {
              console.log(err);
            })
         
          



            if(arr[0].password != arr[0].passwordValidation) {
                alert('mots de pass non identiques')
            };

     await  axios.post('http://localhost:2000/user/signup', arr)
         console.log(arr)
     



        }
else {
    alert('champs vides');
}
    }
    */
     






    /*
    useEffect((e) => {
        handleInfo(e)
    }, [])

*/




    return (
        <div className="Inscription">

            <div className="form-container">

                <form className="form" onSubmit={(e) => e.preventDefault()}>

                    <input type="email" placeholder="entrer adresse mail" className="emailAdress" onChange={(e) => setEmail(e.target.value)} value={email} />
                    <input type="password" placeholder="entrer mot de passe" className="passWord" onChange={(e) => setPassWord(e.target.value)} value={passWord} />
                    <input type="password" placeholder="confirmer mot de passe" className="passWordValidation" onChange={(e) => setPasswordValidation(e.target.value)} value={passWordValidation} />
                    <button onClick={(e) => {
                        handleUserInfo(e);
                        
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
