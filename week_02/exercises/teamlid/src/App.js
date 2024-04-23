import './App.css';
import TeamLeader from './components/TeamLeader';
import TeamMember from './components/TeamMember';


function App() {
  return (
    <div className='App'>
      <TeamLeader 
        firstName="Benoît" 
        secondName="Biraguma" 
        role="Team Leader" 
        email="beno2001@hotmail.com"
        phone="+32486237538"
        image="https://via.placeholder.com/150"
      />
      <TeamMember
        firstName="John"
        secondName="Doe"
        role="Backend Developer"
        email="johndoe@hotmail.com"
        phone="+32486237538"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
