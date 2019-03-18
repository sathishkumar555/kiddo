import React from 'react';
import  './App.css';
import About from '../components/About';
import  Generategreeting from '../components/generateGreeting';


class App extends React.Component{
    state={
        bool:false
    }
    show(){
        this.setState({bool:true})
    }
    render(){
        return(
            <React.Fragment>
                    <div className="main">
                        <h1>Hello React App! I am in Nginx server</h1>
                        {this.state.bool && <About /> }
                        <a  onClick={()=>this.show()}>Show</a><br/>
                        <Generategreeting name="sathish" />
                    </div>
            </React.Fragment>
        )
    }
}
export default App;