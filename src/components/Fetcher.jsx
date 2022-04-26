import { useState, useEffect } from "react";

export default function Fetcher(props) {
  const [character, setCharacter] = useState({ name: "Loading" }); //very hacky!
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://swapi.dev/api/people/" + count);
      const data = await res.json();
      setCharacter(data);
      setLoading(false);
    }
    getData();
  }, [count]); //[count] means: re-run this function when count changes
  function nextCharacter() {
    setCount((old) => old + 1);
    setCharacter({ name: "Loading" });
    setLoading(true);
  }
  return (
    <div>
      <button disabled={loading} onClick={nextCharacter}>
        Add 1
      </button>
      {count}-{character.name}
    </div>
  );
}
