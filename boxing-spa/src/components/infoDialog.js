import React from "react"
import { Button,TextField, withMobileDialog,Grid, Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle, CircularProgress} from "@material-ui/core"
import moment from 'moment'
import SnackbarComponent from './snackbar'
import { green, red, blueGrey } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    dialogOverlay: {
        backgroundColor: blueGrey[600],
        position: 'absolute',
        opacity: 0.9,
        zIndex: 2000,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    cssFocused: {
        // '&$cssFocused': {
        //     '&:after':{
        //     borderBottomColor: red[600]
        //     }
        //   } 
    },
    cssLabel: {
        '&$cssFocused': {
            color: red[700]
          }
         
    },
    cssUnderline: {
        '&$cssFocused': {
            '&:after':{
            borderBottomColor: red[700]
            },
          } 
    }

})
class infoDialog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            phoneNo: "",
            firstName: "",
            lastName: "",
            date: moment().add(1, 'days').format('YYYY-MM-DD'),
            time:"07:30",
            snackbarOpen: false,
            snackbarMessage:"",
            snackbarColor: {
                backgroundColor: null
            },
            loading: false
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };


    handleSnackbarClose = () => {
        this.setState({
            snackbarOpen: false
        });
    }

    makeTrialRequest = () => {
        this.setState({loading:true})
        fetch('http://shrouded-savannah-57355.herokuapp.com/api/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phoneNo: this.state.phoneNo,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            date: moment(this.state.date).format('Do MMMM YYYY'),
            time: this.state.time
        })
        })
        .then(res=>res.json())
        .then((res) => {
            this.setState({loading:false})
            this.props.close();

            setTimeout(() => {
                if(res.success){
                    this.setState((prevState) => ({
                        snackbarMessage:"The free trial request has been sent to one of the instructors.\n \nIf the time suits him he will get back",
                        snackbarOpen:true,
                        snackbarColor: {
                            backgroundColor: green[600]
                        }}))
                }
    
                else{
                    this.setState((prevState) => ({
                        snackbarMessage:"There seems to be an error!\n Please try again in a while",
                        snackbarOpen:true,
                        snackbarColor: {
                            backgroundColor: red[600]
                        }}))
    
                }
            }, 500);
           
            
        });
        

    }
    

    render(){
        return(
            <React.Fragment>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.close}
                    aria-labelledby="form-dialog-title"
                    fullScreen={this.props.fullScreen}
                >
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        For a free trial class please enter the following details
                        </DialogContentText>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="First Name"
                        onChange={this.handleChange('firstName')}
                        value={this.state.firstName}
                        InputLabelProps={{
                            classes: {
                              root: this.props.classes.cssLabel,
                              focused:this.props.classes.cssFocused,
                            },
                          }}
                        InputProps={{
                        classes: {
                            root: this.props.classes.cssUnderline,
                            focused:this.props.classes.cssFocused,
                        },
                        }}
                        fullWidth
                        />
                        <TextField
                
                        margin="dense"
                        id="name"
                        label="Last Name"
                        onChange={this.handleChange('lastName')}
                        value={this.state.lastName}
                        InputLabelProps={{
                            classes: {
                              root: this.props.classes.cssLabel,
                              focused:this.props.classes.cssFocused,
                            },
                          }}
                        InputProps={{
                        classes: {
                            root: this.props.classes.cssUnderline,
                            focused:this.props.classes.cssFocused,
                        },
                        }}
                        fullWidth
                        />
                        <TextField
                        margin="dense"
                        id="name"
                        label="Phone Number"
                        
                        onChange={this.handleChange('phoneNo')}
                        value={this.state.phoneNo}
                        InputLabelProps={{
                            classes: {
                              root: this.props.classes.cssLabel,
                              focused:this.props.classes.cssFocused,
                            },
                          }}
                        InputProps={{
                        classes: {
                            root: this.props.classes.cssUnderline,
                            focused:this.props.classes.cssFocused,
                        },
                        }}
                        fullWidth
                        />

                        <TextField
                        margin="dense"
                        id="date"
                        label="Date"
                        type="date"
                        onChange={this.handleChange('date')}
                        defaultValue={this.state.date}
                        InputLabelProps={{
                            classes: {
                              root: this.props.classes.cssLabel,
                              focused:this.props.classes.cssFocused,
                            },
                            shrink: true,
                          }}
                        InputProps={{
                        classes: {
                            root: this.props.classes.cssUnderline,
                            focused:this.props.classes.cssFocused,
                        },
                        }}
                        />

                        <TextField
                            margin="dense"
                            id="time"
                            label="Time"
                            type="time"
                            onChange={this.handleChange('time')}
                            defaultValue={this.state.time}
                            InputLabelProps={{
                                classes: {
                                  root: this.props.classes.cssLabel,
                                  focused:this.props.classes.cssFocused,
                                },
                                shrink: true,
                              }}
                            InputProps={{
                            classes: {
                                root: this.props.classes.cssUnderline,
                                focused:this.props.classes.cssFocused,
                            },
                            }}
                            inputProps={{
                            step: 3600, // 5 min
                            }}
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.props.close} style={{color:red[700]}}>
                        Cancel
                        </Button>
                        <Button onClick={this.makeTrialRequest} style={{color:red[700]}}>
                        Subscribe
                        </Button>
                        
                    </DialogActions>

                    {this.state.loading && <div className={this.props.classes.dialogOverlay}>
                        <Grid container justify="center" alignItems="center" style={{height:'100%'}}>
                            <Grid item>
                                <CircularProgress style={{color:red[700]}}/>
                            </Grid>
                        </Grid>
                    </div>}
                </Dialog>

                <SnackbarComponent 
                    open={this.state.snackbarOpen} 
                    handleClose={this.handleSnackbarClose}
                    message={this.state.snackbarMessage}
                    colour={this.state.snackbarColor}>
                </SnackbarComponent>
            </React.Fragment>
        )
    }
}



export default withStyles(styles)(withMobileDialog()(infoDialog))