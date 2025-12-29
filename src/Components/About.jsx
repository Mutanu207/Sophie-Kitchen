import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
function About(){
    return(
      <Box sx={{background:'WhiteSmoke'}}>
<Container maxWidth="md" sx={{ my: 0, p: 5 }}>
        <Box>
          <Typography variant="h3" component="h2" gutterBottom sx={{ textAlign: 'center', mb: 3 , fontWeight: 'bold',color:'darkred' ,fontFamily: 'Serif' }}>
            About 
          </Typography>
          <Typography variant="body1" color="black" sx={{ lineHeight: 1.6 , textAlign: 'center',fontSize: '18px',fontFamily:'serif'}}>
           At Sophie’s Kitchen, every chapati folded and every mandazi fried,every food cooked always carries a piece of home. 
           We don’t just cook , we recreate the warmth of shared meals, the laughter of family, and the comfort of traditions passed down through generations. 
           Because here, every bite doesn’t just satisfy hunger,it tells a story, made with love, and meant to be remembered.
          </Typography>
        </Box>
    </Container>
    </Box>
    )
}
export default About;

