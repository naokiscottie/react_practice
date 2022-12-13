import { ColorMessage } from "./components/ColorMessage";
import { useState } from "react";
import {useEffect} from 'react';


export const App = () =>{


  
  const [num,setNum] = useState(0);

  //初回時及びnumが変更される時のみ動作
  // useEffect(()=>{
  //   alert('num変更');
  // },[num]);
  
  //初回時のみ動作
  // useEffect(()=>{
  //   alert('初回のみ動作');
  // },[]);

  console.log('レンダリング');


  const onClickButton = () => {
   //setNum(num + 1);
   setNum((prev)=>prev+1);
  };


  return(

    <>
    <h1 style={ {color:"red"} }>hello</h1>
    <ColorMessage color="red">いつか</ColorMessage>
    <ColorMessage color="pink">genki</ColorMessage>
    <button onClick={onClickButton}>ボタン</button>
    <p>{num}</p>
    </>
    
  );

};