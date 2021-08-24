import React, { Component } from "react";
import "../style/main.css";

export class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
    this.getGifs = this.getGifs.bind(this);
    this.includeGif = this.includeGif.bind(this);
  }

  handleClick() {
    this.props.addGif();
  }

  includeGif(e) {
    var img = document.createElement("img");
    img.src = e.target.src;
    document.getElementById("gif-area").append(img);
    this.props.toggleGif();
  }

  getGifs(e) {
    var url =
      e.target.value.trim().length === 0
        ? `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=5&rating=g`
        : `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${e.target.value}&limit=5&offset=0&rating=g&lang=en`;

    window
      .fetch(url, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => res.json())
      .then((data) => {
        //render gif image
        var gifs = data.data.map((gif) => gif.images.fixed_height);
        this.setState({ gifs: gifs });
        //   this.props.addGif(data.data.url);
      });
  }

  componentDidMount() {
    //xhr giphy api request
    if (this.state.gifs.length === 0) {
      window
        .fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=5&rating=g`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        )
        .then((res) => res.json())
        .then((data) => {
          //render gif image
          var gifs = data.data.map((gif) => gif.images.fixed_height);
          console.log(gifs);
          this.setState({ gifs: gifs });
          //   this.props.addGif(data.data.url);
        });
    }
  }

  render() {
    return (
      <div className="post-form rounded bg-pink-200 flex-row items-center justify-center rounded absolute w-56 h-72 z-10 overflow-auto">
        <div className="p-2">
          <input
            className="outline-none"
            type="search"
            placeholder="search"
            onChange={this.getGifs}
          ></input>
        </div>
        <div className="grid-cols-1 p-4">
          {this.state.gifs.length > 0
            ? this.state.gifs.map((gif, index) => (
                <img
                  className="min-w-full"
                  key={index}
                  src={gif.url}
                  alt=""
                  style={{ height: `${gif.height}`, width: `${gif.width}` }}
                  onClick={this.includeGif}
                />
              ))
            : ""}
        </div>
      </div>
    );
  }
}

export default Popup;
