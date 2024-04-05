import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Root from "./routes/root";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import SubscriptionPage from './pages/SubscriptionPage';
import TablePage from './pages/TablePage';
import ButtonPage from './pages/ButtonPage';
import CardPage from './pages/CardPage';
import SliderPage from './pages/SliderPage';
import ModalPage from './pages/ModalPage';
import DropdownPage from './pages/DropdownPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "subscription", element: <SubscriptionPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "modal", element: <ModalPage /> },
      { path: "table", element: <TablePage /> },
      { path: "slider", element: <SliderPage /> },
      { path: "button", element: <ButtonPage /> },
      { path: "card", element: <CardPage /> },
      { path: "dropdown", element: <DropdownPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
