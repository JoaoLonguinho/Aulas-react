import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["João", "Carlos", "Rael"]);

  const [users] = useState([
    {id: 1, name: 'João', age: '26'},
    {id: 123123121313, name: 'Bianca', age: '23'},
    {id: 131331, name: 'Carlos', age: '27'},
    {id: 52343431, name: 'Rael', age: '27'},
  ])
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>{users.map((user)=>(
        <li key={user.id}>{user.name} - {user.age}</li>
      ))}</ul>
    </div>
  );
};

export default ListRender;
