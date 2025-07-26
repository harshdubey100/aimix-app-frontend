import React from 'react';

function Library() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold text-primary">📚 AiMix Library</h1>
        <p className="text-muted fs-5">
          Explore a curated collection of study materials, eBooks, courses, and digital resources.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">E-Books</h5>
              <p className="card-text text-muted">
                Access a wide range of academic and competitive exam eBooks in PDF format.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Lecture Notes</h5>
              <p className="card-text text-muted">
                Download subject-wise notes contributed by top educators and institutions.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Video Tutorials</h5>
              <p className="card-text text-muted">
                Watch recorded classes and concept explanation videos from industry experts.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Past Year Papers</h5>
              <p className="card-text text-muted">
                Solve real exam papers from previous years to boost your confidence.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">MCQ Banks</h5>
              <p className="card-text text-muted">
                Practice from a large question bank categorized by topic and difficulty.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Interactive Quizzes</h5>
              <p className="card-text text-muted">
                Test your knowledge in real-time with dynamic, auto-evaluated quizzes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
