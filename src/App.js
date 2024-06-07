import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// import consumer from './cable';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/main';
import { mainLoader } from './loaders/mainLoader';
import Error from './pages/Error';
import Dashborard from './pages/Dashboard';
import { dashboardLoader } from './loaders/dashboardLoader';
// import { dashboardAction } from './actions/dashboardAction';
import Login from './pages/Login';
import Register from './pages/Register';
import { ToastContainer } from 'react-toastify';
import { loginAction } from './actions/loginAction';
import ProtectedRoute from './ProtectedRoute';
import logoutAction from './actions/logoutAction';
import { NotFound } from './pages/NotFound';
import registerAction from './actions/registerAction';

// export const todoChannel = consumer.subscriptions.create({
//   channel: 'TodoChannel',
// }, {
//   connected: () => console.log('connected'),
//   disconnected: () => console.log('disconnected'),
//   received: data => console.log(data),
// })


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ProtectedRoute component={<Dashborard />} />,
        // loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: "login",
        action: loginAction,
        element: <Login />,
        errorElement: <Error />
      },
      {
        path: "register",
        element: <Register />,
        errorElement: <Error />
      },
      {
        path: 'logout',
        action: logoutAction
      },
      {
        path: '*',
        element: <NotFound />
      }

    ]
  },


])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}




// function App() {

//   const [name, setName] = useState('')
//   const [msg, setMsg] = useState('')
//   // ActionCable.server.



//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <input type="text" id='user' value={name} onChange={(e) => setName(e.target.value)} placeholder='User Name' />
//         <input type="text" id='msg' value={msg} onChange={(e) => setMsg(e.target.value)} placeholder='Message' />

//         <button
//           onClick={() => {

//             todoChannel.send(
//               {
//                 sent_by: { name },
//                 body: { msg }
//               }
//             )
//           }}
//         > Send message</button>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
