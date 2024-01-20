// import

function ListComponent({ items }) {
  return (
    <>
      <ul>
        <li>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </li>
      </ul>
    </>
  );
}

export default ListComponent;
