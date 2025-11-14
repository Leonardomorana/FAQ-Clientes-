import React, { useState, useMemo, useRef } from 'react';
import { FAQ_DATA, STEPPER_DATA } from './constants';
import FaqItem from './components/FaqItem';
import SearchBar from './components/SearchBar';
import Stepper from './components/Stepper';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const faqSectionRef = useRef<HTMLElement>(null);

  const handleStepClick = (stepTitle: string) => {
    const newSelectedStep = selectedStep === stepTitle ? null : stepTitle;
    setSelectedStep(newSelectedStep);
    setSearchTerm(''); // Reset search on step change
    
    // Scroll to FAQ section after a short delay to allow state update
    setTimeout(() => {
      faqSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  const clearFilter = () => {
    setSelectedStep(null);
  };

  const filteredFaqs = useMemo(() => {
    let faqs = FAQ_DATA;

    if (selectedStep) {
      faqs = faqs.filter((faq) => faq.step === selectedStep);
    }

    if (searchTerm) {
      faqs = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return faqs;
  }, [searchTerm, selectedStep]);

  return (
    <div className="font-sans text-slate-900 p-4 sm:p-6 lg:p-8">
      <main>
        <section id="stepper" className="mb-12 rounded-lg bg-white p-6 shadow-md overflow-x-auto">
           <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Bem vindo ao fale conosco</h2>
          <Stepper steps={STEPPER_DATA} selectedStep={selectedStep} onStepClick={handleStepClick} />
        </section>

        <section id="faq" ref={faqSectionRef} className="rounded-lg bg-white p-6 shadow-md scroll-mt-4">
          <div className="mb-8">
            {selectedStep ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-800">
                  Dúvidas sobre: <span className="text-emerald-600">{selectedStep}</span>
                </h2>
                <button onClick={clearFilter} className="mt-2 text-sm font-semibold text-emerald-600 hover:underline">
                  Mostrar todas as dúvidas
                </button>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-800">Dúvidas Frequentes</h2>
                <p className="mt-2 text-slate-500">Encontre respostas para as perguntas mais comuns.</p>
              </div>
            )}
          </div>

          <div className="mx-auto mb-8 max-w-2xl">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          <div className="mx-auto max-w-3xl">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => <FaqItem key={index} faq={faq} />)
            ) : (
              <p className="py-8 text-center text-slate-500">
                Nenhum resultado encontrado. Tente redefinir o filtro ou buscar por outros termos.
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
