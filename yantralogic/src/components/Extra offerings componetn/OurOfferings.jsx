import React, { useState } from 'react';

const Solutions = () => {
  const tabs = [
    { title: 'Software Development', content: 'A software development company with 35 years of business excellence...' },
    { title: 'Testing & QA', content: 'Testing & QA content goes here...' },
    { title: 'Application Services', content: 'Application Services content goes here...' },
    { title: 'UX/UI Design', content: 'UX/UI Design content goes here...' },
    { title: 'IT Consulting', content: 'IT Consulting content goes here...' },
    { title: 'Data Analytics', content: 'Data Analytics content goes here...' },
    { title: 'Help Desk Services', content: 'Help Desk Services content goes here...' },
    { title: 'Infrastructure Services', content: 'Infrastructure Services content goes here...' },
    { title: 'Cybersecurity Services', content: 'Cybersecurity Services content goes here...' },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-1/4 bg-slate-800 text-white p-4">
        <h2 className="text-xl font-semibold mb-6">Explore Our Offering</h2>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={`p-3 cursor-pointer ${activeTab.title === tab.title ? 'bg-blue-600' : 'hover:bg-blue-500'}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-8">
        <h2 className="text-2xl font-bold mb-4">{activeTab.title}</h2>
        <p className="text-lg">{activeTab.content}</p>
      </div>
    </div>
  );
};

export default Solutions;
