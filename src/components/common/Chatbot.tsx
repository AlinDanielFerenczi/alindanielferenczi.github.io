import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'absolute',
            zIndex: 1,
        },
        button: {
            position: 'fixed',
            height: '3em',
            padding: '6px 16px',
            bottom: '2em',
            right: 0,
        }
    }),
);

const Chatbot= (props: ChatbotProps) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant="contained" color="primary" className={classes.button}>Open Chatbot</Button>
            <Dialog open={!props.isAuthenticated}>
                <DialogTitle id="simple-dialog-title">Sign in</DialogTitle>
                <div>
                    <List>
                        <ListItem button onClick={() => props.signIn()}>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: "#eee" }}>
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                        height="30"
                                        alt="G"
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Sign in with Google" />
                        </ListItem>
                    </List>
                </div>
            </Dialog>
        </div>
    )
}

export default Chatbot

type ChatbotProps = {
    isAuthenticated: boolean,
    signIn: () => void
}