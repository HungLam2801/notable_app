import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './App.css';
import NotesList from './component/NotesList';

const App: React.FC = () => {
  const [editorContent, setEditorContent] = useState<string>('');
  const [noteTitle, setNoteTitle] = useState<string>(''); // Tiêu đề ghi chú
  const [savedNotes, setSavedNotes] = useState<{ [key: string]: string }>({}); // Lưu các ghi chú

  // Lấy các ghi chú đã lưu từ localStorage khi ứng dụng khởi động
  useEffect(() => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      setSavedNotes(JSON.parse(notes));
    }
  }, []);

  const handleChange = (content: string) => {
    setEditorContent(content);
  };

  // Lưu ghi chú vào localStorage với tên
  const saveToLocalStorage = () => {
    if (!noteTitle) {
      alert('Please enter a title for the note.');
      return;
    }

    const updatedNotes = { ...savedNotes, [noteTitle]: editorContent };
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    alert('Note saved successfully!');
  };

  // Tải ghi chú từ localStorage
  const loadNote = (title: string) => {
    const content = savedNotes[title];
    if (content) {
      setEditorContent(content);
      setNoteTitle(title);
    }
  };

  // Xóa ghi chú khỏi localStorage
  const deleteNote = (title: string) => {
    const updatedNotes = { ...savedNotes };
    delete updatedNotes[title];
    setSavedNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    alert('Note deleted successfully!');
  };

  return (
    <div className="App">
      {/* Cột bên trái - Notes List */}
      <header>
        <h1>Text Editor</h1>
      </header>
      <div className="main-content ">
            <div className="notes-list-container">
              <NotesList notes={savedNotes} onLoadNote={loadNote} onDeleteNote={deleteNote} />
            </div>

            {/* Cột bên phải - React Quill */}
            <div className="editor-container">
            <input
              type="text"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              placeholder="Enter note title"
              className="note-title-input"
            />
            <div className="buttons">
              <button onClick={saveToLocalStorage}>Save Note</button>
            </div>
            <div className="text-editor">
              <ReactQuill value={editorContent} onChange={handleChange} />
            </div>
            
            </div>
      </div>
    </div>
  );
};

export default App;
