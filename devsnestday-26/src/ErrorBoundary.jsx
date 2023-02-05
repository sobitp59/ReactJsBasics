import React from 'react';



class ImplementErrorBoundary extends React.Component {
    state = {
        error : null
    }

    static getDerivedStateFromError(error){
        return {error}
    }

    render(){
        const { error } = this.state;
        if(error){
            return (
               <this.props.FallbackComponent error={error}/>
            )
        }
        return this.props.children
    }
}

const FallbackComponent = ({error}) => {
    return (
        <div>
            <p className='error'>Something went wrong!</p>
            <p>{error.message}</p>
        </div>
    )
}

const AnotherComp = () => {
    return <p>I am an another component</p>
}


const ErrorComp = () => {
    const [count, setCount] = React.useState(1)
    const handleClick = () => {
        setCount(prev => {
            if(prev >= 2){
                throw new Error('BOOM 🎇, an ERROR OCCURED')
            }
            return prev + 1
        })
    }
    
    return (
    <div>
        <button onClick={handleClick}>{count}</button>
    </div>
    )
}

const ErrorBoundary = () => {
    return(
        <>  
            <ImplementErrorBoundary FallbackComponent={FallbackComponent}>
                <ErrorComp />
            </ImplementErrorBoundary>
            <AnotherComp />
        </>
    )
}

export default ErrorBoundary