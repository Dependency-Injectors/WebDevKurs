import { useEffect, useState } from "react";

const Help = () => {
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>(
    []
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqError, setFaqError] = useState(false);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("./faqs.json");
        if (!res.ok) throw new Error("FAQ konnte nicht geladen werden.");
        const data = await res.json();
        setFaqs(data);
      } catch {
        setFaqError(true);
      }
    };
    void fetchFaqs();
  }, []);

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Hilfe & Ressourcen</h1>
      <ul className="space-y-4 mb-8">
        <li>
          <a
            href="/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            📖 README – Projektübersicht & Befehle
          </a>
        </li>
        <li>
          <a
            href="/ONBOARDING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            🚦 Onboarding – Schritt-für-Schritt Einstieg
          </a>
        </li>
        <li>
          <a
            href="/TUTORIAL.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            📝 Tutorial – Schnellstart ins Projekt
          </a>
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
      <div className="space-y-2">
        {faqError ? (
          <div className="border rounded-lg bg-red-50 text-red-700 px-4 py-3">
            Die FAQs konnten nicht geladen werden. Bitte versuche es später
            erneut.
          </div>
        ) : (
          faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg">
              <button
                className="w-full text-left px-4 py-3 font-medium focus:outline-none dark:focus:bg-gray-700 dark:hover:bg-gray-500 focus:bg-blue-50 hover:bg-blue-50"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                {faq.question}
              </button>
              {openIndex === idx && (
                <div className="px-4 py-3 text-gray-50 border-t bg-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Help;
