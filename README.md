# eCommerce Store Project
![Homepage](./screenshots/Javascript_frameworks.png)
A React-based eCommerce store built with TypeScript, featuring product browsing, cart management, and a checkout process.

## 🌐 Live Demo

Check out the live demo: [eCommerce Store](https://obsessandposess.netlify.app/)

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
git clone https://github.com/BergitTveit/ecom-store-bergit
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

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

Email: bergittveit@gmail.com

Project Link: [https://github.com/BergitTveit/ecom-store-bergit](https://github.com/BergitTveit/ecom-store-bergit)

## 📜 License

This project is licensed under the MIT License.
