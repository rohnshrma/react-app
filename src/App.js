import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="cards wrapper">
        <Card
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCQY3EN77A-Tnxl7QihKqqGIdey50xctnR2Q&s"
          name="Pikachu"
          description="Electric type pokemon"
        />
        <Card
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO2VjrI42NNQ3DjKoFXIw-BhkQIyTbyAlVHg&s"
          name="bulbasaur"
          description="a water type pokemon"
        />
        <Card
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ke11WXqOeHdOaYq5c2ZWIUQZexWrt__24A&s"
          name="charizard"
          description="a fire type pokemon"
        />
      </div>
    </div>
  );
}

export default App;
