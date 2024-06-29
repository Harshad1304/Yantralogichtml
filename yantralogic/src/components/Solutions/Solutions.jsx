import React from 'react';

function Solutions() {
  const solutions = [
    "Enterprise applications", "ERP", "Financial management", "Supply chain management",
    "Asset management", "Fleet management", "HR software", "eLearning software",
    "eCommerce", "Mobile apps", "Collaboration and productivity solutions", "Content management",
    "CRM", "Data analytics", "Web portals", "ITSM"
  ];

  return (
    <div className="bg-slate-800 text-white flex flex-col items-center justify-center min-h-screen w-full p-6">
      <h1 className="text-4xl font-bold mb-8">Solutions We Deliver</h1>
      <p className="text-lg mb-12">We IT-enable all kinds of B2B, B2C interactions and internal operations.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-slate-300 text-slate-900 rounded-lg p-6 flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {solution}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
