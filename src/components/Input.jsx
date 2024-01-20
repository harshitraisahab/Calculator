import K from "../App";

function App({ i }) {
  return (
    <>
      <ul>
        <li>
          {i.map((item) => (
            <li>{item}</li>
          ))}
        </li>
      </ul>
    </>
  );
}
export default App;
