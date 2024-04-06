import './footer.css';

export const Footer = () => {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/DaniDrury"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/danidrury/"
    },
  ];

  const iconList = icons.map(icon => (
    <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
  ));

  return (
    <footer className="flex-row px-2">
      {iconList}
    </footer>
  );
}