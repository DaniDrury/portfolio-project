import './Header.css';

export const Header = (props) => {
  console.log(props);
  return (
    <header className="flex-row space-between px-1">
      <h1>Dani Drury</h1>
      {props.children}
    </header>
  );
}