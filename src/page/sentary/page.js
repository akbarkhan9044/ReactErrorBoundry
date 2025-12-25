import React, { useState } from 'react'
import * as Sentry  from "@sentry/react";
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorHandler } from '../user/ErrorHandler';

function ErrorHandlerFunction({error,resetErrorBoundary}){
    return(
        <div role='alert'>
            <pre>Something went wrong</pre>
            <p>An error has occurred</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Reset</button>
        </div>
    )
}

function City({name}){
    return(
        <div>
            <h1>Hi Welcome to City {name.toLowerCase()}</h1>
        </div>
    )
}

function Country({name})
{
    return(
        <div>
            <h1>Hi Welcome to Country {name.toLowerCase()}</h1>
        </div>
    )
}

const LogErrors=(error,info)=>{
    Sentry.captureException(error,"error");
    Sentry.captureFeedback("User was checking testing application");
}




const fetchData=async()=>{
    try{
        const response=await fetch("someeeee");
        if(!response.ok){
            throw new Error("Something went wrong");
        }
        const res=await response.json();
        return res;
    }catch(error){
        console.log(error);
        Sentry.captureException(error);
    }
}


export default function ShowExample() {
    const [city,setCity]=useState(null);
    const[country,setCountry]=useState(null);
  return (
    <div>
      <h1>Hi Welcome to Test</h1>
      <ErrorBoundary FallbackComponent={ErrorHandlerFunction} onError={LogErrors}
      onReset={()=>{
        setCity("London");
        setCountry("India");
      }}
      >
        <City name={city}/>
        <Country name={country} />
      </ErrorBoundary>
      <div>
        <h3>Welcome to the Country</h3>
        <button onClick={fetchData}>FectchData</button>
      </div>
    </div>
  )
}
