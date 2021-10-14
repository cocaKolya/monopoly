import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
 
class App extends React.Component {
 
  render() {
    return (
      <div>
        <ReactDice
          numDice={2}
          rollDone={this.rollDoneCallback}
          ref={dice => this.reactDice = dice}
        />
      </div>
    )
  }
 
  rollAll() {
    this.reactDice.rollAll()
  }
 
  rollDoneCallback(num) {
    console.log(`You rolled a ${num}`)
  }
)
