import * as React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Typography, Container, Card, CardContent, CardMedia, Box} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


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

const CardThin = styled(Card) ({
    boxShadow: 'none',
    border: '1px solid black',
    borderRadius: '25px',
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
        <CardThin sx={{ display: 'flex'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1">
                    Art Reach Cambodia (ARC)
                </Typography>
                <Typography variant="overline">
                    UX/UI, Web Development, Project Management
                </Typography>
                <Typography variant="body1">
                    Art Reach Cambodia (ARC) is an online platform hosting media materials such as documentaries, virtual galleries to international audience, to showcase Khmer artists' works.
                </Typography>
            </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ display: {xs:'none', sm: 'block'}}}
                image={require('./projectArc1.jpg')}
                alt="Mobile application wireframes"
            />
        </CardThin>
        
        <CardThin sx={{ display: 'flex', marginTop: '1rem'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1">
                    SmallSteps
                </Typography>
                <Typography variant="overline">
                    UX/UI
                </Typography>
                <Typography variant="body1">
                 SmallSteps is a habit-building application inspired by the works of Charles Duhigg (Author of The Power of Habit) and James Clear (Author of Atomic Habits) using Figma.
                </Typography>
            </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ display: {xs:'none', sm: 'block'}}}
                image={require('./smallsteps.jpg')}
                alt="Mobile application wireframes"
            />
        </CardThin>
        <CardThin sx={{ display: 'flex', marginTop: '1rem'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography variant="subtitle1">
                    Spring Valley Friends
                </Typography>
                <Typography variant="overline">
                    UX/UI
                </Typography>
                <Typography variant="body1">
                This is an application to assist users on calculating tax payment for the use of indigenous land and water sources for Spring Valley Friends, a non-profit organization in Minnesota
                </Typography>
            </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ display: {xs:'none', sm: 'block'}}}
                image={require('./springvalleyfriends.jpg')}
                alt="Mobile application wireframes"
            />
        </CardThin>
    </ThemeProvider>
  );
}
