import React, { Component } from 'react';
import axios from 'axios'
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class MainContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
      axios.get('https://monstboard.herokuapp.com/api/v1/board')
      .then((results) => {
        console.log(results)
        this.setState({products: results.data})
      })
      .catch((data) =>{
        console.log(data.title)
      })
  }

  render() {
    const {products} = this.state
    return (
      <div>
      {products.map((list) => (

          <Card  bg={'Info'} text={'white'} style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>【{ list.title }】</Card.Title>
              <Card.Text>
                募集要項：未実装
              </Card.Text>
              <Button variant="primary" onClick={list.url}>参加する</Button>
            </Card.Body>
          </Card>
        )
        // postsに格納されているdataをmapメソッドを使い１つ１つ取り出し表示させる
      )}
      </div>
    );
  }
}

export default MainContainer