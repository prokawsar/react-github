import React, { Component } from 'react';

import { Button, Card, CardBody, CardTitle, CardText, toast, Fa } from 'mdbreact';

class ResultPanel extends Component {
    state = {
        url: '/archive/',
        zip: '.zip'
    }
    copyToClipboard = (data) => {
        let textField = document.createElement('textarea')
        textField.innerText = data;
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        // alert('Copied to Clipboard');
        toast.success('URL copied to clipboard!');
    }
    render(){
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <a 
                            title="View on Github" 
                            href={this.props.dLink} target="_blank" rel="noopener noreferrer"> {this.props.name} <span><Fa icon="github" title="View on Github"/></span>
                            </a>  
                            {/* <Button color="primary pull-right">Copy clone link</Button>  */}
                            {/* <span className="pull-right" ><Fa title="Download as zip" icon="download" href={this.props.dLink + this.state.url + this.props.branch + this.state.zip } /></span> */}
                            
                            <span className="pull-left" ><Fa style={{ color: '#0062cc' }} title="Copy Clone link" icon="file" onClick={() => this.copyToClipboard(this.props.clone_url)} /></span>

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

export default ResultPanel;