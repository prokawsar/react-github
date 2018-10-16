import React, { Component } from 'react';
import JobsSearch from './JobsSearch';
import { Button, Card, CardBody, CardTitle, CardText, toast, Fa } from 'mdbreact';

class Jobs extends Component {
    
    render(){
        return(
            <div>
                <JobsSearch />
            </div>
           
        );
    }
}

export default Jobs;