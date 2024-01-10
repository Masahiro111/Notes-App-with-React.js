export default function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }) {
    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
                {notes.map((note, i) => (
                    <div
                        key={i}
                        className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                        onClick={() => setActiveNote(note.id)}
                    >
                        <div className="sidebar-note-title">
                            <strong>{note.title}</strong>
                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>
                        <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last modified {new Date(note.lastModified).toLocaleDateString("ja-JP", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))}
            </div>
        </div >
    );
}