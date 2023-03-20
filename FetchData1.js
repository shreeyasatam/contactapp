import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";


function FetchData(props) {
    const [contacts, setContacts] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response)
            setContacts(response.data)

        })
        .catch(err =>{
            console.log(err)
        })

    }, [])

    return(
        <div className="ui celled list">
            <div className="item">
             
                <div className="content">
                     <ul>
                        {
                            contacts.map((contact) => {
                            <li key={contact.id}>{contact.name}{contact.username}{contact.email}</li>

                             })}
                
                
                    </ul>                   
             

                 

                 </div>

            </div>

        </div>
        
       

    )
    
}


export default FetchData;

