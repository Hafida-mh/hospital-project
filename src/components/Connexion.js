import React from 'react'
import './Connexion.css'
import axios from 'axios'
import { useState } from 'react'
import {
   BrowserRouter as Router,
    useHistory
 } from "react-router-dom";

export default function Connexion(props) {

   const [email, setEmail] = useState();
   const [passWord, setPassWord] = useState();
   const [allData, setAllData] = useState([]);
   
   const history = useHistory();

   const loginUser = async (e) => {
      e.preventDefault();
      try {
         const { data } = await axios.get(`http://localhost:2000/user/info`);
         console.log(data);

         if (email && passWord) {
            const verification = data.data.find((elem) => elem.email == email && elem.password == passWord);
            if (verification) {
              history.push("/Map")
               
            }
            else {
               alert('try to register');
            }
         }

         else {
            alert('remplissez les champs vides')
         }
      } catch (error) {
         console.log(error);
      }
   }




   return (
      <div className="Connexion">
         <div className="form-container">
            <form className="form">

               <input type="email" placeholder="entrer adresse mail" onChange={(e) => setEmail(e.target.value)} value={email} />
               <input type="password" placeholder="entrer mot de passe" onChange={(e) => setPassWord(e.target.value)} value={passWord} />

               <input type="submit" value="Connexion" className="buttonSubmit" onClick={(e) => loginUser(e)} />

            </form>
         </div>
      </div>
   )
}
