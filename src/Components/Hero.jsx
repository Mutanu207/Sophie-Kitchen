import { useState,useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
function Hero() {
    const [greeting, setGreeting] = useState("Sophie's Kitchen");
    useEffect(()=> {
        const interval= 
        setInterval(()=>{
            setGreeting(prev => prev === "Sophie's Kitchen" ? "Welcome" : "Sophie's Kitchen");},30000);
            return() =>{
                clearInterval(interval);
            };
    },[])
    return(
        <Box className="hero">
            <Typography component="h1" variant="h1"
                color="white" sx={{
                 fontSize: {md:"8rem",sm:"6rem",xs:"4rem"},
                 textAlign: "center",
                 p:0,
                fontWeight:"bold",
                fontFamily: 'serif',
                mb:3 }}>{greeting}</Typography> 
            <Typography component="p" variant="body2"
                sx={{
                color: "white",
                fontSize: {md:"2rem",sm:"1rem",xs:"0.5rem"},
                textAlign: "center",
                p:0,
                fontFamily:'serif',
                fontWeight:"bold",
                fontStyle:'italic',
                mt:4 }}>-Where every bite feels like home</Typography></Box>
    )
}
export default Hero; 