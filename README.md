# Flipkart-Clone 

#### An e-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js) that replicates the features and functionality of Flipkart. This project provides a comprehensive shopping experience, with distinct roles for admin and users.

![GitHub stars](https://img.shields.io/github/stars/ganeshsriprasad/flipkart-clone) 
![GitHub forks](https://img.shields.io/github/forks/ganeshsriprasad/flipkart-clone)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

<img src="templates/quiz ui.png" width="900"> 

## Features

### User Features
- **Browse Products**: Users can explore various product categories and view detailed product information.
- **User Authentication**: Secure signup and login functionality with JWT authentication.
- **Account Management**: Users can manage their profile, view order history, and update their information.
- **Product Search & Filters**: Users can search for products and filter them based on categories and other criteria.
- **Add to Cart & Checkout**: Users can add products to their cart and proceed to a secure checkout with payment integration.
- **Order Tracking**: Users can track the status of their orders and receive notifications.

### Admin Features
- **Product Management**: Admins can add, update, or delete products and manage product details.
- **Category Management**: Admins can create and manage product categories.
- **Order Management**: Admins can view, update, and manage orders, including order statuses.
- **Dashboard**: Admins have access to a dashboard for monitoring sales and other key metrics.

## Tech Stack

- **Frontend**: React.js, Redux for state management, Bootstrap for styling.
- **Backend**: Node.js, Express.js
- **Database**: MongoDB for data storage
- **Authentication**: JWT (JSON Web Token) for secure authentication
- **Payment Integration**: Secure payment options (e.g., Stripe, Razorpay)
- **Deployment**: Deployed using platforms like Heroku, Vercel, or AWS

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flipkart-clone.git
   ```

2.**Navigate to the project directory**
 ```bash
cd flipkart-clone
```
3.**Backend Setup**
Install server dependencies

```bash

cd backend
npm install
```

4.**Set up environment variables: Create a .env file in the backend folder and add the following:**

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYMENT_SECRET_KEY=your_payment_gateway_secret_key
```

5.**Start the backend server**

```bash
npm run dev
```

6.**Frontend Setup**
Install client dependencies

```bash
cd ../frontend
npm install
```

7.**Set up environment variables: Create a .env file in the frontend folder and add the following:**

```bash
REACT_APP_API_URL=http://localhost:5000
REACT_APP_PAYMENT_PUBLIC_KEY=your_payment_gateway_public_key
```

8.**Start the frontend server**

```bash
npm start
```

## Getting Started with Create React App
This project was bootstrapped with Create React App.

## Available Scripts
In the project directory, you can run:

## npm start
Runs the app in the development mode.
## Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

## npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

---

## Dependencies
### Backend
- Express: Fast and minimalist web framework
- Mongoose: MongoDB object modeling tool
- JWT: For authentication and authorization
- Bcrypt: To hash passwords

### Frontend
- React: For building the user interface
- Redux: State management
- Axios: HTTP client for API requests
- Bootstrap: For responsive design
### Future Enhancements
- Implement wish lists and product reviews
- Improve UI/UX with advanced animations and designs
- Add real-time chat support for customer service
- Enhance the admin dashboard with analytics and reporting

### Contributing
Feel free to contribute to this project by opening issues or submitting pull requests. Follow the contributing guidelines.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Acknowledgments
Flipkart for inspiration
The open-source community for various libraries and tools

