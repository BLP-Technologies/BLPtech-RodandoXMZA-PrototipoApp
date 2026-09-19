export default function Icon({name}:{name:string}) {
  const paths:Record<string,React.ReactNode>={
    home:<><path d="m3 10 9-7 9 7v11h-6v-8H9v8H3Z"/></>,
    routesHub:<><path d="m3 5 6-2 6 2 6-2v16l-6 2-6-2-6 2Z M9 3v16 M15 5v16"/></>,
    report:<><path d="M12 3 2 21h20Z M12 9v5"/><circle cx="12" cy="17" r=".7" fill="currentColor"/></>,
    tutorials:<path d="m6 3 15 9-15 9Z"/>,
    search:<><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></>,
    plus:<path d="M12 4v16 M4 12h16"/>,
    star:<path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/>,
    place:<><path d="M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></>,
  };
  return <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]||paths.place}</svg>;
}
