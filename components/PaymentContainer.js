import React from "react";

function PaymentContainer() {
    return (

        <div className="payment-container">
            <div className="payment">
                <div className="form-container">
                    <div className="form-card">
                        <div className="form">
                            <div className="fast-pay-section">
                                <div className="pix">PIX</div>
                                <div className="apple-pay">
                                    <img
                                        src="https://js.stripe.com/v3/fingerprinted/img/applePay-1a20e6d1f687dfd34571382ce7c4c23e.svg"
                                        alt="Apple Pay"
                                    />
                                </div>
                            </div>

                            <div className="separator">
                                <hr className="line" />
                                <p>ou pague com cartão</p>
                                <hr className="line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PaymentContainer