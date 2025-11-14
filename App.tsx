
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Portal do Cliente</h1>
          <p className="mt-1 text-slate-500">Tudo o que você precisa saber sobre o seu novo lar.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section id="stepper" className="mb-12 rounded-lg bg-white p-6 shadow-md overflow-x-auto">
           <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">Sua Jornada Pós-Entrega</h2>
          <Stepper steps={STEPPER_DATA} selectedStep={selectedStep} onStepClick={handleStepClick} />
        </section>

        <section id="faq" ref={faqSectionRef} className="rounded-lg bg-white p-6 shadow-md scroll-mt-4">
          <div className="mb-8">
            {selectedStep ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-slate-800">
                  Dúvidas sobre: <span className="text-sky-600">{selectedStep}</span>
                </h2>
                <button onClick={clearFilter} className="mt-2 text-sm font-semibold text-sky-600 hover:underline">
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
      
      <footer className="py-6 text-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Portal do Cliente. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
