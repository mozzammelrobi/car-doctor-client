import axios from "axios";
import { useEffect, useState } from "react";


const useNumber = () => {
    const [number,setNumber] = useState(0)
    useEffect(() => {
        axios.get('/getNumber')
        .then(res => {
            // console.log(res.data)
            setNumber(res.data)
        })
    },[])
    return number
};

export default useNumber;