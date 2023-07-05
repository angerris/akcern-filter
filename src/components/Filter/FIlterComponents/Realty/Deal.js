export default function Deal(props) {
  function onValChanged(e) {
    props.onValSelected(e.currentTarget.value);
  }
  return (
    <>
      <div>
        <select name="isOnSale" onChange={(e) => onValChanged(e)}>
          <option value="type1">deal options</option>
          <option value="type1">dsadsadss</option>
          <option value="type1">safsadfasda</option>
        </select>
      </div>
    </>
  );
}
