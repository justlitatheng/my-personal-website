import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography, Button, Container} from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
    typography: {
        body1: {
            fontWeight: 300,
            textAlign: "left",
        },
        subtitle1: {
            fontSize: 25,
            textAlign: "left",
        },
        overline: {
            fontSize: 15,
            fontWeight: 300,
            textAlign: "left",
        },
    },
});

export function MainPage() {
  return (
    <ThemeProvider theme={theme}>
        <Container style={{marginTop:"2rem", marginBottom:"2rem"}}>
            <Typography variant="body1" gutterBottom>
                <Typography variant="subtitle1" gutterBottom>
                {/* A technologist with a flair for entrepreneurship, and a passion to do good. */}
                Technology + Design + Entrepreneurship + Social Impact 
                </Typography>
                <Typography variant="body1">
                    <p>
                    At the core of who I am lies a deep passion for technology and its capacity to drive positive change in society. 
                    My optimism and drive are the compasses that guide me. I believe in the power of technology as a force for good, 
                    blending the magic of art, the curiosity of science, and the possibilities of tech. My vision is to be a bridge 
                    between people and technology, demystifying the digital world and making it accessible and enjoyable for all. 
                    I dream of creating spaces where technology, human interaction, and the arts intersect in innovative and meaningful ways.
                    </p>
                </Typography>   
            </Typography>
            <Button sx={{
                fontWeight: 300,
                color: "black",
                border: 1,
                padding: 1,
                borderRadius: 3,
            }} href="https://drive.google.com/file/d/1WvjcXsPfbeFaKuranSTgC_ZEi26UGdN3/view?usp=sharing" target="_blank">Resume</Button>
        </Container>
    </ThemeProvider>
  );
}