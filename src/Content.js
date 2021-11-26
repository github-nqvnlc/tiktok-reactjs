import {useEffect ,useState} from "react"

function Content(){
   const [countdown, setCountdown] = useState(180)

   useEffect(() => {
       const timerId = setInterval(() => {
           setCountdown(countdown - 1)
       }, 1000)

       return () => clearInterval(timerId)
   }, [countdown])
    return(
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content