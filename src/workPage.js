import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography, Container, Card, CardContent, CardMedia, Box} from '@mui/material';
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
        <Card sx={{ display: 'flex'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1">
                    Project 1
                </Typography>
                <Typography variant="overline">
                    Project type and subtitle
                </Typography>
                <Typography variant="body1">
                    This project is about ...
                </Typography>
            </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ display: {xs:'none', sm: 'block'}}}
                image={require('./projectArc1.jpg')}
                alt="Mobile application wireframes"
            />
        </Card>
        
        <Card sx={{ display: 'flex', marginTop: '1rem'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1">
                    Project 2
                </Typography>
                <Typography variant="overline">
                    Project type and subtitle
                </Typography>
                <Typography variant="body1">
                    This project is about ...
                </Typography>
            </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ display: {xs:'none', sm: 'block'}}}
                image={require('./projectArc1.jpg')}
                alt="Mobile application wireframes"
            />
        </Card>
        <Card sx={{ display: 'flex', marginTop: '1rem'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1">
                    Project 3
                </Typography>
                <Typography variant="overline">
                    Project type and subtitle
                </Typography>
                <Typography variant="body1">
                    This project is about ...
                </Typography>
            </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ display: {xs:'none', sm: 'block'}}}
                image={require('./projectArc1.jpg')}
                alt="Mobile application wireframes"
            />
        </Card>
    </ThemeProvider>
  );
}
