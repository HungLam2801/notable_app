import React from 'react';

interface NotesListProps {
  notes: { [key: string]: string };
  onLoadNote: (title: string) => void;
  onDeleteNote: (title: string) => void;
}

const NotesList: React.FC<NotesListProps> = ({ notes, onLoadNote, onDeleteNote }) => {
  const downloadNote = (title: string) => {
    const content = notes[title];
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${title}.txt`; // Tên file theo tiêu đề ghi chú
    link.click();
  };

  return (
    <div className="saved-notes">
      <h2>Saved Notes</h2>
      {Object.keys(notes).length === 0 ? (
        <p>No notes saved yet.</p>
      ) : (
        <ul>
          {Object.keys(notes).map((title) => (
            <li key={title} className="note-item">
              <button onClick={() => onLoadNote(title)}>{title}</button>
              <button onClick={() => downloadNote(title)}>Download</button>
              <button onClick={() => onDeleteNote(title)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotesList;
