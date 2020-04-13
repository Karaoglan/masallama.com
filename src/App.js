import React, { Component } from "react";
import logo from "./udilia-logo-white.svg";
import UnderConstruction from "./lib";

class App extends Component {
  render() {
    return (
      <UnderConstruction
        background={{
          image:
            "https://static.pexels.com/photos/259698/pexels-photo-259698.jpeg",
          textColor: "#fff",
          overlay: {
            color: "#000",
            opacity: ".5",
          },
        }}
        logo={{
          src: logo,
          alt: "logo",
          style: {
            width: "80px",
          },
        }}
        description={{
          text:
            "Sizler için MASALLAMA websitemizi güncelliyoruz, Detay için takipte kalın!",
          style: {
            maxWidth: "440px",
          },
        }}
        subscribe={{
          placeholder: "Mailinizi Giriniz!",
          buttonText: "Kaydol",
          onSubmit: (value) => {
            console.log("user typed email :", value);
          },
        }}
        links={[
          {
            url: "https://www.facebook.com/",
            image: "https://image.flaticon.com/icons/svg/220/220200.svg",
          },
          {
            url: "https://www.twitter.com/",
            image: "https://image.flaticon.com/icons/svg/145/145812.svg",
          },
          {
            url: "https://www.linkedin.com/",
            image: "https://image.flaticon.com/icons/svg/145/145807.svg",
          },
          {
            url: "mailto:iletisim@disar.org.tr",
            image: "https://image.flaticon.com/icons/svg/321/321817.svg",
          },
        ]}
      />
    );
  }
}

export default App;
