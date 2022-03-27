import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>

      <div>
      <h3>How react works? ---------->>></h3>
            <h4>React is Javascript library, many people get it wrong by saying it;s a framwork. It creates user interfaces in a predictable and efficient way using declarative code. With the help of react we build single page applications and mobile apps, or to build complex apps</h4>

            

            <h3>How useState work? ---------->>></h3>
            <h4>Answer: useState is hook which help to state variable in functional components. If we pass initial state to a funtion, it returns a variable with current state value, also another function to update that value. </h4>
      </div>
    </div>
    
  );
}

export default App;
