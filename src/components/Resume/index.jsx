import './Resume.css';

export default function Resume() {
  return (
    <section className="mx-2">
      <a href="\src\assets\Drury Tech Resume.pdf" download>Download Resume</a>
      <div>
        <h3>Front End Skills</h3>
        <div>
          <ul className='skillsUl'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
            <li>React</li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Back End Skills</h3>
        <div>
          <ul className='skillsUl'>
            <li>Express.js</li>
            <li>MySQL/Sequelize.js</li>
            <li>MongoDB/Mongoose.js</li>
            <li>GraphQL/Apollo</li>
          </ul>
        </div>
      </div>
    </section>
  );
}