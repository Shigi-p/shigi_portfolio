import React from 'react';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
        page: 0,
    };
    this.pages = this.pages.bind(this);
    this.bookmark = this.bookmark.bind(this);
    this.showBookmark = this.showBookmark.bind(this);
    this.goNextpage = this.goNextpage.bind(this);
    this.goPreviouspage = this.goPreviouspage.bind(this);
  }

  pages(page){
    switch(page){
      case 0:
        return(
          <div className={`Page${this.state.page}`}></div>
        );
      case 1:
        return(
          <div className={`Page${this.state.page + 1}`}>
            <h1>This is my portfolio.</h1>
          </div>
        );
    }
  }

  bookmark(){
    return(
      <div className="Bookmark" onClick={this.showBookmark()}>
      </div>
    );
  }

  showBookmark(){

  }

  goNextpage(){
    this.setState({
      page: this.state.page + 1,
    });
  }

  goPreviouspage(){
    this.setState({
      page: this.state.page - 1,
    });
  }

  render(){
    return (
      <div className="App">
        {this.bookmark()}
        <div className="LeftPage">
          <span className="NextpageButton" onClick={() => this.goNextpage()} />
          {this.pages(this.state.page + 1)}
        </div>
        <div className="RightPage">
          {this.pages(this.state.page)}
          <span className="PreviouspageButton" onClick={() => this.goPreviouspage()} />
        </div>
      </div>
    );
  }
}

export default App;
