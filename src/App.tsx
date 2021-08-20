import { useState } from "react";
import "./App.css";

function App() {
  const [things, setThings] = useState<Array<string>>([]);
  const [data, setData] = useState("");

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const add = (thing: string) => {
    if (data !== "") {
      setThings([...things, thing]);
    }
    setData("");
  };

  const remove = (index: number) => {
    var newArr: Array<string> = [];
    for (let i = 0; i < things.length; i++) {
      if (i !== index) {
        let element = things[i];
        newArr.push(element);
      }
    }
    setThings(newArr);
  };

  const list = things.map((thing, index) => (
    <li key={index}>
      <span className='name'>{thing}</span>
      <span
        className='delete'
        onClick={() => {
          remove(index);
        }}
      >
        x
      </span>
    </li>
  ));

  return (
    <div className='body'>
      <h2>Todo App</h2>
      <form
        onSubmit={(e) => {
          add(data);
          e.preventDefault();
        }}
      >
        <input type='text' onChange={handleData} value={data} />
        <button type='submit'>Add</button>
      </form>
      <ul>{list}</ul>
    </div>
  );
}

export default App;
