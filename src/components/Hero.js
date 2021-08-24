import React from "react";
import Popup from "../components/Popup";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seen: false,
      posts: [
        {
          text: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
      ],
    };

    this.handleAddPost = this.handleAddPost.bind(this);
    // this.handlePost = this.handlePost.bind(this);
    this.addGif = this.addGif.bind(this);
    this.toggleGif = this.toggleGif.bind(this);
  }

  //   handlePost(e) {
  //     this.setState({ text: [e.target.value] });
  //   }

  handleAddPost() {
    const text = document.getElementById("post-text-area").innerText;
    const imgArray = document.getElementById("gif-area").children;
    const img = [];
    for (let i = 0; i < imgArray.length; i++) {
      img.push(imgArray[i].src);
    }
    this.state.posts.unshift({ text: text, img: img });
    document.getElementById("post-text-area").innerText = "";
    document.getElementById("post-text-area").focus();
    this.setState({ posts: this.state.posts });
  }

  removePost(id) {
    this.state.posts.splice(id, 1);
    this.setState({ posts: this.state.posts });
  }

  toggleGif() {
    this.setState({ seen: !this.state.seen });
  }

  addGif() {
    this.setState({ text: this.state.text, seen: !this.state.seen });
  }

  //   handleAddPost() {
  //     if (document.getElementById("post-text-area").value) {
  //       var posts = this.state.posts;
  //       posts.unshift(document.getElementById("post-text-area").value);
  //       this.setState({ posts: posts });
  //     }
  //   }

  render() {
    return (
      <section id="home" className="relative">
        <div className="max-w-6xl mx-auto">
          <div className="pt-12 pb-12 md:pt-20 md:pb-20">
            <div className="post-card">
              <div className="container mx-auto flex-row flex-wrap my-16">
                <div className="post-form lg:w-3/4 w-4/5 lg:pr-3 mb-2">
                  <div className="bg-red-100 rounded-xl p-4">
                    <div className="add-form">
                      <div
                        contentEditable="true"
                        id="post-text-area"
                        className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none"
                        // onChange={this.handlePost}
                      >
                        <span id="gif-area"></span>
                      </div>
                    </div>
                    <div className="flex">
                      <button
                        className="rounded px-4 py-3 my-4 mr-4 text-gray-200 bg-red-400 hover:bg-red-600 transition duration-300"
                        onClick={this.handleAddPost}
                      >
                        Add Post
                      </button>
                      <button
                        className="rounded px-4 py-3 my-4 mr-4 text-gray-200 bg-blue-400 hover:bg-blue-600 transition duration-300"
                        onClick={this.addGif}
                      >
                        Add Gif
                      </button>
                      {/* <div className="btn" onClick={this.togglePop}>
                        <button>New User?</button>
                      </div>
                      {this.state.seen ? (
                        <PopUp toggle={this.togglePop} />
                      ) : null} */}
                    </div>
                  </div>
                </div>
                {this.state.seen ? (
                  <Popup toggle={this.addGif} toggleGif={this.toggleGif} />
                ) : null}
                {this.state.posts.map((post, id) => (
                  <div key={id} className="lg:w-3/4 w-4/5 lg:pr-3 mb-2">
                    <div className="bg-red-100 rounded-xl p-4">
                      <h2 className="text-xl font-semibold mb-3">Sam</h2>
                      <div className="text-gray-800 leading-relaxed mb-6">
                        {post.text}
                      </div>
                      {post.img
                        ? post.img.map((image) => <img src={image} alt="" />)
                        : null}
                      <div>
                        <button
                          className="rounded px-4 py-3 my-4 text-gray-200 bg-red-400 hover:bg-red-600 transition duration-300"
                          onClick={this.removePost.bind(this, id)}
                        >
                          Remove Post
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
