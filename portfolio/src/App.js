import React from 'react';
import Swipe from 'react-easy-swipe';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core"

import './App.scss';

import ShigiharaImage from './Image.jpg';
import Finger from './Finger.svg';
import VueLogo from './Vue.png';
import ReactLogo from './React.svg';
import HTMLLogo from './HTML.svg';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      page: 0,
      maxPage: 9,
      swipePageValid: false,
      showTutorial: true,
    };
    this.bookmark = this.bookmark.bind(this);
    this.showBookmark = this.showBookmark.bind(this);
    this.goNextpage = this.goNextpage.bind(this);
    this.goPreviouspage = this.goPreviouspage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.closeTutorial = this.closeTutorial.bind(this);
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

  Books(){
    return(
      <div>
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
            <div className="RightPage" onClick={() => this.goPreviouspage()}>
              {AboutMe(this.state.page)}
              <span className="PreviouspageButton" onClick={() => this.goPreviouspage()} />
            </div>
            <div className="LeftPage" onClick={() => this.goNextpage()}>
              <span className="NextpageButton" onClick={() => this.goNextpage()} />
              {AboutMe(this.state.page + 1)}
            </div>
          </div>
        </Swipe>
        <div className="BottomMenubar">
          {this.state.page + 1}
          <input className="InputRange" type="range" value={this.state.page} min="0" max={this.state.maxPage} step="1" onChange={(e) => this.changePage(e.target.value)}/>
          {this.state.page}
        </div>
      </div>
    )
  }

  componentDidMount(){

  }

  render(){
    console.log(this.theme);
    return (
      <div className="App">
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6">
              Portfolio
            </Typography>
          </Toolbar>
        </AppBar>
        <Router>
          <Switch>
            <Route exact path="/" render={() => this.Books()} />
          </Switch>
        </Router>
        <div className="App__information-to-me">
          <h2>
            鴫原俊樹のポートフォリオ
          </h2>
        </div>
      </div>
    );
  }
}

const AboutMe = (page) => {
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
            {/*<div className="Page2Flame1 Flame">*/}
            {/*  <ul>*/}
            {/*    <li onClick={() => this.setState({page:3})}><span>1.鴫原俊樹について</span></li>*/}
            {/*    <li onClick={() => this.setState({page:3})}><span>2.大学での暮らし</span></li>*/}
            {/*    <li onClick={() => this.setState({page:3})}><span>3.つくったもの</span></li>*/}
            {/*    <li onClick={() => this.setState({page:3})}><span>4.連絡先</span></li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
        );
      case 3:
        return(
          <div className="Page3 Padding Flex">
            <h1 className="Horizontal TitleSection">Part1.鴫原俊樹について</h1>
            {/*<div className="Page3Flame1 Flame">*/}
            {/*  <h1>鴫原俊樹</h1>*/}
            {/*  <img src={ShigiharaImage} alt="鴫原俊樹の写真" className="Img"/>*/}
            {/*  <p>会津大学学部3年</p>*/}
            {/*  <p>福島生まれ</p>*/}
            {/*  <p>自転車と漫画が趣味</p>*/}
            {/*  <p>コーヒーとお茶が好き</p>*/}
            {/*</div>*/}
            {/*<div className="Page3Flame2 Flame">*/}
            {/*  <ul>*/}
            {/*    <li>好きな漫画*/}
            {/*      <ul>*/}
            {/*        <li>武装錬金</li>*/}
            {/*        <li>SHY-シャイ-</li>*/}
            {/*        <li>恋情デスペラード</li>*/}
            {/*      </ul>*/}
            {/*    </li>*/}
            {/*  </ul>*/}
            {/*</div>*/}
          </div>
        );
      case 4:
        return(
          <div className="Page4 Padding Flex">
            <h1 className="Horizontal TitleSection">Part2.大学での暮らし</h1>
            {/*<div className="Page4Flame1">*/}
            {/*  <div className="Page4Flame1_1 Flame">*/}
            {/*    <h2>学んだ言語とか</h2>*/}
            {/*    <ul>*/}
            {/*      <li>大学での授業*/}
            {/*        <ul>*/}
            {/*          <li>C</li>*/}
            {/*          <li>Java</li>*/}
            {/*          <li>C++</li>*/}
            {/*        </ul>*/}
            {/*      </li>*/}
            {/*      <li>個人開発*/}
            {/*      <ul>*/}
            {/*        <li>HTML, css</li>*/}
            {/*        <li>Javascript*/}
            {/*          <ul>*/}
            {/*            <li>Vue.js</li>*/}
            {/*            <li>React.js</li>*/}
            {/*          </ul>*/}
            {/*        </li>*/}
            {/*      </ul>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </div>*/}
            {/*  <div className="Page4Flame1_2 Flame">*/}
            {/*    /!*<img src={HTMLLogo} alt="HTMLのロゴです" className="Img"/>*!/*/}
            {/*    /!*<img src={ReactLogo} alt="Reactのロゴです" className="Img"/>*!/*/}
            {/*    /!*<img src={VueLogo} alt="Vueのロゴです" className="Img"/>*!/*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="Page4Flame2 Flame">*/}

            {/*</div>*/}
          </div>
        );
      case 5:
        return(
          <div className="Page5 Padding">
            {/*<ul>*/}
            {/*  <li><h2>チーム開発経験</h2>*/}
            {/*    <ul>*/}
            {/*      <li>*/}
            {/*        <h3>大学での授業</h3>*/}
            {/*        <p>*/}
            {/*          留学生を交えた4〜5人のグループでwebアプリ開発。*/}
            {/*          英語でのコミュニケーションを通してのチーム開発で、フロントエンドとUIモックアップを担当。*/}
            {/*          技術的な面の特徴は、nuxtを使用したSPAアプリケーションで、axiosを使用してバックエンドとの通信やnuxt-routerを利用したページ遷移など。*/}
            {/*        </p>*/}
            {/*      </li>*/}
            {/*      <li>*/}
            {/*        <h3>enPiT</h3>*/}
            {/*        <p>*/}
            {/*          タイのチュラロンコーン大学、モンクット王工科大学、日本大学工学部と協力し、西会津を舞台に地域イノベーションを行った。webアプリ制作では同じくフロントエンド、UIモックアップを担当。*/}
            {/*        </p>*/}
            {/*      </li>*/}
            {/*    </ul>*/}
            {/*  </li>*/}
            {/*</ul>*/}

            {/*<h1>Part3.つくったもの</h1>*/}
            {/*<hr />*/}
            {/*<p>ぶねすと</p>*/}
          </div>
        );
      case 6:
        return(
          <div className="Page6 Padding">
            <h1>Part4.連絡先</h1>
            {/*<hr />*/}
            {/*<p>ぎっとはぶ</p>*/}
          </div>
        );
      default:
        return(
          <div className="Page99"/>
        )
    }
};

export default App;
