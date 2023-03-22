import React from "react";

function UserData({contacts}){
    

   
    

    return(
    <>  
        {
            contacts.map((contact)=>{
                const {id, name, email,} = contact;
                const {street, city, zipcode} = contact.address

                return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{street}, {city}, {zipcode}</td>
                    </tr>
                )

            })
        }
    </>
       
        
       

    );
};





export default UserData;

