import './About.css';

export default function About() {
  return (
    <section id='about' className='flex-row my-2'>
      <div id='img-div'>
        <img src={"src/assets/img/ProfilePhoto.jpg"} alt="Dani Drury headshot" />
      </div>
      <div id='p-div'>
        <p>Hi! I'm Dani, a junior fullstack web developer, recently completing the UC Berkeley Coding Bootcamp. I delight in creating user-friendly, practical, and performant web applications using HTML, CSS, Javascript, Node.js, HTMX, MySQL, MongoDB, and most recently, React!</p>
        <p>In addition to web applications, I build maintainable personal websites for individuals and small businesses through platforms such as WordPress and Wix. Please send me a message if you are interested in discussing your personal website needs!</p>
        <p>I look forward to continue building my skills within this fast-paced and ever evolving industry. Additional languages and technologies I am currently studying are Java and cloud services (AWS, Azure). If you are interested in collaborating on a project or learning more about me and my work, please don't hesitate to reach out!</p>
      </div>
    </section>
  );
}