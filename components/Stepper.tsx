import React from 'react';
import type { Step } from '../types';

interface StepperProps {
  steps: Step[];
  selectedStep: string | null;
  onStepClick: (stepTitle: string) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, selectedStep, onStepClick }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between relative">
        {/* Horizontal line for desktop */}
        <div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-sky-300 -z-0"></div>
        <div className="hidden md:block absolute top-4 left-0 w-full h-0.5 bg-sky-600 -z-0" style={{
            width: selectedStep ? `${(steps.findIndex(s => s.title === selectedStep) / (steps.length -1)) * 100}%` : '0%',
            transition: 'width 0.5s ease-in-out',
        }}></div>

        {steps.map((step, index) => {
          const isActive = selectedStep === step.title;
          return (
            <div key={index} className="flex-1 group z-10">
              <button
                onClick={() => onStepClick(step.title)}
                className="flex items-center md:flex-col md:items-center w-full text-left md:text-center p-2"
                aria-pressed={isActive}
              >
                <div className="flex items-center w-full md:w-auto md:flex-col">
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full text-white flex items-center justify-center font-bold transition-all duration-300 border-2 border-transparent bg-white
                      ${
                        isActive ? 'bg-sky-600 scale-110' : 'bg-slate-400 group-hover:bg-sky-500'
                      }`}
                  >
                     <span className={`h-full w-full rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-sky-600' : 'bg-sky-600 group-hover:bg-sky-500'}`}>{index + 1}</span>
                  </div>
                   {index < steps.length - 1 && (
                    <div className="flex-auto border-t-2 border-sky-600 transition-all duration-300 mx-2 md:hidden"></div>
                  )}
                   <p className={`text-lg font-semibold ml-4 md:hidden ${isActive ? 'text-sky-700' : 'text-slate-800'}`}>{step.title}</p>
                </div>
                <div className="hidden md:block mt-4 w-full md:px-2">
                  <p className={`text-md font-semibold ${isActive ? 'text-sky-700' : 'text-slate-800'}`}>{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1 h-20">{step.description}</p>
                </div>
                <div className="pl-8 md:hidden pb-8 mt-2">
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>
                 {index < steps.length - 1 && (
                  <div className="h-full min-h-16 border-l-2 border-sky-600 ml-4 md:hidden"></div>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
