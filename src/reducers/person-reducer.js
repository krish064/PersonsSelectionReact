const initialState = [
  {
    name: "Person1",
    age: "25",
    isSelected: false,
  },
  {
    name: "Person2",
    age: "26",
    isSelected: false,
  },
  {
    name: "Person3",
    age: "27",
    isSelected: false,
  },
];

const personReducer = (state = initialState, action) => {
  switch (action.type) {
    case "availableToSelected":
      const selectedPerson = { ...action.payload.person };
      selectedPerson.isSelected = true;
      return [
        ...state.filter((p) => p.name !== selectedPerson.name),
        selectedPerson,
      ];

    case "selectedToAvailable":
      const deSelectedPerson = { ...action.payload.person };
      deSelectedPerson.isSelected = false;
      return [
        ...state.filter((p) => p.name !== deSelectedPerson.name),
        deSelectedPerson,
      ];

    default:
      return state;
  }
};

export default personReducer;
