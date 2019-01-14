import React, { Component } from 'react'
import { Snackbar, SnackbarContent} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { green } from '@material-ui/core/colors';
import {CheckCircle, Error} from '@material-ui/icons'

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
      },
    success: {
        backgroundColor: green[600],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    }
})


const variantIcon = {
    success: CheckCircle,
    error: Error,
  };


class SnackbarComponent extends Component {

    constructor(props){
        super(props);
    }

    
    render(){
        const Icon = variantIcon[this.props.variant]
        return(
            <React.Fragment>
                <Snackbar
                    
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.props.open}
                    autoHideDuration={2000}
                    onClose={this.props.handleClose}
                    >
                    <SnackbarContent
                        onClose={this.props.handleClose}
                        variant="subtitle1"
                        style={this.props.colour}
                        className={this.props.classes.margin}
                        message={
                            <span id="client-snackbar" className={this.props.classes.message}>
                              <Icon className={classNames(this.props.classes.icon, this.props.classes.iconVariant)} />
                              <div style={{textAlign:'center'}}>{this.props.message}</div>
                            </span>
                          }
                    />
                </Snackbar>
            </React.Fragment>
        )
    }
}

SnackbarComponent.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(SnackbarComponent);