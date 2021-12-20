import React, { Component } from 'react'
import { connect } from 'react-redux';
import { searchMovies, fetchMovies, addFavorite, fetchFavorites } from '../actions/moviesActions';
import { Button,Container,Row,Col, Navbar, Card } from 'react-bootstrap';

class Movies extends Component {


    componentDidMount(){
        this.props.fetchMovies();
        this.props.fetchFavorites();
    }

    buildImgUrl(path){
        return `https://image.tmdb.org/t/p/original/${path}`
     }

     AddToFav(movie){
         this.props.addFavorite(movie)
          console.log(this.props.Movies)
     }



     
    render() {
        const movies = this.props.Movies.List;
        const favorites = this.props.Movies.Favorites;
        return (
            <Container fluid>
            <Row>
                <Col>
                    <Navbar bg="dark">
                        <Container>
                            <Navbar.Brand ><h3 style={{color: '#fff'}}>My Movies</h3></Navbar.Brand>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
            <Row>
                <Col>
                <h3>Latest Movies</h3> 
                {movies.map((movie)=>

<Card style={{ width: '100%', margin: '10px'}}>
  <Card.Img variant="top" src={this.buildImgUrl(movie.poster_path)} />
  <Card.Body>
    <Card.Title>{movie.original_title}</Card.Title>
    <Card.Text>
    {movie.overview}
    </Card.Text>
    <Button onClick={()=> this.AddToFav(movie)} variant="primary">Add To Favorites</Button>
  </Card.Body>
</Card>


                )}

                </Col>
                <Col><h3>My Favorites</h3> 
                {favorites.map((movie)=>

<Card style={{ width: '100%', margin: '10px'}}>
  <Card.Img variant="top" src={this.buildImgUrl(movie.poster_path)} />
  <Card.Body>
    <Card.Title>{movie.original_title}</Card.Title>
    <Card.Text>
    {movie.overview}
    </Card.Text>
    <Button variant="primary">Add To Favorites</Button>
  </Card.Body>
</Card>


                )}
                </Col>
            </Row>            
        </Container>
        )
    }
}
const mapeStateToProps = (state)=>{
    return {
        Movies: state.Movies
    }
}

export default connect(mapeStateToProps, {
    searchMovies,
    fetchMovies,
    addFavorite,
    fetchFavorites
})(Movies);
