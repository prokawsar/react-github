import React, { Component } from 'react';
import axios from 'axios';

import { Button, Input, Fa } from 'mdbreact';
import { Card, CardBody, CardTitle, CardText, ToastContainer, toast } from 'mdbreact';

export default class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            userName: '',
            reposData: [],
            userData: [],
            searchButton: 'Search',
        }
        
    }
    handleChange = (e) =>{
        this.setState({
            userName: e.target.value
        })
    }


    onKeyDown = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();
          this.handleSubmit();
        }
      }

    handleSubmit = (e) => {
        console.log("Submitted");
        if(this.state.userName === ''){
            toast.warn('Please enter a username');
            return;
        }
        this.setState({
            searchButton: 'Searching...'
        });
        let getData = [];
        getData.push(axios.get('https://api.github.com/users/'+this.state.userName+'/repos'));
        getData.push(axios.get('https://api.github.com/users/'+this.state.userName));

        Promise.all(getData)
        .then(result=>{
            this.setState({
                reposData: result[0].data,
                userData: result[1].data,
                searchButton: 'Search'
            });
            console.log(this.state)
        });
    }

    render(){
        return(
            <div>
                <Input label="Type any Github Username"  onKeyDown={this.onKeyDown} onChange={this.handleChange} group type="text" />
                {/* <Input label="Type your password" icon="lock" group type="password" /> */}
                <Avatar
                    data={this.state.userData}
                />
                <Button color="danger" onClick={this.handleSubmit} >{this.state.searchButton} <Fa icon="search" /></Button>
                <PanelBoard 
                    data={this.state.reposData}
                />
                <ToastContainer
                hideProgressBar={true}
                newestOnTop={true}
                autoClose={2000}
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
              lang={repo.language}
              forks={repo.forks_count}
              clone_url={repo.clone_url}
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
                        <CardTitle>
                            <a 
                            title="View on Github" 
                            href={this.props.dLink} target="_blank"> {this.props.name} <span><Fa icon="github" title="View on Github"/></span>
                            </a>  
                            {/* <Button color="primary pull-right">Copy clone link</Button>  */}
                            {/* <span className="pull-right" ><Fa title="Download as zip" icon="download" href={this.props.dLink + this.state.url + this.props.branch + this.state.zip } /></span> */}
                            
                            <span className="pull-left" ><Fa title="Copy Clone link" icon="file" href={this.props.clone_url } /></span>

                            <Button title="Download as zip" size="sm" color="primary pull-right" href={this.props.dLink + this.state.url + this.props.branch + this.state.zip }><Fa title="Download as zip" icon="download" /></Button> 
                            
                        </CardTitle>
                        <CardText>{this.props.description}</CardText>
                        <CardText><span className="pull-left">Language: {this.props.lang} </span></CardText>
                        <CardText><span className="pull-right">Forks: {this.props.forks} </span></CardText>
                       
                    </CardBody>
                </Card>
            </div>
           
        );
    }
}

class Avatar extends Component {
    render() {
        const avatar= this.props.data ? this.props.data : null;

        return (
            avatar && 
            <div>
                <img className="gitAvatar" src={avatar.avatar_url} />
                <div><strong>{avatar.name}</strong></div>
            </div>
        );
    }
}
// export default Timer;