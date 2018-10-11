import React, { Component } from 'react';
import axios from 'axios';

import { Button, Input } from 'mdbreact';
import { Card, CardBody, CardTitle, CardText } from 'mdbreact';

export default class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            reposData: []
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
            console.log(response.data);

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
                
                <PanelBoard 
                    data={this.state.reposData}
                />

            </div>
           
        );
    }
}

class PanelBoard extends Component {
  
    render(){
        const repos = this.props.data.map((repo) => (
            
            <ResultPanel
              id={repo.id}
              key={repo.id}
              name={repo.name}
              description={repo.description}
              branch={repo.default_branch}
              dLink={repo.html_url}
            />
            // console.log(repo.name)
          ));

          return(
                <div>
                    {repos}
                </div>
          );
    }
}

class ResultPanel extends Component {
    state = {
        url: '/archive/',
        zip: '.zip'
    }
    render(){
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{this.props.name}  
                            <Button color="primary pull-right">Copy clone link</Button> 
                            <Button color="primary pull-right" href={this.props.dLink + this.state.url + this.props.branch + this.state.zip }>Download as zip</Button> 
                            
                        </CardTitle>
                        <CardText>{this.props.description}</CardText>
                       
                    </CardBody>
                </Card>
            </div>
           
        );
    }
}
// export default Timer;