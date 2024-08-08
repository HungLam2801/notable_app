import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import './quill-custom.css'; // Import CSS tùy chỉnh
import './App.css';

const App: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');

  const handleChange = (content: string) => {
    setEditorContent(content);
  };

  const saveToFile = () => {
    const blob = new Blob([editorContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.txt';
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
        <ReactQuill value={editorContent} onChange={handleChange} />
      </div>
      <div className="buttons">
        <button onClick={saveToFile}>Save to File</button>
        <input type="file" accept=".txt" onChange={openFile} />
      </div>
      <div className="output">
        <h2>Content</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  );
};

export default App;
