export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Legal</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: 31 October 2025</p>
          <div className="mt-4 space-y-1 text-sm text-gray-400">
            <p>Service Provider: X RankFlow Media Group LLC</p>
            <p>Platform: MasseurMatch (powered by Twilio communications)</p>
          </div>
        </header>

        <section className="space-y-4 border-t border-gray-800 pt-6">
          <h2 className="text-xl font-semibold text-white">Pre-Launch Preview</h2>
          <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
            <p>
              MasseurMatch is currently in a pre-launch preview. By engaging with the site or our AI concierge "Knotty," you
              acknowledge that the platform is provided for informational purposes only and does not constitute professional, medical,
              or legal advice.
            </p>
            <p>
              All conversations may be reviewed to improve the service experience. Please avoid sharing sensitive personal
              information. We do not guarantee the accuracy of AI-generated responses and encourage independent verification of any
              recommendations.
            </p>
          </div>

          <div className="space-y-2 text-sm text-gray-400 leading-relaxed">
            <h3 className="text-base font-semibold text-white">During the preview you agree to:</h3>
            <ul className="list-disc space-y-2 pl-5">
              <li>Use respectful language when interacting with Knotty or the MasseurMatch community.</li>
              <li>Comply with all applicable laws and confirm you are at least 18 years old.</li>
              <li>
                Understand that directory listings, availability, and pricing are subject to change prior to the public launch of
                MasseurMatch.
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-300">
            A full Terms &amp; Conditions document, including privacy and payment policies, will be released before the official
            launch. If you have questions, contact{" "}
            <a href="mailto:hello@masseurmatch.com" className="text-white underline">
              hello@masseurmatch.com
            </a>
            .
          </p>
          <p className="text-sm text-gray-500">
            By continuing to use this preview you acknowledge these temporary terms and consent to receive wait-list updates from
            the MasseurMatch team.
          </p>
        </section>

        <section className="space-y-6 border-t border-gray-800 pt-6">
          <h2 className="text-2xl font-bold text-white">Full User Agreement &amp; Terms of Service</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">1. Acceptance of Terms</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                By accessing or using MasseurMatch, you agree to these Terms &amp; Conditions and our Privacy Policy. MasseurMatch
                uses Twilio Inc. to provide secure text and voice communications. By using these features, you also agree to Twilio's
                Terms of Service.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">2. Use of the Service</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300 leading-relaxed">
                <li>You may use this service only for lawful purposes.</li>
                <li>You agree not to misuse messaging or calling features for spam, harassment, or illegal activity.</li>
                <li>All communications are subject to Twilio's Acceptable Use Policy and applicable telecom regulations.</li>
                <li>You must be at least 18 years old to use the platform.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">3. Account Responsibility</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300 leading-relaxed">
                <li>You are responsible for maintaining the confidentiality of your login and contact information.</li>
                <li>Any actions taken through your account are your responsibility unless reported as unauthorized.</li>
                <li>X RankFlow Media Group LLC may suspend or terminate your account if you violate these Terms or Twilio's policies.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">4. Data &amp; Privacy</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300 leading-relaxed">
                <li>Calls and messages may be transmitted via Twilio's secure network.</li>
                <li>X RankFlow Media Group LLC and MasseurMatch do not sell or rent user data.</li>
                <li>Twilio may store limited metadata (timestamps, sender/receiver info).</li>
                <li>See Twilio Privacy Policy for details.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">5. Messaging Consent</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                By providing your phone number, you consent to receive communications about your account or bookings. You may opt out
                by replying STOP to texts or contacting support.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">6. Payments</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300 leading-relaxed">
                <li>Payments for premium services or communication credits are processed through our secure billing system.</li>
                <li>Twilio usage fees are included in your service cost; you won't be billed separately by Twilio.</li>
                <li>All payments are non-refundable unless required by law.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">7. Termination</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We may suspend or terminate access for misuse, non-payment, or policy violations. You may cancel your account anytime
                by contacting support. Termination does not waive responsibility for outstanding fees.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">8. Limitation of Liability</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Neither X RankFlow Media Group LLC nor Twilio is liable for indirect, incidental, or consequential damages arising
                from service use, delays, or data loss. Service reliability depends on third-party networks and Twilio's availability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">9. Updates to Terms</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We may update these Terms periodically. Updates take effect immediately upon posting. Continued use of the platform
                constitutes acceptance of revised terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">10. Contact</h3>
              <div className="text-sm text-gray-300 leading-relaxed space-y-1">
                <p>For questions or concerns:</p>
                <p>📧 <a href="mailto:legal@therankflow.com" className="text-white underline">legal@therankflow.com</a></p>
                <p>📞 <a href="tel:+18447939809" className="text-white underline">(844) 793-9809</a></p>
                <p>📍 X RankFlow Media Group LLC, Dallas, TX, USA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
