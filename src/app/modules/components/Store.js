import React from 'react';

const products = [
  {
    id: 1,
    name: 'Smart Learning Tablet',
    description: '10-inch Android tablet preloaded with educational apps.',
    price: '₹12,499',
    image: '',
  },
  {
    id: 2,
    name: 'Noise-Cancelling Headphones',
    description: 'Perfect for distraction-free learning and online classes.',
    price: '₹3,299',
    image: '',
  },
  {
    id: 3,
    name: 'Digital Writing Pad',
    description: 'For quick handwritten notes and math problem solving.',
    price: '₹1,999',
    image: '',
  },
  {
    id: 4,
    name: 'Webcam (1080p)',
    description: 'HD webcam for smooth video conferencing and teaching.',
    price: '₹1,399',
    image: '',
  },
];

function Store() {
  return (
    <div className="container mt-5 pt-4">
      <div className="text-center mb-5">
        <h1 className="fw-bold">AiMix Store</h1>
        <p className="lead text-muted">Buy the best gadgets to power your education journey 🚀</p>
      </div>

      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text small">{product.description}</p>
                <h6 className="text-primary">{product.price}</h6>
                <button className="btn btn-outline-success mt-2" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
