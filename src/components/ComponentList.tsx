import React from 'react';

// User Management:

// Profile
// Settings
// Security
// Product Pages:

// Featured Products
// Categories
// Search Results
// Admin Panel:

// Dashboard
// Users
// Content Management
// Documentation:

// Getting Started
// API Reference
// Examples
// Support:

// FAQ
// Contact Us
// Troubleshooting
// Resources:

// Tutorials
// Blog
// Downloads
// Social Media:

// Facebook
// Twitter
// Instagram
// Billing:

// Invoices
// Payment Methods
// Subscription
// Analytics:

// Overview
// Reports
// Insights
// Help Center:

// Knowledge Base
// Support Tickets
// Community Forums

const routes = [
  {
    title: "Navigation",
    elements: [
      {
        to: "/navbar",
        text: "NavBar"
      },
      {
        to: "/footer",
        text: "Footer"
      }
    ]
  },
  {
    title: "Support",
    elements: [
      {
        to: "/faq",
        text: "FAQ"
      },
      {
        to: "/contact",
        text: "Contact"
      }
    ]
  },
  {
    title: "Components",
    elements: [
      {
        to: "/loading",
        text: "Loading"
      },
      {
        to: "/button",
        text: "Buttons"
      },
      {
        to: "/modal",
        text: "Modal"
      }
    ]
  }
];

const ComponentList = () => {
  return (
    <div>
      {/* {routes.} */}
    </div>
  );
};

export default ComponentList;
