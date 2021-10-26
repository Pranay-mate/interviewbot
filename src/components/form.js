import React, { Component } from 'react';
import './form.css';
// import { connect } from 'react-redux';
// import { getProfile, addProfile, updateProfile, deleteProfile } from '../redux/profile/profileActions.js';
import { TextField, Button, Typography, Paper, Radio, RadioGroup, FormLabel } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Backdrop from '@material-ui/core/Backdrop';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CircularProgress from '@material-ui/core/CircularProgress';
import $ from 'jquery';
import SaveIcon from '@material-ui/icons/Save';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import axios from 'axios';

class Form extends Component {

  state = {
      res : ''
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
    .then(response => this.setState({ res: response }))
    .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
    });
    console.log(res)
  }
    render(){
        
        return(
            <div className="form-container form_blade">
                <Paper className='paper'>
                    <h3>Please provide us the following details for interview based on your skills!</h3>
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
            </div>
        );
    }
}


export default Form;    