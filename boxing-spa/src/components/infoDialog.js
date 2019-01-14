import React from "react"
import { Button,TextField, FormControl, FormHelperText, withMobileDialog,Grid, Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle, CircularProgress} from "@material-ui/core"
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
    },
    helperText: {
        color: red[500],
        marginBottom: 5
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
            loading: false,
            firstNameError: null,
            lastNameError: null,
            phoneNoError: null,
            dateError: null,
            timeError: null,
            iconVariant: null
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        },() => {
            this.validateField(name);
        });
        
        
    };


    handleSnackbarClose = () => {
        this.setState({
            snackbarOpen: false
        });
    }
    
    validateOnSubmit = async() => {
        const fieldArr = ['firstName','lastName','phoneNo','date','time']
        fieldArr.forEach(element => {
            this.validateField(element);
        });
    }

    validateField = name => {
        if(name === 'firstName'){
            if(this.state[name] && this.state[name].length > 3){
                this.setState({firstNameError:null})
            }
            else{
                this.setState({firstNameError:"Required"})
                
            }
        }

        if(name === 'lastName'){
            if(this.state[name] && this.state[name].length > 3){
                this.setState({lastNameError:null})
            }
            else{
                this.setState({lastNameError:"Required"})
            }
        }
        if(name === 'phoneNo'){
            if(this.state[name] && /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/.test(this.state[name])){
                this.setState({phoneNoError:null})
            }
            else{
                this.setState({phoneNoError:"Please correct Phone Number with Country Code"})
            }
        }

        if(name === 'date'){
            if(this.state[name] && this.state[name].length ){
                this.setState({dateError:null})
            }
            else{
                this.setState({dateError:"Required"})
            }
        }

        if(name === 'time'){
            if(this.state[name] && this.state[name].length ){
                this.setState({timeError:null})
            }
            else{
                this.setState({timeError:"Required"})
            }
        }

    }

    makeTrialRequest = async() => {
        await this.validateOnSubmit()
        if(this.state.firstNameError || this.state.lastNameError || this.state.phoneNoError || this.state.dateError || this.state.timeError)
        {
            this.setState((prevState) => ({
                snackbarMessage:"Please Enter all details",
                snackbarOpen:true,
                snackbarColor: {
                    backgroundColor: red[600]
                },
                iconVariant: 'error'
            }))
        }
        else{
            this.setState({loading:true})
            fetch('https://shrouded-savannah-57355.herokuapp.com/api/signup', {
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
                            },
                            iconVariant: 'success'
                        }))
                    }
        
                    else{
                        this.setState((prevState) => ({
                            snackbarMessage:"There seems to be an error!\n Please try again in a while",
                            snackbarOpen:true,
                            snackbarColor: {
                                backgroundColor: red[600]
                            },
                            iconVariant: 'error'
                        }))
        
                    }
                }, 500);
            
                
            });
        }

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

                        <FormControl fullWidth>
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
                            />
                            <FormHelperText className={this.props.classes.helperText}>{this.state.firstNameError}</FormHelperText>
                        </FormControl>
                        
                        <FormControl fullWidth>
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

                            <FormHelperText className={this.props.classes.helperText}>{this.state.lastNameError}</FormHelperText>
                        </FormControl>

                        <FormControl fullWidth>
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
                            <FormHelperText className={this.props.classes.helperText}>{this.state.phoneNoError}</FormHelperText>
                        </FormControl>

                        <FormControl>
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
                            <FormHelperText className={this.props.classes.helperText}>{this.state.dateError}</FormHelperText>
                        </FormControl>

                        <FormControl>
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
                            <FormHelperText className={this.props.classes.helperText}>{this.state.timeError}</FormHelperText>
                        </FormControl>
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
                    colour={this.state.snackbarColor}
                    variant={this.state.iconVariant}>
                </SnackbarComponent>
            </React.Fragment>
        )
    }
}



export default withStyles(styles)(withMobileDialog()(infoDialog))