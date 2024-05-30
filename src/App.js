import './App.css';
// import consumer from './cable';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/main';
import { mainLoader } from './loaders/mainLoader';
import Error from './pages/Error';
import Dashborard from './pages/Dashboard';
import { dashboardLoader } from './loaders/dashboardLoader';
import { dashboardAction } from './actions/dashboardAction';

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
        element: <Dashborard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },

      // {
      //   path: 'expenses',
      //   element: <ExpensesPage />,
      //   errorElement: <Error />,
      //   loader: expenseLoader,
      //   action: expensesAction
      // },

      // {
      //   path: 'budget/:id',
      //   element: <BudgetPage />,
      //   errorElement: <Error />,
      //   loader: budgetLoader,
      //   action: budgetAction,
      //   children: [
      //     {
      //       path: "delete",
      //       action: deleteBudget,

      //     }
      //   ],

      // },
      // {
      //   path: 'logout',
      //   action: logoutAction
      // },

    ]
  },

])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
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
