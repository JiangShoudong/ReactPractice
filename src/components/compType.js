import React from 'react';

// 函数类型的组件
export function Welcome1(props) {
    return (
    <div>Welcome1, {props.name}</div>
    )
}
// 基于类的组件
export class WelCome2 extends React.Component {
    render() {
        return <div>WelCome2, {this.props.name}</div>
    }
}