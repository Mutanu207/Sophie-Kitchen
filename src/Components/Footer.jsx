import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
function Footer(){
    return(
        <Box sx={{background:"darkRed", p:5}} component="footer"> 
         <Typography variant="h5" component="h4"
          sx={{fontStyle:"italic", 
                fontFamily:"serif",
                fontSize:"12px", 
                color:"white",
                textAlign:{ xs:"center",sm:"right", md:"right"}}}>
            -Where every bite feels like home
         </Typography>
        </Box>

    )
} export default Footer;