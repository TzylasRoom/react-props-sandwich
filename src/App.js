import './App.css';


//ORDER THE SANDWICH PARTS
import TopBun from './TopBun';
import BottomBun from './BottomBun';
import Meat from './Meat';
import Cheese from './Cheese';
import Lettuce from './Lettuce';


  //SANDWICH SHOP
  function App() {

    // CHOOSE YOUR SANDWICH !!! :) NOM NOM
    let sandwich = "Ham and Cheese"

    //SANDWICH MAKER
    if (sandwich == "Sample") {

      var meats = [{id:1, type:"Meat"}];
      var cheeses = [{id:1, type:"Cheese"}];

    }

    if (sandwich == "Italian") {

      var meats = [{id:1, type:"Salami"}, {id:2, type:"Ham"}];
      var cheeses = [{id:1, type:"Mozzarella"}, {id:2, type:"Parmesan"}];

    }

    if (sandwich == "Buffalo") {

      var meats = [{id:1, type:"Turkey"}, {id:2, type:"Chicken"}];
      var cheeses = [{id:1, type:"Blue Cheese"}, {id:2, type:"PepperJack"}];
      
    }

    if (sandwich == "Ham and Cheese") {

      var cheeses = [{id:1, type:"American Cheese"},{id:2, type:"Cheddar",id:3}, {type:"Swiss"}];
      var meats = [{id:1, type:"Ham"}];

    }

    return (

      <>
      <div className="App">

        {/* DELIVER THE SANDWICH */}
        <TopBun ingredient="Top Bun"/>

        <Lettuce ingredient="Lettuce" />

        {cheeses.map((cheese) =>
        <Cheese key={cheese.id} ingredient={cheese.type}/>
        )}

        {meats.map((meat) =>
        <Meat key={meat.id} ingredient={meat.type}/>
        )}

        <BottomBun ingredient="Bottom Bun"/>
      </div>

      </>
    );
  }

export default App;
