import About from '../Components/About';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';
import Box from '@mui/material/Box';
import Contact from '../Components/Contact';
function Home() {
  return (
    <Box>
        <Box id="home">
            <Hero />
        </Box>
        <Box id="about">
            <About />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
        <Box>
          <Footer />
        </Box>
    </Box>
     

  );
}export default Home;