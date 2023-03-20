import React from "react";
import UserData from "./UserData";
import { useState } from "react";
import { useEffect } from "react";



function App() {
  const [contacts, setContacts] = useState([])

  const API = "https://jsonplaceholder.typicode.com/users"

  const fetchUsers = async (url)=> {
      try { 
          const res = await fetch(url);
          const data = await res.json();
          console.log(data)
          if (data.length > 0 ) {
              setContacts(data)
          }

      }catch(e){
          console.error(e)

      }
     
  }

  useEffect(()=>{
     fetchUsers(API)

  }, [])

  return(
      <div>
          
        
        <div>
          
           
              <div>
                   <table>
                      <thead>
                        <tr>                     
                          <th>ID</th>
                          <th>NAME</th>
                          <th>EMAIL</th>
                          <th>ADDRESS</th>
                        </tr>
                      </thead>
                      <tbody>
                          <UserData contacts={contacts} />
                      </tbody>
                   </table> 
              </div>                                                  
          
          </div>

      </div>
      
     

  )
  
}

export default App;
