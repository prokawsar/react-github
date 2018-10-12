import React, { Component } from 'react';
import axios from 'axios';
import ResultPanel from './ResultPanel';
import Avatar from './Avatar';

import { Button, Input, Fa, ToastContainer, toast } from 'mdbreact';

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

                <Button color="danger" onClick={this.handleSubmit} >{this.state.searchButton} <Fa icon="search" /></Button>

                <Avatar
                    data={this.state.userData}
                />
                <PanelBoard 
                    data={this.state.reposData}
                />
                <ToastContainer
                    hideProgressBar={true}
                    newestOnTop={true}
                    autoClose={3000}
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
