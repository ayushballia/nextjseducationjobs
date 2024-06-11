"use client"

import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const TextEditor = () => {
  const [value, setValue] = useState('');

  return (
    <div className="border border-gray-300 rounded-[6px] bg-white mb-6">
      <ReactQuill
        value={value}
        onChange={setValue}
        className="rounded-[6px]"
        theme="snow"
        modules={{
          toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
            [{ 'align': [] }],
          ],
        }}
        formats={[
          'header', 'font',
          'list', 'bullet',
          'bold', 'italic', 'underline',
          'link', 'image', 'align',
        ]}
      />
    </div>
  );
};

export default TextEditor;
