import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Root from "./routes/root";
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import FAQPage from './pages/components/support/FAQPage';
import ContactPage from './pages/components/support/ContactPage';
import PricingPage from './pages/components/subscriptions/PricingPage';
import TablePage from './pages/components/presentations/TablePage';
import CardPage from './pages/components/presentations/CardPage';
import SliderPage from './pages/components/interactions/SliderPage';
import ModalPage from './pages/components/components/ModalPage';
import DropdownPage from './pages/components/interactions/DropdownPage';
import ReviewPage from './pages/components/support/ReviewPage';
import TextPage from './pages/components/components/TextPage';
import ListPage from './pages/components/presentations/ListPage';
import TogglePage from './pages/TogglePage';
import TestimonialPage from './pages/components/support/TestimonialPage';
import CarouselPage from './pages/components/presentations/CarouselPage';
import NotificationPage from './pages/components/components/NotificationPage';
import Components from './routes/components';
import HomePage from './pages/HomePage';
import ComponentPage from './pages/ComponentPage';
import ButtonPage from './pages/components/interactions/ButtonPage';
import LoaderPage from './pages/components/components/LoaderPage';

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
            { path: "pricing", element: <PricingPage /> },
            { path: "faq", element: <FAQPage /> },
            { path: "contacts", element: <ContactPage /> },
            { path: "reviews", element: <ReviewPage /> },
            { path: "testimonials", element: <TestimonialPage /> },
    
            { path: "loaders", element: <LoaderPage /> },
            { path: "texts", element: <TextPage /> },
            { path: "modals", element: <ModalPage /> },
            { path: "notifications", element: <NotificationPage /> },
    
            { path: "carousels", element: <CarouselPage /> },
            { path: "tables", element: <TablePage /> },
            { path: "lists", element: <ListPage /> },
            { path: "cards", element: <CardPage /> },
    
            { path: "sliders", element: <SliderPage /> },
            { path: "buttons", element: <ButtonPage /> },
            { path: "dropdowns", element: <DropdownPage /> },
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
