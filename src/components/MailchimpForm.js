import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Newsletter } from "./Newsletter";


export const MailchimpForm = () => {
  const milestones = [
    {
      year: '2024',
      title: 'Started Freelancing',
      description: 'Began my journey as a freelance web developer, working on various projects for clients around the world.',
    },
    {
      year: '2022',
      title: 'Graduated from University',
      description: 'Graduated with a degree in Computer Science, gaining a solid foundation in programming and software development.',
    },
    {
      year: '2020',
      title: 'Internship at Tech Company',
      description: 'Completed a summer internship at a leading tech company, where I worked on developing web applications.',
    },
    {
      year: '2018',
      title: 'First Website',
      description: 'Created my first website, sparking my interest in web development and setting the path for my career.',
    },
  ];

  return (
    <div className="journey">
      <h2>My Journey</h2>
      <ul className="timeline">
        {milestones.map((milestone, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-year">{milestone.year}</div>
            <div className="timeline-content">
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
