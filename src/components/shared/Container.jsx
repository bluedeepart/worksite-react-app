function Container({ cssClasses, children }) {
  const cls = cssClasses
    ? `container max-w-full xl:max-w-screen-xl ${cssClasses}`
    : "container max-w-full xl:max-w-screen-xl";
  return <div className={cls}>{children}</div>;
}

export default Container;
