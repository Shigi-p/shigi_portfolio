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
  Container,
  Grid,
  MuiThemeProvider,
  Toolbar,
  Typography,
  responsiveFontSizes,
} from "@material-ui/core";

import AboutMe from './pages/AboutMe';
import './App.scss';

import Finger from './Finger.svg';

import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[400]
    },
    secondary: {
      main: orange[400]
    }
  }
});

theme = responsiveFontSizes(theme);

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
                <p>左右にスワイプ</p>
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
            <div onClick={() => this.goPreviouspage()} className="PreviouspageButton"/>
            <div onClick={() => this.goNextpage()} className="NextpageButton"/>
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

export default App;
