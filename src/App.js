import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <table border="1">
    <tr>
    <th className='blackBackground'>First Name</th>
    <th className='whiteBackground'>Last Name</th>
    <th className='blackBackground'>Image</th>
    </tr>
    <tr>
      <td className='whiteBackground'>Shravani</td>
      <td className='blackBackground'>Gunjal</td>
      <td><img src="../assets/DSC_0482.JPG"width="50px"></img></td>
    </tr>
    <tr>
      <td className='blackBackground'>Rutuja</td>
      <td className='whiteBackground'>Date</td>
      <td className='blackBackground'><img src="../assets/DSC_0488.JPG"width="50px" className='whiteBackground'></img></td>
    </tr>
    <tr>
      <td className='whiteBackground'>Trusha</td>
      <td className='blackBackground'>Nimse</td>
      <td><img src="../assets/DSC_0498.JPG"width="50px"></img></td>
    </tr>
    <tr>
      <td className='blackBackground'>Gaurav</td>
      <td className='whiteBackground'>Pawar</td>
      <td className='blackBackground'><img src="../assets/DSC_0495.JPG"width="50px"></img></td>
    </tr>
    <tr>
      <td className='whiteBackground'>Shardul</td>
      <td className='blackBackground'>Pawar</td>
      <td><img src="../assets/DSC_0497.JPG"width="50px"></img></td>
    </tr>
    <tr>
      <td className='blackBackground'>Anamika</td>
      <td className='whiteBackground'>Kute</td>
      <td className='blackBackground'><img src="../assets/DSC_0485.JPG"width="50px"></img></td>
    </tr>
    </table>
    </div>
  );
}

export default App;
