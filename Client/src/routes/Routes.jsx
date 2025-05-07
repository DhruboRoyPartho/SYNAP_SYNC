import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login-register/Login";
import UserRegister from "../pages/login-register/UserRegister";
import StudentHome from "../dashboard/student/StudentHome";
import Dashboard from "../layout/DashboardLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/register',
        element: <UserRegister />
      },
      {
        path: '/login',
        element: <Login />
      },

    ]
  },

  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // Admin
      // {
      //   path: 'adminHome',
      //   element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      // },
      // {
      //   path: 'allParcels',
      //   element: <AdminRoute><AllParcels></AllParcels></AdminRoute>
      // },
      // {
      //   path: 'allUsers',
      //   element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      // },
      // {
      //   path: 'allDeliveryMans',
      //   element: <AdminRoute><AllDeliveryMan></AllDeliveryMan></AdminRoute>
      // },

      // Student
      {
        path: 'studentHome',
        element: <StudentHome></StudentHome>
      },
      // {
      //   path: 'bookParcel',
      //   element: <UserRoute><BookParcel></BookParcel></UserRoute>
      // },
      // {
      //   path: 'userProfile',
      //   element: <UserRoute><UserProfile></UserProfile></UserRoute>
      // },
      // {
      //   path: 'update/:id',
      //   element: <UserRoute><UpdateParcel></UpdateParcel></UserRoute>
      // },
      // {
      //   path: 'payment/:id',
      //   element: <UserRoute><Payment></Payment></UserRoute>
      // },
      // {
      //   path: 'paymentSuccess',
      //   element: <UserRoute><PaymentSuccess></PaymentSuccess></UserRoute>
      // },

      
    ]
  }
]);