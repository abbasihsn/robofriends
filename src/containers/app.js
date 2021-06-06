import React from 'react';
import CardList from '../components/cardList.js';
import SearchBox from '../components/searchBox';
import Scroll from '../components/scroll'
import './app.css'
import ErrorBoundaries from '../components/errorBoundaries.js';



class App extends React.Component{
    constructor(){
        super();
        this.state = {
            robots:[],
            searchField:''
        }
    }

    componentDidMount(){
        // runs after render method!
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>{
            return response.json();
        }).then(users=>{
            this.setState({robots:users});
        });
    }

    onSearchChange = (event)=>{
        this.setState({
            searchField: event.target.value
        });
    }

    render(){
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        // console.log(filteredRobots);
        return !robots.length?
            <h1 className='tc'>Loading</h1>:
            (
                <div className = 'tc'> 
                    <h1 className='tc f1'>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundaries>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundaries>
                    </Scroll>
                </div>
            );
    }
}

export default App;