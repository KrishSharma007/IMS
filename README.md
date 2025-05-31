# Electronics Inventory Management System (IMS)

A modern, responsive inventory management system built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- 📊 Real-time Dashboard with Analytics
- 📦 Product Management (CRUD Operations)
- 🏷️ Category-wise Organization
- 📈 Stock Level Monitoring
- 🚨 Low Stock Alerts
- 💰 Value Tracking
- 🌙 Dark Theme UI
- 📱 Fully Responsive Design

## Tech Stack

- **Frontend:** React.js, Bootstrap, react-icons
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Deployment:** Render (Free Tier)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/KrishSharma007/IMS.git
cd IMS
```

2. Install Backend Dependencies

```bash
cd Backend
npm install
```

3. Install Frontend Dependencies

```bash
cd ../Frontend/inventory_management_system
npm install
```

4. Set up Environment Variables

```bash
# Backend/.env
MONGODB_URI=your_mongodb_connection_string
PORT=3001

# Frontend/.env
REACT_APP_API_URL=http://localhost:3001/api
```

5. Run the Application

```bash
# Terminal 1 - Backend
cd Backend
npm run dev

# Terminal 2 - Frontend
cd Frontend/inventory_management_system
npm start
```

## Deployment

The application is configured for deployment on Render:

- Backend Web Service: Node.js
- Frontend Static Site: React
- Database: MongoDB Atlas

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[ISC](https://choosealicense.com/licenses/isc/)
