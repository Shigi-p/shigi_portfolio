import React from 'react';
import Swipe from 'react-easy-swipe';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      page: 0,
      maxPage: 9,
      swipePageValid: false,
    };
    this.pages = this.pages.bind(this);
    this.bookmark = this.bookmark.bind(this);
    this.showBookmark = this.showBookmark.bind(this);
    this.goNextpage = this.goNextpage.bind(this);
    this.goPreviouspage = this.goPreviouspage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
  }

  pages(page){
    switch(page){
      case 0:
        return(
          <div className="Page0"></div>
        );
      case 1:
        return(
          <div className="Page1 Padding">
            <h1>This is my portfolio.</h1>
          </div>
        );
      case 2:
        return(
          <div className="Page2 Padding">
            <h1>目次</h1>
            <hr/>
            <ul>
              <li onClick={() => this.setState({page:3})}>Part1.鴫原俊樹について</li>
              <li onClick={() => this.setState({page:3})}>Part2.大学での暮らし</li>
              <li onClick={() => this.setState({page:3})}>Part3.つくったもの</li>
              <li onClick={() => this.setState({page:3})}>Part4.連絡先</li>
            </ul>
          </div>
        );
      case 3:
        return(
          <div className="Page3 Padding">
            <h1>Part1.鴫原俊樹について</h1>
            <hr />
            <p>ここに画像を挿入</p>
            <ul>
              <li>会津大学学部3年</li>
              <li>フロント書きます</li>
            </ul>
          </div>
        );
      case 4:
        return(
          <div className="Page4 Padding">
            <h1>Part2.大学での暮らし</h1>
            <hr />
            <p>生きる。</p>
          </div>
        );
      case 5:
        return(
          <div className="Page5 Padding">
            <h1>Part3.つくったもの</h1>
            <hr />
            <p>ぶねすと</p>
          </div>
        );
      case 6:
        return(
          <div className="Page6 Padding">
            <h1>Part4.連絡先</h1>
            <hr />
            <p>ぎっとはぶ</p>
          </div>
        );
      default:
        return(
          <div className="Page99"></div>
        )
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

  changePage(page){
    this.setState({
      page: parseInt(page, 10),
    })
  }

  onSwipeMove(position, event) {
    if(parseInt(position.x, 10) > 200 && !this.state.swipePageValid){
      console.log(`Moved ${position.x} pixels horizontally`, event);
      this.setState({
        page: this.state.page + 1,
        swipePageValid: true,
      })
    }else if(parseInt(position.x, 10) < -200 && !this.state.swipePageValid){
      console.log(`Moved ${position.x} pixels horizontally`, event);
      this.setState({
        page: this.state.page - 1,
        swipePageValid: true,
      })
    }
  }

  onSwipeEnd(){
    this.setState({
      swipePageValid: false,
    })
  }

  render(){
    return (
      <div className="App">
        <div className="Book">
          <Swipe
            onSwipeMove={this.onSwipeMove}
            onSwipeEnd={this.onSwipeEnd}>
            {this.bookmark()}
            <div className="RightPage">
              {this.pages(this.state.page)}
              <span className="PreviouspageButton" onClick={() => this.goPreviouspage()} />
            </div>
            <div className="LeftPage">
              <span className="NextpageButton" onClick={() => this.goNextpage()} />
              {this.pages(this.state.page + 1)}
            </div>
          </Swipe>
        </div>
        <div className="BottomMenubar">
          {this.state.page + 1}
          <input className="InputRange" type="range" value={this.state.page} min="0" max={this.state.maxPage} step="1" onChange={(e) => this.changePage(e.target.value)}/>
          {this.state.page}
        </div>
      </div>
    );
  }
}

export default App;
