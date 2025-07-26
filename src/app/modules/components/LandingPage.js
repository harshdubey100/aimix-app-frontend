import React from 'react';
import AIML from './assets/AIML.png';
import FullStack from './assets/FullStack.png';
import PromptEngineering from './assets/PromptEngineering.png';
import '../../css/global.css';

function LandingPage() {
  return (
    <div className="container mt-5">
      {/* CAROUSEL */}
      <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img src={AIML} className="d-block  carousel-image" alt="AIML" />
          </div>
          <div className="carousel-item">
            <img src={FullStack} className="d-block  carousel-image" alt="Full Stack" />
          </div>
          <div className="carousel-item">
            <img src={PromptEngineering} className="d-block  carousel-image" alt="Prompt Engineering" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>











      {/* CARDS SECTION */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src={AIML} className="card-img-top" alt="AIML Course" />
            <div className="card-body">
              <h5 className="card-title">AI & ML</h5>
              <p className="card-text">Master Artificial Intelligence and Machine Learning from scratch.</p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src={FullStack} className="card-img-top" alt="Full Stack" />
            <div className="card-body">
              <h5 className="card-title">Full Stack Dev</h5>
              <p className="card-text">Become a professional full stack developer with real projects.</p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm">
            <img src={PromptEngineering} className="card-img-top" alt="Prompt Engineering" />
            <div className="card-body">
              <h5 className="card-title">Prompt Engineering</h5>
              <p className="card-text">Unlock the power of AI with expert prompt engineering skills.</p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
      </div>

      {/* You can add more sections like testimonials, pricing, etc. below */}
    </div>
  );
}

export default LandingPage;
