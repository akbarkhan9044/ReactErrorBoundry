import React from 'react'
import { useEffect } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
export default function User() {
const {showBoundary}=useErrorBoundary();
    const fetchData=async()=>{
        try{
            throw new Error("Unable to fetch data of user");
        }catch(error){
            console.log(error);
            showBoundary(error);
        }
    }

  return (
    <div>
      <h1>Welcome to User</h1>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}
