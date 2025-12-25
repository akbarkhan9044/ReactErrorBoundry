

export const  ErrorHandler=({error,resetErrorBoundary})=>{
    return(
        <div role="alert">
            <pre>Something went wrong</pre>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Reset Me</button>
        </div>
    )
}