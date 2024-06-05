import React from "react";

import Navbar from "./Navbar";

const FAQpage = () => {
  return (
    <div>
      <Navbar />
      <div class="container">
        <h1>Frequently Asked Questions (FAQ)</h1>
        <br />
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
              <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div
                  class="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Who can use AVR Airport Companion?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        These benefits and services are available only to
                        holders of AVR Platinum, AVR Infinite and AVR Signature
                        cards issued in the countries of Latin America and
                        Caribbean (excluding Venezuela), which download the
                        mobile application named “AVR Airport Companion” (the
                        “App”), register and accept its terms and conditions.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        What are the benefits of AVR Airport Companion?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        Benefit that offers access to privileges and discounts
                        for a suite of airport amenities and services including
                        lounges, restaurant and retail discounts, private Wi-Fi
                        network and airport transportation service. Global
                        coverage: 140 countries. 450+ international airports.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        How to access airport lounge with AVR Airport Companion?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        A AVR Platinum/AVR Signature/AVR Infinite card is enough
                        to enter. You'll need to inform the lounge staff that
                        you are a LoungeKey member. A boarding pass and a form
                        of identification are also required. The name on your
                        card, the boarding pass and the ID must match.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQpage;
