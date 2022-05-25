import MyContext from '../../MyContext';
import './Dashboard.css';

function Dashboard() {
  return (
    <MyContext.Consumer>
      {
        value => (
          <div className='Dashboard'>
            <p>Dashboard</p>
          </div>
        )
      }
    </MyContext.Consumer>
  );
}

export default Dashboard;