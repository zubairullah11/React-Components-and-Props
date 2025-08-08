import React from 'react';
import './App.css';

function Header() {
  return <h1>User Profiles</h1>;
}

function UserCard({ name, role }) {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

function App() {

  const userName = "Zubair Ullah";
  const userRole = "Front-end Web Developer";
  const user2Name = "Azaz ur Rehman";
  const user2Role = "Front-end Web Developer"

  return (
    <>
      <Header />

      <UserCard name={userName} role={userRole} />
      <UserCard name={user2Name} role={user2Role} />

      <UserCard name="Ibaad Ullah" role="Graphic Designer Designer" />
      <UserCard name="Imdaad Ullah" role="WordPress Developer" />
    </>
  );
}

export default App;