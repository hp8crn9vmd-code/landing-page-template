
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import FeatureCard from '../components/FeatureCard';
import Testimonial from '../components/Testimonial';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Alert from '../components/Alert';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* 1. Global Header */}
      <Header />

      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <Hero 
          variant="with_video" 
        />

        {/* 3. Social Proof Section */}
        <SocialProof />

        {/* 4. Key Features Section */}
        <section id="features" className="py-20 bg-gray-50" aria-label="Key Features">
          <Container>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Everything you need to scale
              </h2>
              <p className="text-lg text-gray-500">
                Powerful features designed to help marketing teams launch faster.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[0, 1, 2, 3].map((index) => (
                <FeatureCard 
                  key={index} 
                  index={index} 
                  variant="icon_top"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* 5. Testimonial Section */}
        <section className="py-20 bg-white" aria-label="Customer Testimonials">
          <Container className="max-w-4xl">
            <Testimonial 
              index={0} 
              variant="with_avatar" 
            />
          </Container>
        </section>

        {/* 6. Primary CTA Form Section */}
        <section id="contact" className="py-20 bg-blue-50" aria-label="Contact Form">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column: Copy */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Ready to boost your conversions?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Join 5,000+ marketing teams who use our template system to launch campaigns in minutes, not weeks.
                </p>
                
                <div className="space-y-4">
                  <Alert type="success" title="Free Trial">
                    No credit card required for the first 14 days.
                  </Alert>
                  <Alert type="info" title="Support">
                    24/7 priority support for enterprise teams.
                  </Alert>
                </div>
              </div>

              {/* Right Column: Form */}
              <div>
                <Form />
              </div>

            </div>
          </Container>
        </section>

      </main>

      {/* 7. Global Footer */}
      <Footer />
    </div>
  );
}
