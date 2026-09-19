'use client';

import {useCallback,useEffect,useState} from 'react';

export function useTextToSpeech(){
  const[isSpeaking,setIsSpeaking]=useState(false);
  const[isSupported,setIsSupported]=useState(true);

  useEffect(()=>{
    const supported=typeof window!=='undefined'&&'speechSynthesis'in window&&'SpeechSynthesisUtterance'in window;
    // Browser capability is read after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsSupported(supported);
    return()=>{if(supported)window.speechSynthesis.cancel()};
  },[]);

  const stop=useCallback(()=>{
    if(typeof window!=='undefined'&&'speechSynthesis'in window)window.speechSynthesis.cancel();
    setIsSpeaking(false);
  },[]);

  const speak=useCallback((text:string)=>{
    if(typeof window==='undefined'||!('speechSynthesis'in window)||!('SpeechSynthesisUtterance'in window)){
      setIsSupported(false);
      return false;
    }
    window.speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(text);
    utterance.lang='es-AR';
    const voices=window.speechSynthesis.getVoices();
    utterance.voice=voices.find(voice=>voice.lang.toLowerCase()==='es-ar')||voices.find(voice=>voice.lang.toLowerCase().startsWith('es'))||null;
    utterance.onstart=()=>setIsSpeaking(true);
    utterance.onend=()=>setIsSpeaking(false);
    utterance.onerror=()=>setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    return true;
  },[]);

  return{isSpeaking,isSupported,speak,stop};
}
