'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

const TransactionsPage = () => {
  const [transactions, setTransactions] = useState<string[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch("/api/transactions", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        
        setTransactions(data || []);
      } catch (err) {
        console.log(`Error fetching the transactions: ${err}`);
      }
    };

    fetchTransactions();
  }, []);

  const getTransactionDetails = () => {

  }

  return (
    <div className="bg-gray-900 text-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold font-mono mb-4">Transactions</h1>
      {transactions.length > 0 ? (
        <ul>
          {transactions.map((tx, index) => (
            <li key={index} className="mb-2">
              <Link
                href={`/transactions/${tx}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                {tx}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-xl font-bold mb-4">No transactions to display.</div>
      )}
    </div>
  );
};

export default TransactionsPage;
