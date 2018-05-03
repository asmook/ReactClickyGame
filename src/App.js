import React, { Component } from 'react';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import Main from './components/main';
import cards from './cards.json';
import Wrapper from './components/wrapper';
import Footer from './components/footer';

class App extends Component {

    state = {
        cards,
        count: 0,
        unselectedCard: cards,
        message: "Click an image to begin!",
        highscore: 0
      };

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    playGame = (name) => {
        const find = this.state.unselectedCard.find(card => card.name === name)
        console.log(find)

        if(find === undefined) {
            this.setState({ 
                count: 0,
                unselectedCard: cards,
                message: "You have guessed incorrectly"
            });
        }
        else {
            const newCard = this.state.unselectedCard.filter(item => item.name !== name);
            console.log(newCard)
            
            if(this.state.count < this.state.highscore) {
                this.setState({ 
                    count: this.state.count + 1,
                    unselectedCard: newCard,
                    message: "You have guessed correctly!"
                });
            } else {
                this.setState({
                    count: this.state.count + 1,
                    unselectedCard: newCard,
                    message: "You have guessed correctly!",
                    highscore: this.state.count + 1
                })
            }
            
        }
        this.shuffleArray(cards)
    }  

    render() {
        return(
            <div>
                <Navbar
                    score={this.state.count}
                    message={this.state.message}
                    highscore={this.state.highscore}
                />
                <Jumbotron/>
                <Wrapper>
                    {this.state.cards.map(card => (
                        <Main
                        game={this.playGame}
                        key={card.name}
                        name={card.name}
                        image={card.image}
                        />
                    ))}
                </Wrapper>
                <Footer/>
            </div>
        )
    }
}

export default App;