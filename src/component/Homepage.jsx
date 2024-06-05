import React from "react";
import "./style.css";
import logo from "../img/avr.png";
import Navbar from "./Navbar";
import lounge1 from "../img/lounge 1.png";
import lounge2 from "../img/lounge 2.png";
import lounge3 from "../img/lounge 3.png";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div class="container">
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div id="carouselExampleFade" class="carousel slide carousel-fade">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={lounge3} alt="avr img" />
                </div>
                <div class="carousel-item">
                  <img src={lounge1} alt="avr img" />
                </div>
                <div class="carousel-item">
                  <img src={lounge2} alt="avr img" />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleFade"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div class="row" className="avr-home">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-1">
              <div class="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                <img src={logo} alt="avr img" height={200} width={450} />
              </div>
              <div class="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <ul>
                  <br />
                  <li>
                    Track Flights: Monitor your flight status in real-time,
                    including departures, arrivals, gate changes, and potential
                    delays. Never miss a beat!
                  </li>
                  <li>
                    Terminal Maps: Find your way effortlessly with interactive
                    airport terminal maps. Locate gates, restaurants, shops, and
                    restrooms with ease.
                  </li>
                  <li>
                    Nearby Amenities: Discover restaurants, shops, and lounges
                    near your location. Grab a bite, browse duty-free, or relax
                    in a lounge – all at your fingertips.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="home-text">Explore Airport Lounges</div>
        <div class="row">
          <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
              <div class="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div class="card">
                  <img
                    src="https://www.plazapremiumlounge.com/PlazaPremiumLounge/media/PPLMedia/Lounges/YYZ/YYZ_T3_Int._New/PPL_YYZ_Gallery_4.jpg?ext=.jpg"
                    class="card-img-top"
                    alt="..."
                    height={300}
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <h4>Plaza Premium Lounge (International)</h4>
                      <br />
                      Lester B. Pearson International Airport
                      <br />
                      Terminal 3
                    </p>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div class="card">
                  <img className="img"
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/24/7e/57/caption.jpg?w=1200&h=-1&s=1"
                    class="card-img-top"
                    alt="..."
                    height={300}
                    
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <h4>Plaza Premium Lounge (International)</h4>
                      <br />
                      Vancouver International Airport
                      <br />
                      Domestic Terminal
                    </p>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <div class="card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7mOlLNlhvPwo0OAx6ZPExC7GyUJU8vO9G6EF8GQBQWXUSdqZouFTl-CdyhclMlnrmSWU&usqp=CAU"
                    class="card-img-top"
                    alt="..."
                    height={300}
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <h4>
                        Air France and KLM Lounge Managed by Plaza Premium Group
                      </h4>
                      <br />
                      Pierre Elliott Trudeau International Airport
                      <br />
                      Main Terminal
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
