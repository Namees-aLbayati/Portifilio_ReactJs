import React,{useState} from 'react'
import { Document, Page } from 'react-pdf';

function Resume() {
   
  const array=[0,1,2,3,4]
  const index=array.indexOf(2);
const slices=[...array.slice(0,index)]
const rest=[...array.slice(index)]
const add=[...slices,9,...rest]
const pu=array.pop()
  console.log(pu,'here ')

    return (
      <h1>resume</h1>
    );
}

export default Resume
