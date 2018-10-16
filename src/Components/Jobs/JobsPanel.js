import React, { Component } from 'react';
import Moment from 'react-moment';

import { Card, CardBody, CardTitle, CardText, Fa } from 'mdbreact';

class JobsPanel extends Component {
    
    
    render(){
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle className="pull-left">
                            <a href={this.props.url}
                            title="View on Github" target="_blank" rel="noopener noreferrer"> {this.props.title} <span><Fa icon="github" title="View on Github"/></span>
                            </a>  
                            <CardText>
                                <span style={{color: "purple"}} className="pull-left">{this.props.company}</span>
                            </CardText>
                        </CardTitle>
                        <CardText>
                            <span className="pull-right font-weight-bold"><Fa icon="location" />{this.props.type}</span>
                        </CardText>
                        <CardText>
                            <span className="pull-right"><Fa icon="location" />{this.props.location}</span>
                        </CardText>

                        <CardText>
                            <span className="pull-right">Posted: <Moment fromNow>{this.props.created} </Moment></span>
                        </CardText>
                       
                    </CardBody>
                </Card>
            </div>
           
        );
    }
}

export default JobsPanel;