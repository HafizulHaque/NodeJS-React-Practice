import React, {Component} from 'react'

class App extends Component{

    constructor(){
        super()
        this.state = {
            name: '',
            nameLoaded: false,
            homePlanet: '',
            homePlanetLoaded: false
        }
    }

    componentDidMount(){
        this.setState({
            nameLoaded: false,
            homePlanetLoaded: false
        })
        
        fetch("https://swapi.co/api/people/12")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState(()=> {
                    return{
                        nameLoaded: true,
                        name: data.name
                    }
                })
                fetch(data.homeworld)
                    .then(response => response.json())
                    .then(data => {
                        this.setState(() => {
                            return{
                                homePlanet: data.name,
                                homePlanetLoaded: true
                            }
                        })
                        console.log(data)
                    })
            })
    }


    render(){
        const nameText = this.state.nameLoaded ? this.state.name: 'Loading..'
        const planetNameText = this.state.homePlanetLoaded ? this.state.homePlanet: 'Loading..'
        return (
            <div>
                <header>hello header</header>
                <h1>Name: {nameText}</h1>
                <h2>HomePlanet: {planetNameText}</h2>
                <footer>tata footer</footer>
            </div>
        )
    }
}

export default App