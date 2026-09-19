'use client';
import {useEffect,useRef,type ReactNode} from 'react';

/** Keeps keyboard focus and the overlay inside the simulated device. */
export default function Modal({title,children,onClose,className=''}:{title:string;children:ReactNode;onClose:()=>void;className?:string}) {
  const ref=useRef<HTMLDivElement>(null);
  const close=useRef(onClose);
  useEffect(()=>{close.current=onClose;},[onClose]);
  useEffect(()=>{
    const overlay=ref.current!;
    const previous=document.activeElement as HTMLElement|null;
    const siblings=Array.from(overlay.parentElement!.children).filter(el=>el!==overlay) as HTMLElement[];
    siblings.forEach(el=>el.inert=true);
    const controls=()=>Array.from(overlay.querySelectorAll<HTMLElement>('button:not(:disabled), input, select, a[href], [tabindex="0"]'));
    controls()[0]?.focus();
    const handle=(event:KeyboardEvent)=>{
      if(event.key==='Escape'){event.preventDefault();close.current();}
      if(event.key==='Tab'){
        const items=controls(),first=items[0],last=items.at(-1);
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
        else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
      }
    };
    overlay.addEventListener('keydown',handle);
    return()=>{siblings.forEach(el=>el.inert=false);overlay.removeEventListener('keydown',handle);if(previous?.isConnected)previous.focus();};
  },[]);
  return <div ref={ref} className="modal-backdrop"><section className={`app-dialog ${className}`} role="dialog" aria-modal="true" aria-label={title}><h2>{title}</h2>{children}</section></div>;
}
