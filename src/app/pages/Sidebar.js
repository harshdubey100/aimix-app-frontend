import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaCoins,
  FaPen, 
  FaUserCircle, 
  FaGraduationCap, 
  FaChalkboardTeacher, 
  FaUniversity, 
  FaBookOpen, 
  FaPhoneAlt, 
  FaUserTie 
} from 'react-icons/fa';
import { MdOutlineLaptopChromebook } from 'react-icons/md';
import { BsCart3 } from 'react-icons/bs';
import { BiLibrary } from 'react-icons/bi';

export default function Sidebar() {
  return (
    <div className="d-none d-md-block bg-white border-end sidebar p-3">
      <ul className="nav flex-column">

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="Study">
            <FaPen className="me-1" />
            Study
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="">
            <MdOutlineLaptopChromebook className="me-2" />
            Batches
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="Aimix-Center">
            <FaUniversity className="me-2" />
            Aimix-Center
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="Store">
            <BsCart3 className="me-2" />
            Store
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="TestYourKnowledge">
            <FaBookOpen className="me-2" />
            Test Your Knowledge
          </Link>
        </li>

        <hr />

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="BetaProgram">
            <FaUserTie className="me-2" />
            Beta Program
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="ScholarshipProgram">
            <FaGraduationCap className="me-2" />
            Scholarship Program
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="JobAssistance">
            <FaChalkboardTeacher className="me-2" />
            Job Assistance
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="Library">
            <BiLibrary className="me-2" />
            Library
          </Link>
        </li>

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="ContactUs">
            <FaPhoneAlt className="me-2" />
            Contact Us
          </Link>
        </li>

        <hr />

        <li className="nav-item mb-1">
          <Link className="nav-link text-dark d-flex align-items-center" to="Profile">
            <FaUserCircle className="me-2" />
            Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-dark d-flex align-items-center" to="AiMix-coins">
            <FaCoins className="me-2" />
            AiMix-coin
          </Link>
        </li>

      </ul>
    </div>
  );
}
