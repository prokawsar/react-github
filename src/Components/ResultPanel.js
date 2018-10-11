import React, { Component } from 'react';

import { Button, Card, CardBody, CardTitle, CardText } from 'mdbreact';

export default class ResultPanel extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Repo name  
                            <Button color="primary pull-right">Copy clone link</Button> 
                            <Button color="primary pull-right">Download as zip</Button> 
                            
                        </CardTitle>
                        <CardText>About repo content.</CardText>
                       
                    </CardBody>
                </Card>
            </div>
           
        );
    }
}
