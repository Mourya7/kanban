import React from 'react';
import Notes from './Notes';
import uuid from 'uuid';
import '../main.css';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';


class App extends React.Component {

    render() {
      const {notes} = this.props;
      return (
        <div>
          {/*<input className="newNote" type="text" value={this.state.value} onChange={this.handleChange}/>*/}
          <button className="add-note" onClick={this.addNote}>+</button>
          <Notes notes={notes} onDelete = {this.deleteNote}/>
        </div>
      );
    }

    deleteNote = (id,e) => {
      e.stopPropagation();
      this.props.NoteActions.delete(id);
    }

    /*handleChange  = (event) => {
      this.setState({value:event.target.value});
    }*/

    addNote  = () => {
      /*if(!this.state.value) {
        return;
      }*/
      this.props.NoteActions.create({
        id: uuid.v4(),
        task: 'New task'
      });
    }
}


export default connect(({notes}) => ({
  notes
}), {
  NoteActions
})(App)
