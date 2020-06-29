import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import Navbar from "./Navbar";

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
import { Link } from 'react-router-dom';

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
        name: "Driving at 65",
        time: 2,
        src: img8,
        facts: [
          "Looks like a super simple painting but actually took me a lot of time because I kept making mistakes",
          "This one gives me galaxy/space feels even though it has nothing really to do with space",
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
        name: "Beach Day",
        time: 1.5,
        src: img14,
        facts: [
          "Simple but fun one!",
          "This one makes me miss the beach",
          "Paints used: Crimson, Lemon Yellow, Mars Black, Titanium White (Acrylics)"
        ]
      },
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
