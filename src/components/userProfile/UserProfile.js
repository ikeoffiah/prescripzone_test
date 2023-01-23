import React from 'react'
import './userProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function UserProfile() {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  return (
    <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU" />
          </div>
          <h4>Kweku Boakye</h4>
          <p>Medical Doctor</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={toggleInfo}>
            <h4> Ghanian</h4>
            
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="card__content">
          Kweku Boakye is a patient who has been diagnosed with both sickle cell disease and asthma. Sickle cell disease is an inherited blood disorder that affects the red blood cells and can cause severe pain and organ damage. Asthma is a chronic lung condition that causes inflammation and narrowing of the airways, making it difficult to breathe
          </div>
        </div>
      </div>
  )
}

export default UserProfile