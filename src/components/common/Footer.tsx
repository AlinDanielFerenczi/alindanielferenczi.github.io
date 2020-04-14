import React, { useContext, useState } from 'react';
import { Button } from '@material-ui/core';
import { ThemeContext } from '../themes/ThemeProvider';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        stickToBottom: {
            width: '100%',
            position: 'fixed',
            bottom: 0
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
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setThemeName(isNight ? "lightTheme" : "darkTheme");
                        setNight(!isNight);
                    }
                    }
                >
                    Set {isNight ? "Light" : "Dark"} Theme
                </Button>
        </div>
    );
}

export default Footer
