import React, { useState, useRef, useEffect } from 'react';
import './text-storer.css';
import TextDisp from './TextDisp';
import {v4 as uuidv4} from 'uuid';

const TextStorer = () => {
  const TEXT_STORAGE_KEY = "TextKey";
  const [isViewButtonVisible, setViewButtonVisible] = useState(true);
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [isMainPage, setMainPage] = useState(true);
  const [texts, setTexts] = useState(
    ()=>{
      const curTexts = JSON.parse(localStorage.getItem(TEXT_STORAGE_KEY))
      return curTexts||[]
    }
  );
  const text_title = useRef()
  const full_text = useRef()
  useEffect(()=>{
    localStorage.setItem(TEXT_STORAGE_KEY, JSON.stringify(texts))
  }, [texts])
  const handleViewTexts = () => {
    setMainPage(false);
    setViewButtonVisible(false);
    setAddFormVisible(false);
    const fetchedTexts = texts;
    setTexts(fetchedTexts);
  };

  const handleAddNewText = () => {
    setMainPage(false);
    setViewButtonVisible(true);
    setAddFormVisible(true);
  };
  function addText(e){
    e.preventDefault();
    const title = text_title.current.value;
    const text = full_text.current.value;

    if(title == ""||text == ""){alert('Title or text field cannot be empty')
  return}
  setTexts((prevTexts)=>{
    return [...prevTexts, {id : uuidv4(), title : title, text  :text}]
  });
  text_title.current.value = ""
  full_text.current.value = ""
  alert('pushed')
  }
  function deleteText(id){
    const newTexts = texts.filter(text=>text.id != id)
    setTexts(newTexts)
  }
  return (
    <div className='text-hero-container'>
      <div className="text-sub-container">
        <div className="left-container">
          {isViewButtonVisible && (
            <button className='btn btn-view' onClick={handleViewTexts}>View Texts</button>
          )}
          {isAddFormVisible && (
            <form className='text-adder-form' onSubmit={addText}>
              <label htmlFor="text-adder">Text Title</label>
              <input ref = { text_title}type="text" id="text-adder" />
              <textarea ref = {full_text} cols="30" rows="10" placeholder='Write your text here...'></textarea>
              <button type="submit">Push into Texts</button>
            </form>
          )}
        </div>
        <div className="right-container">
          {!isAddFormVisible && (
            <button className='btn btn-add' onClick={handleAddNewText}>Add New Text</button>
          )}
        </div>
      </div>
      {/* Display the texts here */}
      {!isAddFormVisible && !isMainPage&&texts.length > 0 && (
        <div className="text-list">
          {texts.map((text) => (
            <TextDisp key = {text.id} text = {text} handleDelete = {deleteText}/>
          ))}
        </div>
      )}
      {!isMainPage && !isAddFormVisible&& texts.length==0 &&
      <div>There are no texts to display! Please add Some</div>
      }
    </div>
  );
};

export default TextStorer;
