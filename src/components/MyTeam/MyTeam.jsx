import React from 'react';
import styles from './MyTeam.module.css';
import { Row, Col } from 'antd';
import { FaLinkedin } from 'react-icons/fa';

// We'll use placeholder images until actual team photos are provided
// In a real implementation, you'd add these images to the public folder or assets
// and reference them properly
const teamMembers = [
  {
    id: 1,
    name: 'Sathish CP',
    title: 'Head of Sales Operations',
    description: 'Been an active operator in the Startup space since 2017, working closely with startups across sales, partnerships, Business development, and Strategy.',
    linkedIn: 'https://www.linkedin.com/in/sathish-cp/',
    // Using placeholder for now
    image: 'https://image.lexica.art/full_webp/59d8288c-16de-46d1-b080-a7da1c8599a6',
  },
  {
    id: 2,
    name: 'Harsha HA',
    title: 'Head of Partnerships',
    description: 'With 15 years of experience and a deep passion for Startups, I thrive on crafting solutions that drive desired Outcomes like efficiency, growth, innovation.',
    linkedIn: 'https://www.linkedin.com/in/harsha-ha/',
    // Using placeholder for now
    image: 'https://image.lexica.art/full_webp/59d8288c-16de-46d1-b080-a7da1c8599a6',
  },
  {
    id: 3,
    name: 'Kallol Dasgupta',
    title: 'Growth Consultant',
    description: 'Been actively engaged in the startup ecosystem as an advisor, consultant, strategic investor and board member. Skilled in evaluating market conditions, and competition.',
    linkedIn: 'https://www.linkedin.com/in/kallol-dasgupta/',
    // Using placeholder for now
    image: 'https://image.lexica.art/full_webp/59d8288c-16de-46d1-b080-a7da1c8599a6',
  },
];

const MyTeam = () => {
  return (
    <div id="team" className={`${styles.teamSection} w-full`}>
      <div className={styles.teamHeadingContainer}>
        <h2 className={styles.teamHeading}>
          <span className={styles.meetThe}>Meet the</span> <span className={styles.team}>Team</span>
        </h2>
      </div>

      <div className={styles.teamMembersContainer}>
        <Row gutter={[16, 32]} className={styles.teamRow}>
          {teamMembers.map((member) => (
            <Col key={member.id} xs={24} sm={24} md={8} lg={8} xl={8} className={styles.teamCol}>
              <div className={styles.memberCard}>
                <div className={styles.memberImageContainer}>
                  <div className={styles.memberImage}>
                    <img src={member.image} alt={member.name} />
                  </div>
                </div>
                
                <div className={styles.memberDetails}>
                  <div className={styles.nameWithLinkedIn}>
                    <a 
                      href={member.linkedIn} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.linkedInLink}
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <FaLinkedin className={styles.linkedInIcon} />
                      <h3 className={styles.memberName}>{member.name}</h3>
                    </a>
                  </div>
                  
                  <h4 className={styles.memberTitle}>{member.title}</h4>
                  <p className={styles.memberDescription}>{member.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default MyTeam;
