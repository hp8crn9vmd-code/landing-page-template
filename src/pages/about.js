
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';

export default function PlaceholderPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <Container className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h1>
          <p className="text-gray-600 text-lg">
            This page is currently under construction. <br />
            Please return to the <a href="/" className="text-blue-600 hover:underline">Home Page</a>.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
