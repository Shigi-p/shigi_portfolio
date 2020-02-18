import React from 'react';
import Swipe from 'react-easy-swipe';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  MuiThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core"

import './App.scss';

import ShigiharaImage from './Image.jpg';
import Finger from './Finger.svg';
import VueLogo from './Vue.png';
import ReactLogo from './React.svg';
import HTMLLogo from './HTML.svg';

import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[300]
    },
    secondary: {
      main: orange[300]
    }
  },
});

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
    if(parseInt(position.x, 10) < -50 && !this.state.swipePageValid && this.state.page < this.state.maxPage){
      this.setState({
        page: this.state.page + 1,
        swipePageValid: true,
      })
    }else if(parseInt(position.x, 10) > 50 && !this.state.swipePageValid && this.state.page > 0){
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
            </div>
            <div className="LeftPage" onClick={() => this.goNextpage()}>
              {AboutMe(this.state.page + 1)}
            </div>
          </div>
        </Swipe>
        <div className="BottomMenubar">
          <Typography variant="body1" component="span">
            {this.state.page + 1}/{this.state.maxPage}
          </Typography>
          <input className="InputRange" type="range" value={this.state.page} min="0" max={this.state.maxPage} step="1" onChange={(e) => this.changePage(e.target.value)}/>
        </div>
      </div>
    )
  }

  componentDidMount(){

  }

  render(){
    console.log(this.theme);
    return (
      <MuiThemeProvider theme={theme}>
        <Box className="App">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6">
                Shigi's Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
          <Router>
            <Switch>
              <Route exact path="/" render={() => this.Books()} />
            </Switch>
          </Router>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item>
                <Typography paragraph>
                  次回更新日 未定
                </Typography>
                <Typography variant="h3">
                  鴫原俊樹のポートフォリオ
                </Typography>
                <Typography paragraph>
                  会津大学コンピュータ理工学部コンピュータ理工学科、鴫原俊樹によるポートフォリオサイト！
                </Typography>
                <Typography paragraph>
                  秋田書店のマンガクロスのUIを参考に似たような電子書籍スタイルに！
                </Typography>
                <Typography paragraph>
                  せっかくなので色々な情報を載せていきます！
                </Typography>
              </Grid>
              <Grid item width="30%">
                <Typography paragraph variant="h3">
                  僕のイチオシ漫画
                </Typography>
                <Box>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography paragraph align="center" variant="h6">
                        武装錬金
                      </Typography>
                      <Typography align="center">
                        全10巻(完結)
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography paragraph align="center" variant="h6">
                        SHY -シャイ-
                      </Typography>
                      <Typography align="center">
                        全2巻(連載中)
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </MuiThemeProvider>
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
          <Box>
            <Card>
              <CardHeader title={
                <Typography variant="h3" component="h3" align="center" paragraph>
                  Shigi's portfolio.
                </Typography>
              }/>
              <CardContent>
                <Typography variant="h4" component="h4" align="center">
                    第一話
                </Typography>
                <Typography variant="h4" component="h4" align="center">
                  書く、自由に。
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );
      case 2:
        return(
          <Box>
            <Card>
              <CardHeader title={
                <Typography variant="h3" component="h3" align="center" paragraph>
                  このサイトについて
                </Typography>
              }/>
              <CardContent>
                <Container maxWidth="lg">
                  <Typography paragraph>
                    <Typography component="span" color="secondary"><b>ある男の自己紹介サイト</b></Typography>である。
                  </Typography>
                  <Typography paragraph>
                    ある日、就職活動をしていくにあたり男は考えた。
                  </Typography>
                  <Typography paragraph>
                    「エンジニアとして就活する上では<Typography component="span" color="secondary"><b>成果物が必要</b></Typography>だ」と。
                  </Typography>
                  <Typography paragraph>
                    じゃあ、自分の好きなように作って個性を出していこう！
                  </Typography>
                  <Typography paragraph>
                    …と思いたち、秋田書店のマンガクロスのUIを参考に電子書籍風の自己紹介サイトを作った。
                  </Typography>
                  <Typography paragraph>
                    せっかく電子書籍風にしたので、自由に思ったことを書いていこうと思う。
                  </Typography>
                  <Typography paragraph>
                    漫画風にして真似たのに、横書きなので厳密には漫画になっていないのは秘密。
                  </Typography>
                  <Typography paragraph>
                    だらだらと書き綴るが、読んでいただけると私についてよく理解できるのではないだろうか。
                  </Typography>
                  <Typography paragraph>
                    多分。
                  </Typography>
                </Container>
              </CardContent>
            </Card>
          </Box>
        );
      case 3:
        return(
          <Box>
            <Card>
              <CardHeader title={
                <Typography variant="h3" align="center" paragraph>
                  鴫原俊樹
                </Typography>
              }/>
              <CardContent>
                <Container maxWidth="lg">
                  <Typography paragraph>
                    会津大学 学部3年 コンピュータ理工学部 コンピュータ理工学科
                  </Typography>
                  <Typography paragraph>
                    漫画、自転車(クロスバイク、メーカーはBianchi)、ラップバトルが好き。
                  </Typography>
                  <Typography paragraph>
                    使用言語は主にJavascript。フレームワークはVueとReact。
                  </Typography>
                  <Typography paragraph>
                    最近はバックエンドの勉強としてLaravelを勉強中。
                  </Typography>
                  <Typography paragraph>
                    触ったことあるだけならRails,Django,Flask,Go,その他色々。
                  </Typography>
                </Container>
              </CardContent>
            </Card>
          </Box>
        );
      case 4:
        return(
          <Box>
            <Card>
              <CardHeader title={
                <Typography variant="h3" component="h3" align="center" paragraph>
                  タイトルだよ
                </Typography>
              }/>
              <CardContent>
                <Typography paragraph>
                  このへんに本文を追記
                </Typography>
              </CardContent>
            </Card>
          </Box>
        );
      default:
        return(
          <div className="Page99"/>
        )
    }
};

export default App;
