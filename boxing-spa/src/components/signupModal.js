import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Modal, Typography } from '@material-ui/core'
import propTypes from 'prop-types'

const styles = theme => ({
    paper: {
        position: 'absolute',
        top:50,
        left:50,
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
      }
})

class SignupModal extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.open}
          onClose={this.props.handleClose}
            >
          <div className={this.props.classes.paper}>
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>
        )
    }
}


SignupModal.propTypes = {
    classes: propTypes.object.isRequired
}


export default withStyles(styles)(SignupModal)
