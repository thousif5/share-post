import React from "react";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ],
    };

    this.handleAddPost = this.handleAddPost.bind(this);
  }

  handleAddPost() {
    const text = document.getElementById("post-text-area").value;
    this.state.posts.unshift(text);
    document.getElementById("post-text-area").value = "";
    document.getElementById("post-text-area").focus();
    this.setState({ posts: this.state.posts });
  }

  removePost(id) {
    this.state.posts.splice(id, 1);
    this.setState({ posts: this.state.posts });
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
                      <textarea
                        id="post-text-area"
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                        rows="6"
                        placeholder="Write text..."
                      ></textarea>
                    </div>
                    <div className="flex">
                      <button
                        className="rounded px-4 py-3 my-4 mr-4 text-gray-200 bg-red-400 hover:bg-red-600 transition duration-300"
                        onClick={this.handleAddPost}
                      >
                        Add Post
                      </button>
                      <button className="rounded px-4 py-3 my-4 mr-4 text-gray-200 bg-blue-400 hover:bg-blue-600 transition duration-300">
                        Add Gif
                      </button>
                    </div>
                  </div>
                </div>
                {this.state.posts.map((post, id) => (
                  <div key={id} className="lg:w-3/4 w-4/5 lg:pr-3 mb-2">
                    <div className="bg-red-100 rounded-xl p-4">
                      <h2 className="text-xl font-semibold mb-3">Sam</h2>
                      <div className="text-gray-800 leading-relaxed mb-6">
                        {post}
                      </div>
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
