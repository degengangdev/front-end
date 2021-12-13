import React, { useState, useContext } from 'react';
import { ContextProvider, MyContext } from "../providers/contextProvider";

export default function TestWalletContext() {
  const [books, setbooks] = useContext(MyContext);
  return (
    <div className="pt-24">
      <h1 className="text-white">{books.name}</h1>
      <p className="text-white">{books.author}</p>
      <p className="text-white">{books.serialNumber}</p>
      <button className="text-white" onClick={() => { setbooks({
          name: "Dune",
          author: "Frank Herbert",
          SerialNumber: 457
        }) }}>Click me</button>
    </div>
  );
}

