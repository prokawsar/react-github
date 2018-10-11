import React, { Component } from 'react';
import axios from 'axios';

import { Button, Input } from 'mdbreact';

export default class ResultPanel extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            reposData: {}
        }
    }

    handleChange = (e) =>{
        this.setState({
            userName: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log("Submitted");
        axios.get('https://api.github.com/users/'+this.state.userName+'/repos')
        .then((response) =>{
            console.log(response);

            this.setState({
                reposData: response.data
            })
        })
        
    
    }

    render(){
        return(
            <div>
                <Input label="Type any Github Username" onChange={this.handleChange} group type="text" />
                {/* <Input label="Type your password" icon="lock" group type="password" /> */}
                <Button color="danger" onClick={this.handleSubmit} >Submit </Button>
                

            </div>
           
        );
    }
}


// export default Timer;