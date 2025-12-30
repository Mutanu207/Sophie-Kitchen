import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
export default function Contact(){
    return(
        <Box py={6}>
            <Container maxWidth="md">
               <Typography variant="h4" 
                            gutterBottom 
                            sx={{fontFamily: 'serif',
                                 fontWeight: 'bold',
                                 color:'darkred' }}>
                            Contact us</Typography> 
            <Typography variant="body1">
                We'd Love to hear from you, reach out to us at:
                <br/> </Typography>
            </Container>
        </Box>
    )
}