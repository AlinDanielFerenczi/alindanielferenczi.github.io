import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { ThemeContext } from '../themes/ThemeProvider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        stickToBottom: {
            flexGrow: 1,
            width: '100%',
            position: 'fixed',
            bottom: '2em',
            height: '3em'
        },
        button: {
            height: '3em'
        }
    }),
);

const Footer = () => {
    const classes = useStyles();
    const setThemeName = useContext(ThemeContext);
    const [isNight, setNight] = useState(localStorage.getItem("appTheme") === "lightTheme" ? false : true);
    const [value, setValue] = React.useState('recents');

    return (
        <div className={classes.stickToBottom}>
            <Grid container>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => {
                                setThemeName(isNight ? "lightTheme" : "darkTheme");
                                setNight(!isNight);
                            }
                        }
                    >
                        Set {isNight ? "Light" : "Dark"} Theme
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer
