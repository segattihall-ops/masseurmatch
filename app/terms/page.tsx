export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-6">
        <header>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">Legal</p>
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: 31 October 2025</p>
        </header>

        <section className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            MasseurMatch is currently in a pre-launch preview. By engaging with the site or our AI concierge “Knotty,” you
            acknowledge that the platform is shared for informational purposes only and does not constitute professional, medical,
            or legal advice.
          </p>
          <p>
            All conversations may be reviewed to improve the service experience. Please avoid sharing sensitive personal
            information. We do not guarantee the accuracy of AI-generated responses and encourage independent verification of any
            recommendations.
          </p>
        </section>

        <section className="space-y-2 text-sm text-gray-400 leading-relaxed">
          <h2 className="text-base font-semibold text-white">During the preview you agree to:</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use respectful language when interacting with Knotty or the MasseurMatch community.</li>
            <li>Comply with all applicable laws and confirm you are at least 18 years old.</li>
            <li>
              Understand that directory listings, availability, and pricing are subject to change prior to the public launch of
              MasseurMatch.
            </li>
          </ul>
        </section>

        <section className="space-y-3 text-sm text-gray-300 leading-relaxed">
          <p>
            A full Terms &amp; Conditions document, including privacy and payment policies, will be released before the official
            launch. If you have questions, reach us at
            {" "}
            <a href="mailto:hello@masseurmatch.com" className="text-white underline">
              hello@masseurmatch.com
            </a>
            .
          </p>
          <p className="text-gray-500">
            By continuing to use this preview you acknowledge these temporary terms and consent to receive waitlist updates from
            the MasseurMatch team.
          </p>
        </section>
      </div>
    </main>
  );
}
