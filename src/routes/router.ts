import AppLayout from "@/layouts/AppLayout";
import PublicLayout from "@/layouts/PublicLayout";
import FeedPage from "@/pages/FeedPage";
import HomePage from "@/pages/homepage/HomePage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: PublicLayout,
    children: [

      {
        path: '/',
        Component: HomePage
      },

      {
        path: '/login',
        Component: LoginPage
      },
      {
        path: '/register',
        Component: RegisterPage
      },

    ]
  },
  {
    Component: AppLayout,

    children: [
    {
        path: 'feed',
        Component: FeedPage

      }
    ]
  }
  ])
