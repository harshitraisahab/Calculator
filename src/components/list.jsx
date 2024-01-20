function App({ todoname, tododate }) {
  // let todoname=buymilk;
  // let tododate=4/11/2023;
  return (
    <div class="row">
      <div class="col-6">{todoname}</div>
      <div class="col-4">{tododate}</div>
      <div class="col-2">
        <button type="button" class="btn btn-danger">
          delete
        </button>
      </div>
    </div>
  );
}
export default App;
