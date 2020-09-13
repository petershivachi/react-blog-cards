import React from 'react';
import './App.css';
import Cards from './components/Cards';
import { isArrayEmpty } from './utils/Utils';

class App extends React.Component {
  state = {
    showblogs: true,

    myArray: [
      {
        id: 1,
        title: 'Blog Title 1',
        description:
          'Reactive machines, they are the most basics types of artificial intelligence',
        likeCount: 0,
      },
      {
        id: 2,
        title: 'Blog Title 2',
        description:
          'Reactive machines, they are the most basics types of artificial intelligence',
        likeCount: 0,
      },
      {
        id: 3,
        title: 'Blog Title 3',
        description:
          'Reactive machines, they are the most basics types of artificial intelligence',
        likeCount: 0,
      },
    ],
  };

  onLikeBtnClick = (pos) => {
    const updatedBlog = this.state.myArray;
    const updatedBlogObj = updatedBlog[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlog[pos] = updatedBlogObj;

    this.setState({ myArray: updatedBlog });
  };

  onClickHideBtn = () => {
    //let updatedState = !this.state.showblogs;
    this.setState((prevstate, prevProps) => {
      return { showblogs: !prevstate.showblogs };
    });

    console.log(this.state.showblogs);
  };

  render() {
    console.log('Render function called');
    console.log(this.state);

    const myBlogs = isArrayEmpty(this.state.myArray)
      ? []
      : this.state.myArray.map((item, pos) => {
          return (
            <Cards
              title={item.title}
              description={item.description}
              key={pos}
              likeCount={item.likeCount}
              onLikeBtnClick={() => this.onLikeBtnClick(pos)}
            />
            /*<div className="Blog" key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>*/
          );
        });
    return (
      <div className="App">
        <button onClick={this.onClickHideBtn}>
          {this.state.showblogs ? 'HIDE' : 'SHOW'}
        </button>
        <br></br>
        {this.state.showblogs ? myBlogs : null}
      </div>
    );
  }
}

export default App;
