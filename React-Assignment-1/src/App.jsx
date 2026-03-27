import Things from "./components/Things";
import NestedList from "./components/NestedList";
import MathematicalFormula from "./components/MathematicalFormula";
import ChemicalFormula from "./components/ChemicalFormula";
import PeriodicTable from "./components/PeriodicTable";
import CheeseTable from "./components/CheeseTable";
import RegistrationForm from "./components/RegisterForm";
import StudentRegistrationForm from "./components/StudentRegistrationForm";

function App() {
  return (
    <div>
      <h1>HTML Assignment 1</h1>
      <Things />
      <hr />
      <h1>HTML Assignment 2</h1>
      <NestedList />
      <hr />
      <h1>HTML Assignment 3</h1>
      <MathematicalFormula />
      <hr />
      <h1>HTML Assignment 4</h1>
      <ChemicalFormula />
      <hr />
      <h1>HTML Assignment 5</h1>
      <PeriodicTable />
      <hr />
      <h1>HTML Assignment 6</h1>
      <CheeseTable />
      <hr />
      <h1>HTML Assignment 7</h1>
      <RegistrationForm />
      <hr />
      <h1>HTML Assignment 8</h1>
      <StudentRegistrationForm />
      <hr />
    </div>
  );
}

export default App;
