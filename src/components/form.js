import React, { Component } from 'react';
import './form.css';
// import { connect } from 'react-redux';
// import { getProfile, addProfile, updateProfile, deleteProfile } from '../redux/profile/profileActions.js';
import { TextField, Button, Typography, Paper, Radio, RadioGroup, FormLabel, Grid, Backdrop, CircularProgress } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import $ from 'jquery';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Chat from './chat.js'
import { ToastContainer, toast } from 'react-toastify';
import ReplayOutlined from '@material-ui/icons/ReplayOutlined';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

class Form extends Component {

  state = {
    showChatBox : 'hide'
  };
  componentDidMount(){
      
}

handleChange = event => {
    event.preventDefault();
    const {target: {name, value}} = event;
    this.setState({ [name]: value});
    
    console.log(value)
    console.log(this.state)
};

handleOnSubmit = event => {
    console.log(this.state)
    console.log(event)
    const res = '';
    axios.post('http://localhost:5000/', this.state)
    // axios.post('https://protected-citadel-70366.herokuapp.com/', this.state)
    .then(response =>{
        this.setState({ res: response });
        console.log(response)
        if((typeof(response.data) != "undefined") && response.data != 'failed'){
            this.setState({ showChatBox: 'show'});
            toast.success("Hey! "+response.data.Name+" your interview has been sheduled");
        }else{
            toast.error("Error! Please submit all the details.");
        }
    })
    .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
        toast.error("Error! Please submit all the details.");

    });
    console.log(res)
  }

  resetForm = event => {
    this.setState({ Name: ''});
    this.loader();
      
  }

  loader = () => {
    this.setState({isLoading: true});
    setInterval(() => {
    window.location.reload(); 
    this.setState({isLoading: false});
    }, 1000);
  }

    render(){
        return(
            <div className="form-container form_blade">

                <Paper className='paper'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={10}>
                         <h3>Please provide us the following details for interview based on your skills!</h3>
                    </Grid>
                    <Grid item xs={12} md={2} className='ResetButton'>
                        <Button variant="contained" color="primary" startIcon={<ReplayOutlined />}  onClick={()=> this.resetForm(this.state)}  >Reset  </Button>
                    </Grid>
                </Grid>
                  <TextField InputLabelProps={{ shrink: true }} name="Name" variant="outlined" label="Name" fullWidth margin="dense" value={this.state.Name}  onChange={this.handleChange} />

                    <FormControl className='Language' fullWidth>

                    <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="Language"
                        name="lang"
                        value={this.state.lang}
                        onChange={this.handleChange}
                        >
                        <MenuItem value='python'>Python</MenuItem>
                        <MenuItem value='java'>Java</MenuItem>
                        <MenuItem value='cpp'>Cpp</MenuItem>
                    </Select>
                    <FormHelperText>Which language you are the most comfortable with?</FormHelperText>
                    </FormControl>

                    <FormControl className='Database' fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">Database</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="Database"
                        name="db"
                        value={this.state.db}
                        onChange={this.handleChange}
                        >
                        <MenuItem value='sql'>SQL</MenuItem>
                        <MenuItem value='Nosql'>NO SQL</MenuItem>
                    </Select>
                    <FormHelperText>Which databases do you prefer?</FormHelperText>
                    </FormControl>

                    <FormControl className='DataStructure' fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">Data Structure</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="DataStructure"
                        name="dslevel"
                        value={this.state.dslevel}
                        onChange={this.handleChange}
                        >
                        <MenuItem value="beginner">Beginner</MenuItem>
                        <MenuItem value="intermediate">Intermediate</MenuItem>
                        <MenuItem value="expert">Expert</MenuItem>
                    </Select>
                    <FormHelperText>Rate yourself in the area of Data Structures:</FormHelperText>
                    </FormControl>

                    <FormControl component="fieldset">
                    <FormLabel component="legend">Shell Scripting</FormLabel>
                    <RadioGroup row aria-label="shellScript" name="shell" value={this.state.shell}
                    onChange={this.handleChange}>
                        
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                        
                    </RadioGroup>
                    <Button  startIcon={<SaveIcon />} className='buttonSubmit' color='primary' variant="contained" size="medium" type="submit" onClick={()=> this.handleOnSubmit(this.state)} fullWidth>Submit</Button>

                    </FormControl>
                  </Paper>
                  { (this.state.showChatBox === 'show') ?   <Chat></Chat> : null }
                 <ToastContainer />
                 <Backdrop className='' open={this.state.isLoading} style={{ 'z-index': "1201"}} >
                    <CircularProgress color="inherit" />
                </Backdrop>

            </div>
        );
    }
}


export default Form;    