import React from 'react'
import './NoteCard.css'
import DeleteIcon from './delete.png';
import axios from 'axios';

function NoteCard( {_id,title,content,category , loadNotes}) {


  return (
    <div className='note-card'>
     <h3 className='note-card-title' >{title}</h3>
     <p className='note-card-conatent'>{content}</p>
     <span className='note-card-category'>{category}</span>
     <img src={DeleteIcon} alt='Delete-icon' className='Delete-icon' 
      />
    </div>
  )
}

export default NoteCard
