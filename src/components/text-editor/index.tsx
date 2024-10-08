'use client';

import { BASE_URL } from '@/utils/axios';
import React, { useState } from 'react';

interface TextInputComponentProps {
  relayId: string;
  onSubmitted: (text: string) => void;
}

export default function TextInputComponent({ relayId, onSubmitted }: TextInputComponentProps) {
  const [text, setText] = useState<string>('');

  const onChange = (e: any) => {
    setText(e.target.value);
  }

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(`https://rndci5pmbd.execute-api.ap-northeast-2.amazonaws.com/relay`, {
      method: 'POST',
      body: JSON.stringify({ content: text, bookId: relayId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      onSubmitted(text);
      setText('');
      alert('전송되었습니다.');
    }
  }

  return (
    <div className="w-full text-primary-text">
      <form onSubmit={onSubmit}>
        <textarea
          value={text}
          onChange={onChange}
          className="w-full h-20 text-sm resize-none outline-none rounded-lg box-border shadow-lg p-3 mb-6"
          placeholder="Type your text here..."
        />
        <button type='submit' className="w-full px-2 py-1 rounded-md border-t border-b border-l border-r border-gray-200 hover:bg-gray-50">
          전송
        </button>
      </form>
    </div>
  )
}