import React, { Component } from 'react';
import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import JobsPanel from './JobsPanel';

import { Button, Input, Fa, ToastContainer, toast } from 'mdbreact';

export default class JobsSearch extends Component {
    constructor(props){
        super(props)

        this.state = {
            search: '',
            location: '',
            jobsData: [],
            searchButton: 'Search Job',
        }

    }
    handleChange = (e) =>{
        this.setState({
            search: e.target.value
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
        if(this.state.search === '' && this.state.location === ''){
            toast.warn('Please enter any query');
            return;
        }
        this.setState({
            searchButton: 'Searching...'
        });

        let getData = [];
        axios.get('https://jobs.github.com/positions.json?description='+this.state.search, {
            // to allow CORS in the client side
            adapter: jsonpAdapter,
            headers: {"Access-Control-Allow-Origin": 'https://jobs.github.com'}
        }).then(result=> {
            this.setState({
                jobsData: result.data,
                searchButton: 'Search Job'
            });
        }).catch(error=>{
            if(error.response){
                if(error.response.status === 404) {
                    toast.warn('Jobs not found');
                    this.setState({
                        jobsData: [],
                        searchButton: 'Search'
                    });
                }
            }
        });
    };

    render(){
        return(
            <div>
                <Input label="Type any language name"  onKeyDown={this.onKeyDown} onChange={this.handleChange} group type="text" />
                {/* <Input label="Type your password" icon="lock" group type="password" /> */}

                <Button color="danger" onClick={this.handleSubmit} >{this.state.searchButton} <Fa icon="search" /></Button>

                <PanelBoard
                    data={this.state.jobsData}
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
        const jobs = this.props.data.map((job) => (

            <JobsPanel
              id={job.id}
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              created={job.created_at}
              type={job.type}
              url={job.url}
              description={job.description}
             
            />
            // console.log(repo.name)
          ));

          return(
                <div>
                    {jobs}
                </div>
          );
    }
}
