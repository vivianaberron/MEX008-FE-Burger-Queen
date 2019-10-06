import React from 'react';

export default class IfOffLine extends React.Component {

    constructor(props) {
        super(props)
        this.state= { onLine: navigator ? navigator.onLine : true }
    }
    componentDisMount(){
        if( ! window ) return
        window.addEventListener('onLine', this.goOnLine)
        window.addEventListener('onLine', this.goOffLine)
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.goOnLine)
      window.removeEventListener('offline', this.goOffLine)
    }

    goOnLine = () => this.setState({ onLine: true })
    goOffLine = () => this.setState({ onLine: true })
    
    render() {
        
        const { children } = this.props
        const { onLine } = this.state

        if( onLine ) { return null } 
            return <span>{ children }</span>
        }      
    }
