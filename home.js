function Home(){
  const ctx = React.useContext(UserContext);
  
  return (
    <Card
      bgcolor="primary"
      txtcolor="white"
      header="BadBank Landing Page"
      title="Welcome to the BadBank"
      text="Create a new Account With Us!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
