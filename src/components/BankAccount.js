import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { depositMoney, withdrawMoney } from '../redux/actions';

const BankAccount = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Bank Account</h1>
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-xl mb-4">Balance: ${balance}</h2>
        <div className="flex space-x-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => dispatch(depositMoney(10))}
          >
            Deposit $10
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            onClick={() => dispatch(withdrawMoney(10))}
          >
            Withdraw $10
          </button>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
