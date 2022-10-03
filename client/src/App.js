import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from "./images/memories.png"
import Posts from "./component/Posts/Posts";
import Form from "./component/Form/Form";
import './App.css'

const App = () => {

    // const classes = useStyle()

    return (<Container maxWidth="lg">
        {/* <AppBar className={classes.AppBar} position="static" color="inherit"> */}
        <AppBar className="appBar" position="static" color="inherit">
            <Typography className="heading" variant="h2" align="center">
                Memories
            </Typography>
            <img className="image" style={{marginLeft:"15px"}} src={memories} alt="memories" height="60" ></img>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    )
}

export default App