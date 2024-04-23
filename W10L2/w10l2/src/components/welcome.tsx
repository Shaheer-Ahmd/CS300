function Welcome() : JSX.Element {
  const objs = [
    {name: "John", age: 20},
    {name: "Jane", age: 21},
    {name: "Joe", age: 22}
  ];
  
    return (
        <div>
        <h1>Welcome to the React App</h1>
        <p>This is a simple React app.</p>
        <ul>
            {objs.map((obj, index) => (
            <li key={index}>{obj.name} is {obj.age} years old</li>
            ))}
        </ul>
        </div>
    );  
}

export default Welcome;