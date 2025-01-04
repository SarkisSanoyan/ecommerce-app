# E-commerce App with Cart

This project is an e-commerce application featuring a shopping cart functionality. It uses a React-based frontend and a JSON server for backend simulation to manage product data.

## Features

- Display a list of products.
- Add products to the cart.
- Change products quantity in the cart.
- Remove products from the cart.
- View cart totals.
- Cart content is saved in local storage.
- Backend data managed using a JSON server.

## Project Structure

- **Frontend**: React-based user interface.
- **Backend**: JSON Server to simulate an API for managing product data.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SarkisSanoyan/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the JSON Server**:
   Run the following command to start the backend server:
   ```bash
   json-server --watch products.json --port 5000
   ```
   This will start a JSON server and serve the `products.json` file at `http://localhost:5000`.

4. **Start the Frontend**:
   Open another terminal and run:
   ```bash
   npm start
   ```
   This will start the React development server and open the application in your default browser at `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

- `npm start`: Starts the React development server.
- `json-server --watch products.json --port 5000`: Starts the JSON server.

## Example Data (`products.json`)

```json
{
    "products": [
        {
            "id": 1,
            "title": "MacBook Air M1",
            "price": 1890,
            "src": "https://qvc.scene7.com/is/image/QVC/e/38/e241338.004?$aempdzoom$"
        },
        {
            "id": 2,
            "title": "Dell VOSTRO 5620",
            "price": 1790,
            "src": "https://laptopmedia.com/wp-content/uploads/2021/06/5-1-e1622724668275.jpeg"
        }
    ]
}
```

## Folder Structure

```plaintext
src/
├── App.js
├── index.js
products.json
```

## Deployment

For production, create a build using:
```bash
npm run build
```
This will create an optimized production build in the `build` directory.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to fork, modify, and use this project for your own purposes. Contributions are welcome!


