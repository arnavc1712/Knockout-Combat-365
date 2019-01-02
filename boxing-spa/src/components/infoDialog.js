import React from "react"
import { Button,TextField, Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle} from "@material-ui/core"
import moment from 'moment'


class infoDialog extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            phoneNo: "",
            firstName: "",
            lastName: "",
            date: moment().add(1, 'days').format('YYYY-MM-DD'),
            time:"07:30"
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    makeTrialRequest = () => {
        fetch('http://shrouded-savannah-57355.herokuapp.com:3001/api/signup', {
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


    }
    

    render(){
        return(
            <React.Fragment>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.close}
                    aria-labelledby="form-dialog-title"
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
                        fullWidth
                        />
                        <TextField
                
                        margin="dense"
                        id="name"
                        label="Last Name"
                        onChange={this.handleChange('lastName')}
                        value={this.state.lastName}
                        fullWidth
                        />
                        <TextField
                        margin="dense"
                        id="name"
                        label="Phone Number"
                        onChange={this.handleChange('phoneNo')}
                        value={this.state.phoneNo}
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
                        shrink: true,
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
                            shrink: true,
                            }}
                            inputProps={{
                            step: 3600, // 5 min
                            }}
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.props.close} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.makeTrialRequest} color="primary">
                        Subscribe
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}



export default infoDialog