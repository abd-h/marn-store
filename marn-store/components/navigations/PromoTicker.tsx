'use client';
import { useEffect, useState } from 'react';

const messages = [
    "Free delivery over £200",
    "Book a store appointment",
    "10% student discount ",
    "Easy returns within 30 days"
];

export default function PromoTicker() {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 3000);
        return () => clearInterval(interval)
    }, []);
    
    return (
      <p
        className="transition-opacity duration-500 ease-in-out tracking-[0.15em]"
        role="status"
      >
        {messages[index]}
      </p>
    );
}