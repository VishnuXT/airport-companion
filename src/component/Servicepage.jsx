import React from "react";
import Navbar from "./Navbar";

const Servicepage = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <br />
      <div className="container">
        <h1>Our Services</h1>
        <p>
          <h6>
            {" "}
            Airport Companion offers a range of features to simplify your
            airport experience.
          </h6>
          <br />
        </p>
        <div class="row">
          <div class="col col-12col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
              <div class="col col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/13563/13563197.png"
                  alt=""
                  height={80}
                  width={80}
                />
              </div>
              <div class="col col-9 col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11">
                <h4>Flight tracking</h4>
                <br />
                <h6>
                  We allows you to monitor the real-time location and status of
                  an aircraft during its journey. This information is typically
                  gathered from GPS data on board the airplane and transmitted
                  to ground stations.
                </h6>
              </div>
              <br />
              <div class="col col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/15305/15305287.png"
                  alt=""
                  height={80}
                  width={80}
                />
              </div>
              <div class="col col-9 col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11">
                <h3>AVR Visa Card Lounge Access & Perks</h3>
                <br />

                <b>
                  Visa offers access to airport lounges through various credit
                  card programs.{" "}
                </b>
                <ul>
                  <li>
                    <b>Complimentary Access:</b>AVR Visa cards provide a limited
                    number of free lounge visits per year.
                  </li>
                  <li>
                    <b>Discounted Access: </b>AVR Visa cards might offer
                    discounted entry fees to participating lounges.
                  </li>
                  <li>
                    <b>Priority Pass Membership:</b>AVR premium Visa cards
                    include a Priority Pass membership, granting access to a
                    wider network of lounges worldwide. (Priority Pass charges
                    separate fees for visits after the membership's free entries
                    are used)
                  </li>
                </ul>
              </div>
              <br />
              <div class="col col-3 col-sm-2 col-md-2 col-lg-1 col-xl-1 col-xxl-1">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  height={80}
                  width={80}
                />
              </div>
              <div class="col col-9 col-sm-10 col-md-10 col-lg-11 col-xl-11 col-xxl-11">
                <h3>AVR Visa Card Restaurants Access & Perks</h3>
                <br />
                <b>
                  Visa Airport Dining Privileges: Unlock Exclusive Perks at Top
                  Restaurants
                </b>
                <br />
                <ul>
                  <li>
                    <h6>Enjoy a World-Class Dining Experience with Visa</h6>
                    <ul>
                      <li>
                        Traveling can be stressful, but navigating airport
                        dining shouldn't be. Visa cardholders have access to a
                        variety of privileges and discounts at restaurants in
                        top airports worldwide.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicepage;
