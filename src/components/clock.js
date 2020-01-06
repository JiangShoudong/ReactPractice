import React from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        // 状态的初始化一般放在构造器中
        this.state = {
            date: new Date(),
        }
    }
    componentDidMount = () => {
      setInterval(() => {  
          this.setState((prevState, props) => ({
            date: new Date(),
        }));
      }, 1000)
    };
    
    render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}