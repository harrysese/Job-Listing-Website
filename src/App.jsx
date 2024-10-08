const App = () => {
  const name1 = "John";
  const names = ['David', 'John', 'Samuel', 'Phillip'];
  const loggedIn=true
  return (
    <>
      <div className="bg-black text-white">App</div>
      <p>Hello {name1}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>  
        ))}
      </ul>
      {loggedIn?<h1>Welcome Member</h1>:<h1>Welcome Guest</h1>}
    </>
  );
};

export default App;
