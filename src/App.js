import './App.css';
import About from './About/page';


import HomePage from './Home/page';
import Layout from './Layout/page';

import BecomeVolunteer from './Volunteer/page';
import Causes from './Causes/page';
import Events from './UpcomingEvents/page';

function App() {
  return (
    <div className="App">
      <Layout>
      <HomePage/>
      <Causes/>
      <About/>
      <Events/>
      <BecomeVolunteer/>
      </Layout>
 



    </div>
  );
}

export default App;
