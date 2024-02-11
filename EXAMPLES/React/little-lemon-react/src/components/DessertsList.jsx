function DessertsList(props) {
  const { data } = props;

  const lowCalorieDesserts = data.filter((d) => d.calories < 500);
  lowCalorieDesserts.sort((a, b) => a.calories - b.calories);
  const listItems = lowCalorieDesserts.map((d) => {
    return (
      <>
        <li key={d.id}>{`${d.title} - ${d.price}`}</li>
      </>
    );
  });

  return (
    <>
      <h1>Our Low Calorie Desserts!</h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default DessertsList;
