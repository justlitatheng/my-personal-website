import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography, Container} from '@mui/material';
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


export function WorkPage() {
  return (
    <ThemeProvider theme={theme}>
        <Container style={{marginTop:"2rem", marginBottom:"2rem"}}>
            <Typography variant="body1" gutterBottom>
                <Typography variant="subtitle1" gutterBottom>
                    I dream of creating spaces where technology, 
                    human interaction, and the arts intersect in 
                    innovative and meaningful ways.
                </Typography>
                <p>
                    I enjoy working in various areas. I code, I draw,
                    and make things, I also absolutely love project and 
                    product design and development. Here I want to show 
                    a plethora of my works, and present my whole self. 
                    I am a work in progress, and absolutely loves learning
                    from others. If you want to talk to me about my work,
                    or feel like a collaboration is in the future, please 
                    contact me!
                </p>
            </Typography> 

        </Container>
    </ThemeProvider>
  );
}
