export default class Note {
    constructor(user) {
        this.user = user;
    }

    getNotes() {
        return JSON.parse(localStorage.getItem("notes"));
    }

    saveNote(note, notes,title,message) {
        let comments = [];
        if (note.id) {
            for (let i = 0; i < notes.length; i++) {
                if (note.id != notes[i].id) {
                    comments.push(notes[i]);
                }
            }
            comments = [...comments, { title, message, id: note.id }];
        } else {
            comments = [...notes, { title, message, id: Math.random() }];
        }
        localStorage.setItem("notes", JSON.stringify(comments));
    }

    updateNote(event, notes) {
        let comment = notes.filter((note) => {
            return note.id == event.target.id
        })
        return comment;
    }

    deleteNote(event, setNotes,notes) {
        let comments = notes.filter((note) => {
            return note.id != event.target.id
        })
        localStorage.setItem("notes", JSON.stringify(comments));
        setNotes(comments);
    }
}