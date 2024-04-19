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

export function AboutPage() {
  return (
    <ThemeProvider theme={theme}>
<Container style={{marginTop:"2rem", marginBottom:"2rem"}} >
            <Typography variant="body1" gutterBottom>
                <Typography variant="subtitle1" gutterBottom>
                    I want to inspire people to believe in themselves passionately. 
                    I want to tell them nothing is impossible when you do so.
                </Typography>
                <Typography variant="body1">
                    <p>
                        Growing up in Phnom Penh, Cambodia, I was acutely aware of the 
                        socioeconomic disparities prevalent in my country, a reality mirrored 
                        in many developing nations worldwide. Witnessing the struggles within 
                        my own family and community ignited a deep-seated desire for change 
                        within me from a young age. As a teenager, I grappled with how I could 
                        make a meaningful difference, initially driven by a desire to alleviate 
                        my family's hardships. However, as I pursued opportunities for 
                        education abroad, I came to recognize the broader systemic issues at 
                        play, fueling my determination to be a catalyst for positive change in 
                        all the communities I belong to. 
                    </p>
                    <p>
                        Education emerged as a pivotal tool for shaping a brighter future for myself 
                        and extending support to my family. Yet, it was through unique educational 
                        opportunities that I discovered its transformative potential for others, 
                        particularly those in underprivileged positions. This realization solidified 
                        my commitment to championing educational initiatives both locally and globally, 
                        with a special focus on advocating for better access to education, 
                        especially for marginalized groups like women and girls. 
                    </p>
                    <p>
                        My journey into the realm of technology began during a gap year in Cambodia 
                        following my high school graduation from UWC ISAK Japan. Immersed in the 
                        Cambodian startup scene, I found myself working for a journalism startup 
                        affiliated with a venture capitalist firm. It was here that I encountered
                        Koompi, a technological startup endeavoring to develop Cambodia's first
                        laptop and operating system. Interacting with the passionate founders 
                        and self-taught software engineers at Koompi sparked a newfound confidence
                        in me. Their stories inspired me to pursue computer science, a field I 
                        had once deemed inaccessible, leading me to earn a B.A. in Computer 
                        Science from Carleton College.  
                    </p>
                    <p>
                        Simultaneously, my role as a content creator at the journalism startup 
                        provided me with invaluable insights into Cambodia's vibrant community 
                        of entrepreneurs, activists, environmentalists, and artists. Their 
                        resilience and innovative spirit breathed life into a narrative of hope
                        and progress, challenging my initial perceptions of my homeland. This
                        experience underscored the significance of advocating for the creative
                        industry as a potent cultural force that unites people and fosters
                        positive change.
                    </p>
                    <p>
                        Driven by a desire to amplify creative voices in Cambodia, especially those 
                        from marginalized communities, I created ARC (Art Reach Cambodia), 
                        a project harnessing the digital space to empower artists. 
                        This endeavor represents my commitment to fostering inclusivity and 
                        cultural expression, laying the groundwork for a more vibrant and 
                        equitable society.
                    </p>
                    <p>
                        Currently, I am dedicated to honing my technical skills and gaining 
                        valuable work experience to better serve the communities that have 
                        shaped me. My ultimate goal is to inspire hope in others striving 
                        to achieve their dreams, leveraging my own journey as a testament to the 
                        transformative power of unwavering passion and relentless determination.
                    </p>
                </Typography>
            </Typography>  
        </Container>
    </ThemeProvider>
);
}