import React, { Component } from 'react'

export default class ClassComponentLifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        console.log("ComponentDidMount class")
    }
    componentDidUpdate(prev, newState) {
        console.log("ComponentDidUpdate class", prev, newState)
    }
    componentWillUnmount() {
        console.log("tess")
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.setState({count: this.state.count + 1})}>Count</button>
      </div>
    )
  }
}
