# eCommerce Store Project

A React-based eCommerce store built with TypeScript, featuring product browsing, cart management, and a checkout process.

## 🚀 Features

- Product browsing with search functionality
- Individual product pages with detailed information
- Shopping cart management
- Checkout process
- Contact form with validation
- Responsive design
- State management with Redux
- Form handling with React Hook Form
- API integration with axios
- Type safety with TypeScript

## 🛠️ Technologies

- React 18
- TypeScript
- Redux Toolkit
- React Router v6
- React Query
- React Hook Form
- Axios
- TailwindCSS
- Font Awesome
- Yup validation
- Husky (Git hooks)
- Prettier (Code formatting)

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 🔧 Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/    # Reusable components
├── pages/         # Page components
├── store/         # Redux store configuration
├── hooks/         # Custom hooks
├── types/         # TypeScript types/interfaces
├── utils/         # Utility functions
└── api/          # API integration
```

## 📝 Pages

- **Homepage**: Display products with search functionality
- **Product Page**: Individual product details and add to cart option
- **Cart Page**: Shopping cart management
- **Checkout Success**: Order confirmation
- **Contact**: Contact form with validation

## 🔄 API Integration

The application integrates with the Noroff API:

- Base URL: `https://v2.api.noroff.dev/online-shop`
- Individual products: `https://v2.api.noroff.dev/online-shop/{id}`

## 🚥 Scripts

- `npm start`: Start development server
- `npm build`: Build for production
- `npm test`: Run tests
- `npm run eject`: Eject from Create React App

## 🧪 Testing

Tests are written using Jest and React Testing Library. Run tests with:

```bash
npm test
```

## 📦 Deployment

The project is configured for deployment on Netlify. Pushing to the main branch will trigger automatic deployment.

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_API_URL=https://v2.api.noroff.dev/online-shop
```

## 📜 License

This project is licensed under the MIT License.
