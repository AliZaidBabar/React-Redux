# Redux Bank App

A simple banking application built with React and Redux, showcasing basic state management principles. The app allows users to deposit and withdraw money, with state managed centrally by Redux. Tailwind CSS is used for styling to enhance the visual appearance of the application.

## Features

- **Predictable State Management**: Centralized store using Redux.
- **UI Interaction**: Users can deposit and withdraw money.
- **Responsive Design**: Styled with Tailwind CSS for a modern, responsive design.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **State Management**: Redux

## Project Structure

```
/src
  /components
    - BankAccount.js  # Component for displaying the bank account UI
  /redux
    - actions.js      # Redux action creators
    - reducers.js     # Redux reducers
    - store.js        # Redux store configuration
  - App.js            # Main application component
  - index.js          # Entry point for React
  - index.css         # Global styles (includes Tailwind CSS)
```

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/redux-bank-app.git
   cd redux-bank-app
   ```

2. **Install Dependencies**

   Make sure you have Node.js installed. Then run:

   ```bash
   npm install
   ```

3. **Setup Tailwind CSS**

   Tailwind CSS is already configured. However, if you need to reconfigure, follow these steps:

   - Ensure `tailwind.config.js` and `postcss.config.js` are properly set up.
   - Add Tailwind CSS to your `index.css`:

     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Run the Application**

   Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## How to Use

- **Deposit Money**: Click the "Deposit $10" button to add $10 to the balance.
- **Withdraw Money**: Click the "Withdraw $10" button to subtract $10 from the balance.

## Contributing

Feel free to fork the project, submit issues, and make pull requests. For major changes, please open an issue first to discuss what you would like to change.


## Contact

If you have any questions or feedback, please reach out via [alizaidbaber@gmail.com](mailto:alizaidbaber@gmail.com).
