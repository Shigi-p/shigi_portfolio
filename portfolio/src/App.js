import React from 'react';
import Swipe from 'react-easy-swipe';
import './App.scss';
import ShigiharaImage from './Image.jpg';
import Finger from './Finger.svg';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      page: 0,
      maxPage: 9,
      swipePageValid: false,
      showTutorial: true,
    };
    this.pages = this.pages.bind(this);
    this.bookmark = this.bookmark.bind(this);
    this.showBookmark = this.showBookmark.bind(this);
    this.goNextpage = this.goNextpage.bind(this);
    this.goPreviouspage = this.goPreviouspage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.closeTutorial = this.closeTutorial.bind(this);
  }

  pages(page){
    switch(page){
      case 0:
        return(
          <div className="Page0"/>
        );
      case 1:
        return(
          <div className="Page1 Padding">
            <h1 className="Horizontal TitleSection">This is my portfolio.</h1>
          </div>
        );
      case 2:
        return(
          <div className="Page2 Padding Flex">
            <h1 className="Horizontal TitleSection">目次</h1>
            <div className="Page2Flame1 Flame">
              <ul>
                <li onClick={() => this.setState({page:3})}>Part1.鴫原俊樹について</li>
                <li onClick={() => this.setState({page:3})}>Part2.大学での暮らし</li>
                <li onClick={() => this.setState({page:3})}>Part3.つくったもの</li>
                <li onClick={() => this.setState({page:3})}>Part4.連絡先</li>
              </ul>
            </div>
          </div>
        );
      case 3:
        return(
          <div className="Page3 Padding Flex">
            <h1 className="Horizontal TitleSection">Part1.鴫原俊樹について</h1>
            <div className="Page3Flame1 Flame">
              <p>ここに画像を挿入</p>
              <img src={ShigiharaImage} alt="鴫原俊樹の写真" className="Img"/>
            </div>
            <div className="Page3Flame2 Flame">
              <ul>
                <li>会津大学学部3年</li>
                <li>フロント書きます</li>
              </ul>
            </div>
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
          <div className="Page99"/>
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
    if(this.state.page < this.state.maxPage){
      this.setState({
        page: this.state.page + 1,
      });
    }
  }

  goPreviouspage(){
    if(this.state.page > 0){
      this.setState({
        page: this.state.page - 1,
      });
    }
  }

  changePage(page){
    this.setState({
      page: parseInt(page, 10),
    })
  }

  onSwipeMove(position, event) {
    if(parseInt(position.x, 10) > 50 && !this.state.swipePageValid && this.state.page < this.state.maxPage){
      this.setState({
        page: this.state.page + 1,
        swipePageValid: true,
      })
    }else if(parseInt(position.x, 10) < -50 && !this.state.swipePageValid && this.state.page > 0){
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

  closeTutorial(){
    this.setState({
      showTutorial: false,
    })
  }

  render(){
    return (
      <div className="App">
          <Swipe
            onSwipeMove={this.onSwipeMove}
            onSwipeEnd={this.onSwipeEnd}>
            {this.bookmark()}
            {this.state.showTutorial ?
                <div className="TutorialWrapper" onClick={() => this.closeTutorial()}>
                  <div className="Tutorial">
                    <p>左右にスワイプでページ移動！</p>
                    <p><img src={Finger} alt="ゆび" className="Swipe"/></p>
                  </div>
                </div>
              :
                null
            }
            <div className="Book">
              <div className="RightPage">
                {this.pages(this.state.page)}
                <span className="PreviouspageButton" onClick={() => this.goPreviouspage()} />
              </div>
              <div className="LeftPage">
                <span className="NextpageButton" onClick={() => this.goNextpage()} />
                {this.pages(this.state.page + 1)}
              </div>
            </div>
          </Swipe>
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
