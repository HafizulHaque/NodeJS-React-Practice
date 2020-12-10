import React, {useState, useEffect} from 'react'
import randomColor from 'randomcolor'

function App4(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('')

    useEffect(()=>{
        setColor(randomColor())
    }, [])

    useEffect(()=>{
        var intervalId = setInterval(() => {
            setCount(prevCount => prevCount+1)
        }, 1000)
        return () => {clearInterval(intervalId)}
    })

    return(
        <div style={{textAlign:'center'}}>
            <h1 style={{color: color}}>{count}</h1>
        </div>
        
    )
}

export default App4