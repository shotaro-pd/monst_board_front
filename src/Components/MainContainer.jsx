import React from 'react'
import axios from 'axios'

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products:[]
    }
  }


componentDidMount() {
    axios.get('https://monstboard.herokuapp.com/api/v1/board')
    .then((results) => {
      console.log(results)
      this.setState({products: results.data})
    })
    .catch((data) =>{
      console.log(data)
    })
  }

  render() {
    return (
        <span>title:{this.state.products}</span>
    );
  }
}

export default MainContainer