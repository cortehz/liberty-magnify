import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import Navbar from "../common/components/navbar";
import Footer from "../common/components/footer";
import { FaMapPin } from "react-icons/fa";
import Seo from "../common/seo";
import "./contact.css";

const mapStyles = {
  width: "100%",
  height: "100%",
  zIndex: "100"
};

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <div>
        <Seo title="Contact Liberty Therapies" />
        <Navbar />
        <div className="contact-form">
          <div style={{ display: "flex" }}>
            <div style={{ zIndex: "2000", width: "100vw" }}>
              <div className="container">
                <form id="contact" action="" method="post">
                  <h3>Contact Us</h3>
                  <h4>
                    Leave us a mail and we will get back to you in no time
                  </h4>
                  <fieldset>
                    <input
                      placeholder="Your name"
                      type="text"
                      tabindex="1"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <input
                      placeholder="Email Address"
                      type="email"
                      tabindex="2"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <textarea
                      placeholder="Type your message here..."
                      tabindex="4"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <button
                      name="submit"
                      type="submit"
                      id="contact-submit"
                      data-submit="...Sending"
                    >
                      Submit
                    </button>
                  </fieldset>
                  <p>
                    <FaMapPin
                      size="1.5em"
                      color="black"
                      style={{ verticalAlign: "middle" }}
                    />
                    Berkshire, Reading, United Kingdom
                  </p>
                </form>
              </div>
            </div>
          </div>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 45,
              lng: 56
            }}
          >
            <Marker onClick={this.onMarkerClick} name={"Liberty Therapies"} />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        </div>
        <div style={{ marginTop: "100vh" }}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA1YJAOjFeu5fws2E2lhUiYe0byIFfE3YI"
})(MapContainer);
