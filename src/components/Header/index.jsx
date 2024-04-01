export const Header = (props) => {
  return (
    <header className="flex-row space-between px-1">
      <h1>Dani Drury</h1>
      {/* why props.children? In App.jsx, we're not passing props to Header... what does this do? */}
      {props.children}
    </header>
  );
}