import React, { act, useState } from 'react'
import { FadeInSection } from './FadeInSection';

export const GlassCard = ({ index, question, answer }) => {

  return (
    <FadeInSection>
      <div
        key={question}
        className="flex flex-col mx-auto items-center h-full text-center p-8 bg-white rounded-2xl shadow-sm"
      >
        <h2 className={`text-2xl font-semibold text-gray-800`}>
          {question}
        </h2>
        <p className="text-gray-600 mt-4">{answer}</p>
      </div>
    </FadeInSection>
  )
}
