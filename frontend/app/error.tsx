"use client";
import React from "react";

interface NotFoundPageProps {
  error: Error;
  reset: () => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ error, reset }) => {
  return (
    <div className="hero min-h-screen bg-base-200 h-screen w-full flex flex-col justify-center items-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error</h1>
          <p className="py-6">{error.message}</p>
          <button className="btn btn-primary mr-5" onClick={reset}>
            Try again
          </button>
          <a className="btn btn-primary" href="/dashboard">
            Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
