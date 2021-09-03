import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./container.css";
import Person from "../Person/Person";

const Container = (props) => {
  //const dispatch = const dispatch = useDispatch(function)

  const personsData = useSelector((state) => state.personData);
  const dispatch = useDispatch();

  const [persons, setPersons] = useState(
    personsData.filter((p) => p.isSelected === false)
  );
  const [selected, setSelected] = useState(
    personsData.filter((p) => p.isSelected === true)
  );

  const personSelectedHandler = (p) => {
    dispatch({ type: "availableToSelected", payload: { person: p } });
  };

  const personDeselectedHandler = (p) => {
    dispatch({ type: "selectedToAvailable", payload: { person: p } });
  };

  useEffect(() => {
    setPersons(personsData.filter((p) => p.isSelected === false));
    setSelected(personsData.filter((p) => p.isSelected === true));
  }, [personsData]);

  return (
    <div className="container">
      <div className="box available">
        <p>AvailableList</p>

        {persons.length > 0 &&
          persons.map((person, ind) => (
            <Person
              key={ind}
              onClick={() => personSelectedHandler(person)}
              name={person.name}
              age={person.age}
            />
          ))}
      </div>
      <div className="box selected">
        <p>SelectedList</p>

        {selected.length > 0 &&
          selected.map((person, ind) => (
            <Person
              key={ind}
              onClick={() => personDeselectedHandler(person)}
              name={person.name}
              age={person.age}
              isActive={true}
            />
          ))}
      </div>
    </div>
  );
};

export default Container;
