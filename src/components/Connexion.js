 import React from 'react'
 import './Connexion.css'

 export default function Connexion() {
    return (
        <div className="Connexion">
                    <div className="form-container">
 <form className="form">

    <input type="email" placeholder="entrer adresse mail" />
    <input type="password" placeholder="entrer mot de passe" />
   
    <input type="submit" value="Connexion"  className="buttonSubmit"/>

 </form>
            </div>
        </div>
    )
 }
