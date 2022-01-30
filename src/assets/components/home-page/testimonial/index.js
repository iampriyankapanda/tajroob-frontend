import React from "react";
import Rating from "@mui/material/Rating";

export default function Testimonial() {
  const [value, setValue] = React.useState(2);
  return (
    <div className="testimonial-wrapper">
      <div className="container">
        <div className="text-center">
          <h6 className="testimonial-wrapper__title">Testimonials</h6>
          <h2 className="testimonial-wrapper__heading">
            Here’s why people choose Tajaroob
          </h2>
        </div>
        <div className="d-flex justify-content-between">
          <div className="testimonial-wrapper__testimonial-card">
            <ul>
              <li>
                <div className="testimonial-wrapper__testimonial-card-details d-flex align-items-center">
                  <div className="testimonial-wrapper__testimonial-profile">
                    <img
                      src="/images/home-page/profile-icon.png"
                      className="img-fluid testimonial-wrapper__testimonial-profile-image"
                    />
                  </div>
                  <div>
                    <h5 className="testimonial-wrapper__testimonial-profile-name">
                      Tamela Mann
                    </h5>
                    <p className="testimonial-wrapper__testimonial-profile-designation">
                      Chef
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-wrapper__testimonial-card-details d-flex align-items-center">
                  <div className="testimonial-wrapper__testimonial-profile">
                    <img
                      src="/images/home-page/profile-icon.png"
                      className="img-fluid testimonial-wrapper__testimonial-profile-image"
                    />
                  </div>
                  <div>
                    <h5 className="testimonial-wrapper__testimonial-profile-name">
                      Tamela Mann
                    </h5>
                    <p className="testimonial-wrapper__testimonial-profile-designation">
                      Chef
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-wrapper__testimonial-card-details d-flex align-items-center">
                  <div className="testimonial-wrapper__testimonial-profile">
                    <img
                      src="/images/home-page/profile-icon.png"
                      className="img-fluid testimonial-wrapper__testimonial-profile-image"
                    />
                  </div>
                  <div>
                    <h5 className="testimonial-wrapper__testimonial-profile-name">
                      Tamela Mann
                    </h5>
                    <p className="testimonial-wrapper__testimonial-profile-designation">
                      Chef
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-wrapper__testimonial-card-details d-flex align-items-center">
                  <div className="testimonial-wrapper__testimonial-profile">
                    <img
                      src="/images/home-page/profile-icon.png"
                      className="img-fluid testimonial-wrapper__testimonial-profile-image"
                    />
                  </div>
                  <div>
                    <h5 className="testimonial-wrapper__testimonial-profile-name">
                      Tamela Mann
                    </h5>
                    <p className="testimonial-wrapper__testimonial-profile-designation">
                      Chef
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="testimonial-wrapper__testimonial-card-details d-flex align-items-center">
                  <div className="testimonial-wrapper__testimonial-profile">
                    <img
                      src="/images/home-page/profile-icon.png"
                      className="img-fluid testimonial-wrapper__testimonial-profile-image"
                    />
                  </div>
                  <div>
                    <h5 className="testimonial-wrapper__testimonial-profile-name">
                      Tamela Mann
                    </h5>
                    <p className="testimonial-wrapper__testimonial-profile-designation">
                      Chef
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="testimonial-wrapper__testimonial-description">
            <h5>It was effortless experience.</h5>
            <Rating
              name="simple-controlled"
              value={5}
              readOnly
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
            />
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero’s De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero’s De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
