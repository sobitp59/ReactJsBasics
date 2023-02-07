import React, { useState } from 'react'

const Quiz = () => {
    const [answer, setAnswer] = useState('')
    const [status, setStatus] = useState('typing')
    const [error, setError] = useState(null)
    
    if(status === 'success'){
        return <h1 className='success'>Congratulations! You are right</h1>
    }

    const handleTextArea = (e) => {
        setAnswer(e.target.value)
    }
    
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setStatus('submitting')
        try {
            await submitForm(answer)
            setStatus('success')
        } catch (error) {
            setStatus('typing')
            setError(error)
        }

    }
  
    return (
    <div>
        <h2>quiz mania</h2>
        <p>what is the name of the naruto's father? </p>
        <form onSubmit={handleFormSubmit}>
            <textarea
                value={answer}
                onChange={handleTextArea} 
                placeholder='enter your answer'
                disabled={status === 'submitting'}
            ></textarea>
            <br />
            <input type="submit" disabled={answer.length === 0 || status === 'submitting'}/>
           {error !== null && <p className='error'>{error.message}</p>}
        </form>
    </div>
  )
}

const submitForm = (answer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'minato'
            if(shouldError){
                reject( new Error('Good guess! But it is a wrong answer'))
            }else{
                resolve()
            }
        }, 1500)
    })
}



export default Quiz