import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { HomePage } from '../pages/HomePage';
import { PropertiesPage } from '../pages/PropertiesPage';
import { PropertyDetailsPage } from '../pages/PropertyDetailsPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { ListPropertyPage } from '../pages/ListPropertyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'properties', element: <PropertiesPage /> },
      { path: 'properties/:id', element: <PropertyDetailsPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: 'list-property', element: <ListPropertyPage /> },
    ],
  },
]);