import { useState } from "react";
import { v1 as generateUniqueID } from "uuid";
import DogDetails from "./DogDetails";
import { dogsData } from "./data";

function App() {
  const [dogs, setDogs] = useState(dogsData);
  function addDog() {
    const rover = {
      id: generateUniqueID(),
      name: "Rover",
      present: false,
      grade: "100",
      notes: "The goodest new dog",
    };
    setDogs([rover, ...dogs]);
  }
  function removeDog(dogID) {
    const filteredDogArray = dogs.filter((dog) => dog.id !== dogID);
    setDogs(filteredDogArray);
  }
  function updateDogAttendance(dogId) {
    const dogArray = [...dogs];
    const index = dogArray.findIndex((dog) => dogId === dog.id);
    dogArray[index].present = !dogArray[index].present;
    setDogs(dogArray);
  }
  return (
    <div className="App">
      <header>
        <h1> Bark and Bowl Doggy Day Care</h1>
        <h2>{new Date().toDateString()}</h2>
      </header>
      <aside>
        <button onClick={addDog}>Add a new dog</button>
        <ul>
          {dogs.map((dog) => {
            return (
              <li key={dog.id}>
                <span
                  onClick={() => updateDogAttendance(dog.id)}
                  style={
                    dog.present
                      ? { textDecoration: "none" }
                      : { textDecoration: "line-through" }
                  }
                >
                  {dog.name}{" "}
                </span>
                <button onClick={() => removeDog(dog.id)}>remove</button>
                <DogDetails dog={dog} />
              </li>
            );
          })}
        </ul>
      </aside>
      <main></main>
    </div>
  );
}

export default App;
