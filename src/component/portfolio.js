import React from 'react';
import { m } from 'framer-motion';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Container, Typography, useTheme } from '@mui/material';
// components
import Image from '../../components/Image';
import { MotionViewport, varFade } from '../../components/animate';

import image1 from '../../assets/1.png';
import image2 from '../../assets/2.png';
import image3 from '../../assets/3.png';
import image4 from '../../assets/4.png';
import image5 from '../../assets/5.png';
import image6 from '../../assets/6.png';



const IMG = [image1, image2, image3, image4, image5, image6];

const RootStyle = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10),
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 520,
    margin: 'auto',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
        zIndex: 11,
        textAlign: 'left',
        position: 'absolute',
    },
}));

// ----------------------------------------------------------------------

export default function Portfolio() {
    const theme = useTheme();

    const isLight = theme.palette.mode === 'light';

    return (
        <RootStyle>
            <Container component={MotionViewport}>
                <ContentStyle>
                    <m.div variants={varFade().inUp}>
                        <Typography component="div" variant="overline" sx={{ mb: 2, color: 'text.disabled' }}>
                            clean & clear
                        </Typography>
                    </m.div>

                    <m.div variants={varFade().inUp}>
                        <Typography
                            variant="h2"
                            paragraph
                            sx={{
                                ...(!isLight && {
                                    textShadow: (theme) => `4px 4px 16px ${alpha(theme.palette.grey[800], 0.48)}`,
                                }),
                            }}
                        >
                            Beautiful, modern and clean user interfaces
                        </Typography>
                    </m.div>
                </ContentStyle>

                <Box sx={{ position: 'relative' }}>
                    {IMG.map((img, index) => (
                        <Box
                            key={index}
                            component={m.div}
                            variants={varFade().inUp}
                            sx={{
                                top: 0,
                                left: 0,
                                position: 'absolute',
                                ...(index === 0 && { zIndex: 8 }),
                                ...(index === IMG.length - 1 && { position: 'relative', zIndex: 9 }),
                            }}
                        >
                            <Image
                                disabledEffect
                                visibleByDefault
                                alt={`clean-${index + 1}`}
                                src={img}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </RootStyle>
    );
}