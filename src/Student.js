function Student(props) {
  return (
    <>
      <h1>Model {props.name}</h1>
      <p>
        AboutPhone: <i>{props.description}</i>
      </p>
      <h4>
        Price: <strong>{props.price}</strong>
      </h4>
      <h5>Rating: {props.star}</h5>
      <button>Buy Now</button>
    </>
  );
}
export default Student;
