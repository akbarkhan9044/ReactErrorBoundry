import React, { useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';

function ErrorHandler({error,resetErrorBoundary}){
    return(
        <div role='alert'>
            <pre>An error has occurred</pre>
            <p style={{
                color:"red"
            }}>{error.message}</p>
            <button 
            style={{
                border:"none",
                outline:"none",
                background:"red",
                color:"white",
                padding:"10px"

            }}
            onClick={resetErrorBoundary}>Reset Error </button>
        </div>
    )

}

function City({name}){
    return(
        <div>
            <h1>Welcome to city {name}</h1>
        </div>
    )
}

function Country({name}){
    return(
        <div>
            <h1>Welcome to Country {name.toUpperCase()}</h1>
        </div>
    )
}
export default function Home() {
const [country,setCountry]=useState(null);


    const handleError=(error,info)=>{
        console.log("Information of error",info);
        console.log("Error is happening",error);
    }
  return (
    <div>
      Hi Welcome to Home
      <h1>Welcome to List of City</h1>
      <ErrorBoundary FallbackComponent={ErrorHandler}
      onError={handleError}
      onReset={()=>{
        setCountry("India")
      }}
      >
        <City name="London"  />
        <Country name={country} />
      </ErrorBoundary>
      <Link to="/user">User</Link>
      <Link to="/show">Show</Link>
      <h1>Welcome to List of Country</h1>
    </div>
  )
}
