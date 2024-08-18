import React from 'react';


const TimelineItem = ({ date, title, description, icon }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="date">{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={`circle ${icon}`}></span>
    </div>
  </div>
);

const EducationTimeline = () => {
  const educationData = [
    {
      date: '2018',
      title: '10th Standard',
      description: 'Passed out from Air Force School.',
      icon: 'school'
    },
    {
      date: '2020',
      title: '12th Standard',
      description: 'Completed 12th from St. Claret University.',
      icon: 'graduation'
    },
    {
      date: '2023',
      title: 'Bachelor of Computer Application',
      description: 'Completed BCA from Kristu Jayanti College.',
      icon: 'graduation'
    },
    {
      date: '2023 - Present',
      title: 'Master of Computer Application',
      description: 'Currently pursuing MCA at Christ University.',
      icon: 'book'
    }
  ];

  return (
    <div className="timeline-container" id="education">
      {educationData.map((data, idx) => (
        <TimelineItem key={idx} {...data} />
      ))}
    </div>
  );
};

export default EducationTimeline;