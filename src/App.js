import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import { Link } from 'react-router-dom';

import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import img11 from "./11.jpg";
import img12 from "./12.jpg";
import img13 from "./13.jpg";
import img14 from "./14.jpg";
import img15 from "./15.jpg";
import img16 from "./16.jpg";
import img17 from "./17.jpg";
import img18 from "./18.jpg";
import img19 from "./19.jpg";
import img20 from "./20.jpg";
import img21 from "./21.jpg";
import img22 from "./22.jpg";
import img23 from "./23.jpg";
import img24 from "./24.jpg";
import img25 from "./25.jpg";
import img26 from "./26.jpg";
import img27 from "./27.jpg";
import img28 from "./28.jpg";
import img29 from "./29.jpg";
import img30 from "./30.jpg";
import img31 from "./31.jpg";

class App extends Component {
  static defaultProps = {
    paintings: [
      {
        name: "Golden Gate",
        time: 3,
        src: img1,
        facts: [
          "Inspired by the trip my family took to California last year",
          "The city lights took me forever to paint because they are so many of them!",
          "Paints used: Crimson, Pthalo Blue, Mars Black, Burnt Sienna, Titanium White, Cadmium Yellow (Acrylics)"
        ]
      },
      {
        name: "Lakeside",
        time: 1,
        src: img2,
        facts: [
          "Inspired by the time I went to Lake Hartwell with my friends and we kayaked and sat by the campfire after sunset",
          "I originally painted a pink sky underneath this but didn't like how that turned out so I started this painting on top on it!",
          "Paints used: Pthalo Blue, Mars Black, Burnt Sienna, Titanium White, Cadmium Yellow, Lemon Yellow (Acrylics)"
        ]
      },
      {
        name: "Winter Sunset",
        time: 2,
        src: img3,
        facts: [
          "One of my favorites! Snow is so fun to paint.",
          "I followed a Bob Ross tutorial for this one!",
          "Paints used: Crimson, Pthalo Blue, Mars Black, Burnt Sienna, Titanium White, Cadmium Yellow (Acrylics)"
        ]
      },
      {
        name: "Tiger Skies",
        time: 1,
        src: img4,
        facts: [
          "Inspired by the beautiful pink and orange sunsets at Clemson!",
          "I made this to hang up in my dorm!",
          "Paints used: Crimson, Mars Black, Burnt Sienna, Titanium White, Cadmium Yellow, Pthalo Green, Lemon Yellow, Light Green (Acrylics)"
        ]
      },
      {
        name: "Paris in the Rain",
        time: 2.5,
        src: img5,
        facts: [
          "I started painting the background of this one when I had some random leftover gray paint. It then took me 3 days to decide what to do with this painting before I could start working on it again!",
          "Painting this made me miss living in France :(",
          "Paints used: Crimson, Mars Black, Titanium White, Lemon Yellow (Acrylics)"
        ]
      },
      {
        name: "Water Lilies",
        time: 3,
        src: img6,
        facts: [
          "My family bought some water lilies a month ago and I painted this when our first lily bloomed!",
          "I originally painted a koi fish in the water but it looked so weird I had to paint water over it again!",
          "Paints used: Crimson, Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Blue, Blue Lake (Acrylics)."
        ]
      },
      {
        name: "S'mores at Dusk",
        time: 3.5,
        src: img24,
        facts: [
          "Reminds me of the time I went to the lake with my friends and we made s'mores",
          "Paints used: Crimson, Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Blue, Blue Lake, Van Dyke Brown (Acrylics)."
        ]
      },
      {
        name: "Clemson",
        time: 2.5,
        src: img25,
        facts: [
          "I'm getting better at doing shadows when painting architechture! ",
          "Paints used: Crimson, Mars Black, Titanium White, Lemon Yellow (Acrylics)."
        ]
      },
      {
        name: "Spill the Beans",
        time: 3.5,
        src: img26,
        facts: [
          "Spill the Beans is my favorite hangout spot at Clemson!",
          "Paints used:  Crimson, Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Blue, Blue Lake, Van Dyke Brown (Acrylics)."
        ]
      },
      {
        name: "Mountain House",
        time: 3,
        src: img21,
        facts: [
          "Reminds me of an airbnb house my family stayed at for vacation once",
          "Paints used: Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Blue, Blue Lake, Van Dyke Brown (Acrylics)."
        ]
      },
      {
        name: "Airplane Mode",
        time: 2.5,
        src: img22,
        facts: [
          "My sister named this one!",
          "Paints used: Crimson, Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Blue (Acrylics)."
        ]
      },
      {
        name: "Cocoa by the Lake",
        time: 2.5,
        src: img23,
        facts: [
          "I'm getting into painting more autumn paintings because I love the colors",
          "Paints used:  Crimson, Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Blue, Blue Lake, Van Dyke Brown (Acrylics)."
        ]
      },
      {
        name: "Peacock",
        time: 3.5,
        src: img13,
        facts: [
          "This was super hard to paint and really tested my skills!",
          "My sister rates this 9/10!",
          "Paints used: Crimson, Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Green, Pthalo Blue, Blue Lake (Acrylics)"
        ]
      },
      {
        name: "Rainbow Jelly",
        time: 2,
        src: img7,
        facts: [
          "Probably a very unrealistic depiction of a jellyfish!",
          "Super fun to paint because I just used all the colors I had and went crazy!",
          "Paints used: Honestly any colors will work!"
        ]
      },
      {
        name: "On the Lake",
        time: 2,
        src: img29,
        facts: [
          "My sister rates this 6/10!",
          "Paints used: Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Green, Pthalo Blue, Blue Lake (Acrylics)"
        ]
      },
      {
        name: "Pumpkin Picking",
        time: 3,
        src: img27,
        facts: [
          "My sister rates this 8.5/10!",
          "Paints used: Crimson, Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Green, Pthalo Blue, Blue Lake (Acrylics)"
        ]
      },
      {
        name: "Drive",
        time: 2,
        src: img28,
        facts: [
          "This one was interesting because I had to work on making the cars look like they're in motion.",
          "Paints used: Crimson, Mars Black, Titanium White, Pthalo Green, Lemon Yellow, Light Green, Pthalo Green, Pthalo Blue, Blue Lake (Acrylics)"
        ]
      },
      {
        name: "Seahorse",
        time: 2,
        src: img19,
        facts: [
          "I've been trying to paint animals lately because they're more difficult than landscapes",
          "Nearly ran out of blue painting this one! (I'm ordering new paint pronto)",
          "Paints used: Crimson, Light Green, Pthalo Green, Lemon Yellow, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Beach Day",
        time: 1.5,
        src: img14,
        facts: [
          "Simple but fun one!",
          "This one makes me miss the beach",
          "Paints used: Crimson, Lemon Yellow, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Isle of Palms",
        time: 1.5,
        src: img15,
        facts: [
          "I always have trouble painting/drawing palm trees so I'm pretty proud of this one!",
          "Paints used: Crimson, Lemon Yellow, Pthalo Green, Light Green, Burnt Sienna (Acrylics)"
        ]
      },
      {
        name: "Under the Sea",
        time: 3,
        src: img16,
        facts: [
          "My sister's favorite animal is a turtle!",
          "She rates this 7/10!",
          "Paints used: Pthalo Blue, Light Green, Lemon Yellow, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Sunset City",
        time: 1.5,
        src: img30,
        facts: [
          "I got new paints! YAY",
          "Paints used: Crimson, Lemon Yellow, Gray, Burnt Sienna, Titanium White, Mars Black (Acrylics)"
        ]
      },
      {
        name: "Runway",
        time: 3,
        src: img31,
        facts: [
          "Surprisingly this one was hard to paint because of how straight the runway had to be",
          "Paints used: Crimson, Pthalo Blue, Gray, Burnt Sienna, Titanium White, Mars Black (Acrylics)"
        ]
      },
      {
        name: "Arizona Sunset",
        time: 2.5,
        src: img17,
        facts: [
          "The sunset background was surprisingly the hardest part of this painting!",
          "The background is painted using Dollar Tree brand paints! (They are super hard to make look nice)",
          "Paints used: Light Green, Pthalo Green, Lemon Yellow, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Koi Pond",
        time: 2,
        src: img18,
        facts: [
          "Someday I want to have a koi pond in my backyard!",
          "Paints used: Crimson, Light Green, Pthalo Green, Lemon Yellow, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Driving at 65",
        time: 2,
        src: img8,
        facts: [
          "Looks like a super simple painting but actually took me a lot of time because I kept making mistakes",
          "Paints used: Crimson, Lemon Yellow, Cadmium Yellow, Light Green, Pthalo Green, Pthalo Blue, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "City Lights",
        time: 1,
        src: img9,
        facts: [
          "One of my half-page paintings, not sure how I feel about painting on paper this small",
          "I love string lights of any kind!",
          "Paints used: Lemon Yellow, Cadmium Yellow, Pthalo Blue, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Touch the Sky",
        time: 2.5,
        src: img10,
        facts: [
          "Inspired by the time I went to a hot air balloon festival last year with my family",
          "I've never actually been on a hot air balloon but I hope to try it someday!",
          "Paints used: Crimson, Lemon Yellow, Cadmium Yellow, Light Green, Pthalo Green, Pthalo Blue, Burnt Sienna, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Autumn Drive",
        time: 2,
        src: img11,
        facts: [
          "Fall is my favorite season!",
          "I got to practice painting trees with this one (which I'm not very good at yet)",
          "Paints used: Crimson, Lemon Yellow, Cadmium Yellow, Burnt Sienna, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Sunset Moon",
        time: 1.5,
        src: img12,
        facts: [
          "Followed a YouTube tutorial for this one!",
          "I painted this one with my sister (she made one too)",
          "Paints used: Crimson, Pthalo Blue, Mars Black, Titanium White (Acrylics)"
        ]
      },
      {
        name: "Windmills",
        time: 2,
        src: img20,
        facts: [
          "This one reminds me of living in France because they have a lot of windmills like this in the countryside.",
          "I took a less realistic and more abstract approach to this landscape painting and I kind of like it!",
          "Paints used: Pthalo Green, Lemon Yellow, Light Blue, Mars Black, Titanium White (Acrylics)"
        ]
      }
    ]
  };
  render(){
    return (
      <div>
        {/* <Navbar paintings={this.props.paintings} /> */}
        <Link className= "homelink" to="/">Shreya Takes on Painting!</Link>
        <div className='container'>
          <Routes paintings={this.props.paintings} />
        </div>
        <div className= "footer" to="/">Created by Shreya Thammana, © 2020</div>
      </div>
    );
  }
}

export default App;
