import uuid from 'uuid';

import NoteActions from '../actions/NoteActions';


export default class NoteStore {
  constructor() {

    this.bindActions(NoteActions);


    this.notes = [ ];
  }

  create(note) {
    this.setState({
      notes: this.notes.concat(note)
    });
  }
  update(updatedNote) {
    console.log('update note', updatedNote);
  }
  delete(id) {
    this.setState({
      notes:this.notes.filter(note => note.id !== id)
    });
  }

}
