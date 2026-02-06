export default function Privacy() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how The Banjo Studios
              ("we," "our," or "us") collects, uses, and protects your personal information when
              you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contact Information:</strong> Name and email address submitted through our contact form.</li>
              <li><strong>Newsletter Subscriptions:</strong> Email addresses provided for newsletter sign-ups.</li>
              <li><strong>Usage Data:</strong> Anonymous analytics data such as pages visited, browser type, and device information.</li>
              <li><strong>Cookies:</strong> We use cookies to store your theme preference (dark/light mode).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to your inquiries submitted through our contact form.</li>
              <li>To send newsletters and updates if you have subscribed.</li>
              <li>To improve our website and services based on usage patterns.</li>
              <li>To maintain and improve website functionality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information with trusted service providers who assist us in operating our website
              (such as Formspree for contact form processing), subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information. However,
              no method of transmission over the Internet is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Request access to the personal data we hold about you.</li>
              <li>Request correction or deletion of your personal data.</li>
              <li>Opt out of newsletter communications at any time.</li>
              <li>Request that we stop processing your personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please
              contact us through our{' '}
              <a href="/contact" className="text-blue-500 hover:text-blue-400 underline">
                contact page
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
