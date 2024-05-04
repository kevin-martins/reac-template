import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Root from "./routes/root";
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import SubscriptionPage from './pages/SubscriptionPage';
import TablePage from './pages/TablePage';
import CardPage from './pages/CardPage';
import SliderPage from './pages/SliderPage';
import ModalPage from './pages/ModalPage';
import DropdownPage from './pages/DropdownPage';
import ReviewPage from './pages/ReviewPage';
import TextPage from './pages/TextPage';
import LinkPage from './pages/LinkPage';
import LoadingPage from './pages/LoadingPage';
import ListPage from './pages/ListPage';
import TogglePage from './pages/TogglePage';
import TestimonialPage from './pages/TestimonialPage';
import CarouselPage from './pages/CarouselPage';
import NotificationPage from './pages/NotificationPage';
import Components from './routes/components';
import HomePage from './pages/HomePage';
import ComponentPage from './pages/ComponentPage';
import ButtonPage from './components/buttons';

const router = createHashRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "components",
          element: <Components />,
          children: [
            { path: "/components", element: <ComponentPage /> },
            { path: "subscription", element: <SubscriptionPage /> },
            { path: "faq", element: <FAQPage /> },
            { path: "contact", element: <ContactPage /> },
            { path: "review", element: <ReviewPage /> },
            { path: "testimonial", element: <TestimonialPage /> },
    
            { path: "loading", element: <LoadingPage /> },
            { path: "text", element: <TextPage /> },
            { path: "modal", element: <ModalPage /> },
    
            { path: "carousel", element: <CarouselPage /> },
            { path: "table", element: <TablePage /> },
            { path: "list", element: <ListPage /> },
            { path: "card", element: <CardPage /> },
    
            { path: "slider", element: <SliderPage /> },
            { path: "button", element: <ButtonPage /> },
    
            { path: "link", element: <LinkPage /> },
            { path: "dropdown", element: <DropdownPage /> },
            
            { path: "notification", element: <NotificationPage /> },
          ]
        },

      ],
    }
  ]
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
