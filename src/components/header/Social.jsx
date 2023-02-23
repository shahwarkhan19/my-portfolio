import React from 'react'
import {BsLinkedin} from'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa'
const Social = ({linkedInLink,gitHubLink,faceBookLink}) => {
  return (
    <div className="header__socials">
        <a href={linkedInLink} target="_blank">
            <BsLinkedin/>
        </a>
        <a href={gitHubLink} target="_blank">
            <FaGithub/>
        </a>
        <a href={faceBookLink} target="_blank">
            <FaFacebookF/>
        </a>
    </div>
  )
}

export default Social