import React from 'react';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>
      
      <section className="terms-section">
        <h2>Introduction</h2>
        <p>
          Welcome to our website. These terms and conditions outline the rules and regulations for the use of our service. By accessing or using our service, you agree to comply with these terms.
        </p>
      </section>

      <section className="terms-section">
        <h2>Use of Service</h2>
        <p>
          You may only use this service for lawful purposes and in accordance with these Terms. You agree not to use the service:
        </p>
        <ul>
          <li>In any way that violates any applicable local, state, or international law.</li>
          <li>To transmit any harmful or illegal content.</li>
          <li>To interfere with the proper operation of the service.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>Account Responsibility</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account and password. You agree to notify us immediately of any unauthorized access or use of your account.
        </p>
      </section>

      <section className="terms-section">
        <h2>Limitation of Liability</h2>
        <p>
          Our liability for any damages arising from the use of this service is limited to the fullest extent permitted by law. We are not responsible for any loss or damage caused by third-party services or actions outside our control.
        </p>
      </section>

      <section className="terms-section">
        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify or replace these terms at any time. You should review this page periodically for any updates. Your continued use of the service after any changes constitutes acceptance of the updated terms.
        </p>
      </section>

      <section className="terms-section">
        <h2>Contact Us</h2>
        <p>
          If you have any questions about these terms, please contact us at <a href="mailto:support@example.com">support@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Terms;
