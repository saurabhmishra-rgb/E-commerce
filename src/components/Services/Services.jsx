import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Fast Delivery",
      description: "Get your favorite meals delivered to your doorstep within 30 minutes. Our efficient delivery network ensures your food arrives hot and fresh.",
      icon: "🚚",
      features: ["30-minute delivery", "Real-time tracking", "Contactless delivery"]
    },
    {
      id: 2,
      title: "Quality Assurance",
      description: "We partner with only the best restaurants and ensure every meal meets our high standards of quality and taste.",
      icon: "⭐",
      features: ["Verified restaurants", "Quality checks", "Fresh ingredients"]
    },
    {
      id: 3,
      title: "Easy Ordering",
      description: "Order food with just a few taps on your phone. Our user-friendly app makes dining convenient and hassle-free.",
      icon: "📱",
      features: ["One-click ordering", "Multiple payment options", "Order history"]
    },
    {
      id: 4,
      title: "Customer Support",
      description: "Our dedicated support team is available 24/7 to help you with any questions or concerns about your orders.",
      icon: "💬",
      features: ["24/7 support", "Quick resolution", "Personal assistance"]
    },
    {
      id: 5,
      title: "Diverse Menu",
      description: "Choose from thousands of restaurants offering cuisines from around the world. From local favorites to international delicacies.",
      icon: "🍽️",
      features: ["Wide variety", "Global cuisines", "Dietary options"]
    },
    {
      id: 6,
      title: "Secure Payments",
      description: "Your payment information is protected with bank-level security. Pay safely with multiple payment methods.",
      icon: "🔒",
      features: ["Secure transactions", "Multiple payment methods", "No hidden fees"]
    }
  ];

  return (
    <div className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>Experience the best food delivery service with our comprehensive range of features designed for your convenience.</p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">
              <span className="icon-emoji">{service.icon}</span>
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, index) => (
                <li key={index}>
                  <span className="feature-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h2>Ready to Experience Our Services?</h2>
        <p>Join thousands of satisfied customers who trust us for their daily meals.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Services;
