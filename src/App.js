import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from '../capstone-translation/src/Controller/Auth';
import MyRoutes from '../capstone-translation/src/Controller/Routes';
import './App.css';


function App() {
  return (
    <AuthContextProvider>
    <MyRoutes />
    </AuthContextProvider>
  );
}

export default App;
