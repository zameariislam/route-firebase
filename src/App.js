import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import FriendDetail from "./components/FriendDetail";
import Friends from "./components/Friends";
import Home from "./components/Home";
import LayOut from "./components/LayOut";
import NotFound from "./components/NotFound";



function App() {


  const router = createBrowserRouter([

    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          path: 'home',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'friends',
          loader: () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          },


          element: <Friends />
        },
        {
          path: 'friend/:friendId',

          loader:async ({ params }) => {
            return await fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },


          element: <FriendDetail />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />

    }



  ])






  return <RouterProvider router={router}></RouterProvider>
}

export default App;
