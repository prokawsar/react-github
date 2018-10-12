import React, { Component } from 'react';

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

export default Avatar;