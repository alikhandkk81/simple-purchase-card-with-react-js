import Student from "./Student";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="App">
          <Student
            name="Iphone 13 Pro"
            description="this is new  iphone 13pro 2021"
            price="$1300"
            star="0-10"
          />
        </div>
        <div className="App">
          <Student
            name="Iphone 12 Pro"
            description="this is new  iphone 12pro 2020"
            price="$1200"
            star="0-8"
          />
        </div>
        <div className="App">
          <Student
            name="Iphone 11 Pro"
            description="this is new  iphone 11pro 2019"
            price="$1000"
            star="0-7"
          />
        </div>
      </div>
    </>
  );
}
