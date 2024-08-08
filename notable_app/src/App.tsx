import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');
  const [fileName, setFileName] = useState<string>('document.txt');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditorContent(event.target.value);
  };

  const handleFileNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const saveToFile = () => {
    const blob = new Blob([editorContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  const openFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setEditorContent(content);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="App">
      <h1>Text Editor</h1>
      <div className="text-editor">
        <textarea 
          value={editorContent} 
          onChange={handleChange} 
          placeholder="Start typing..."
          rows={10}
          cols={80}
        />
      </div>
      <div className="buttons">
        <input 
          type="text" 
          value={fileName} 
          onChange={handleFileNameChange} 
          placeholder="Enter file name" 
        />
        <button onClick={saveToFile}>Save As</button>
        <input type="file" accept=".txt" onChange={openFile} />
      </div>
      <div className="output">
        <h2>Content</h2>
        <div>{editorContent}</div>
      </div>
    </div>
  );
};

export default App;
