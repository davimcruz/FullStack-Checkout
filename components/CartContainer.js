import React from 'react';

function CartContainer() {
  return (
    <div className="cart-container">
      <div className="cart">
        <div className="resume-section">
          <div className="cart-label">
            <div className="subtotal-text">
              <span> Método Tiger 2.0 </span>
            </div>
            <div className="subtotal-price">
              <span> R$129.00 </span>
            </div>
          </div>
          <div className="cart-banner">
            <img src="/images/tiger.png" alt="Banner" />
          </div>
        </div>

        <div className="social-section">
          <div className="social-title">
            <span> Avaliações dos clientes </span>
          </div>

          <div className="customer-card">
            <div className="customer-info">
              <div className="customer-profile">
                <img src="/images/profile-1.jpg" alt="Customer Profile" />
              </div>
              <div className="customer-name">
                <span> Jonas A. </span>
              </div>
            </div>

            <div className="customer-text">
              <span>
                “Esse foi um dos melhores produtos que já comprei, didática
                excelente do produtor! Recomendaria para qualquer um, bacana
                demais!”
              </span>
            </div>
          </div>
          <div className="customer-card">
            <div className="customer-info">
              <div className="customer-profile">
                <img src="/images/profile-2.jpg" alt="Customer Profile" />
              </div>
              <div className="customer-name">
                <span> Maria A. </span>
              </div>
            </div>

            <div className="customer-text">
              <span>
                “Esse foi um dos melhores produtos que já comprei, didática
                excelente do produtor! Recomendaria para qualquer um, bacana
                demais!”
              </span>
            </div>
          </div>
          <div className="customer-card">
            <div className="customer-info">
              <div className="customer-profile">
                <img src="/images/profile-3.jpg" alt="Customer Profile" />
              </div>
              <div className="customer-name">
                <span> Alex D. </span>
              </div>
            </div>

            <div className="customer-text">
              <span>
                “Esse foi um dos melhores produtos que já comprei, didática
                excelente do produtor! Recomendaria para qualquer um, bacana
                demais!”
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
