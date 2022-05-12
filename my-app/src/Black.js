import Container from '@mui/material/Container';
import React from 'react';
import Card from '@mui/material/Card';
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { CardActionArea, Grid } from '@mui/material';
function Black({ key, src }) {
    return (
        <Grid item xs={6} md={4} lg={2} >
            <Container >
                <Card key={key} sx={{ maxWidth:345}}>
                    <CardActionArea>
                        <InnerImageZoom CardMedia width={200} height={200} key={key} src={src} />
                    </CardActionArea>
                </Card>
            </Container>
        </Grid>
    )

}
export default Black;