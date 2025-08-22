import { useState, useEffect } from 'react';
import './InitialForm.css';

const InitialForm = ({ formName, formNamePh, formNumber, formNumberPh }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nameList, setNameList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedList = [...nameList, { name, age }];
    setNameList(updatedList);

    await fetch('/api/save', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedList),
    });

    setName("");
    setAge("");
  };

  useEffect(() => {
    console.log(JSON.stringify(nameList));
  }, [nameList]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {formNamePh}
        <input
          type="text"
          name={formName}
          placeholder={formNamePh}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        {formNumberPh}
        <input
          type="text"
          name={formNumber}
          placeholder={formNumberPh}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <button>Então toma</button>
    </form>
  );
};

export default InitialForm;
