import React from 'react';
import Swipe from 'react-easy-swipe';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  AppBar,
  Box,
  Card,
  CardActionArea,
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
import Shigi from "./pages/Image.jpg";

import {
  createMuiTheme
} from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: cyan[400],
      dark: cyan[900]
    },
    secondary: {
      main: orange[400]
    }
  },
  typography: {
      body1: {
        fontSize: "defaultStatus",
        '@media (max-width: 800px)': {
          fontSize: ".8rem"
        }
      }
    }
});

theme = responsiveFontSizes(theme);

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      page: 0,
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

  goNextpage(maxPage){
    if(this.state.page < maxPage){
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

  onSwipeMove(position, maxPage) {
    if(parseInt(position.x, 10) < -50 && !this.state.swipePageValid && this.state.page < maxPage){
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

  Books(Page, maxPage){
    return(
      <div>
        <Swipe
          onSwipeMove={(position) => this.onSwipeMove(position, maxPage)}
          onSwipeEnd={this.onSwipeEnd}>
          {this.bookmark()}
          {this.state.showTutorial ?
            <div className="TutorialWrapper" onClick={() => this.closeTutorial()}>
              <div className="Tutorial">
                <Typography paragraph>
                  左右にスワイプ
                </Typography>
                <Typography paragraph>
                  <img src={Finger} alt="ゆび" className="Swipe"/>
                </Typography>
                <Typography variant="body2" style={{fontSize: "1rem"}}>
                  画面上をタップで閉じる
                </Typography>
              </div>
            </div>
            :
            null
          }
          <div className="Book">
            <div className="RightPage" onClick={() => this.goPreviouspage()}>
              {Page(this.state.page)}
            </div>
            <div className="LeftPage" onClick={() => this.goNextpage(maxPage)}>
              {Page(this.state.page + 1)}
            </div>
            <div onClick={() => this.goPreviouspage()} className="PreviouspageButton"/>
            <div onClick={() => this.goNextpage(maxPage)} className="NextpageButton"/>
          </div>
        </Swipe>
        <div className="BottomMenubar">
          <Typography variant="body1" component="span">
            {this.state.page + 1}/{maxPage + 1}
          </Typography>
          <input className="InputRange" type="range" value={this.state.page} min="0" max={maxPage} step="1" onChange={(e) => this.changePage(e.target.value)}/>
        </div>
      </div>
    )
  }
  componentDidMount(){

  }

  render(){
    const comics = [
      {
        title: "武装錬金",
        count: 10,
        continued: false,
        img: "https://images-na.ssl-images-amazon.com/images/I/51SG2P7EEVL.jpg"
      },
      {
        title: "SHY -シャイ-",
        count: 3,
        continued: true,
        img: "https://images-na.ssl-images-amazon.com/images/I/81RAeGR8VbL.jpg"
      },
      {
        title: "僕の心のヤバイやつ",
        count: 2,
        continued: true,
        img: "https://images-na.ssl-images-amazon.com/images/I/81mFSP0fc-L.jpg"
      },
    ];

    const NumberOfBooks = [
      {
        date: "2020/02/23",
        count: 1,
        title: "書く、自由に。",
        img: Shigi,
        url: "/"
      },
    ];
    return (
      <MuiThemeProvider theme={theme}>
        <Box className="App">
          <AppBar position="static" bgcolor="primary">
            <Toolbar>
              <Typography variant="h6">
                Shigi's Portfolio
              </Typography>
            </Toolbar>
          </AppBar>
          <Router>
            <Switch>
              <Route exact path="/" render={() => this.Books(AboutMe, 7)} />
            </Switch>
            <Container maxWidth="lg" p={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <Typography paragraph>
                    次回更新日 未定
                  </Typography>
                  <Typography variant="h4" component="h4">
                    Shigi's Portfolio
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
                  <Box>
                    <Card variant="outlined">
                      <Grid container>
                        {NumberOfBooks.map((book) => {
                          return(
                            <Grid item xs={12} key={book.title}>
                              <Card p={2}>
                                <Link to={book.url} style={{color: "#555", textDecoration: "none"}}>
                                  <CardActionArea>
                                    <Box p={2}>
                                      <Grid container>
                                          <Grid item xs={2}>
                                            <Box p={1}>
                                              <img src={book.img} width="100%" alt={`${book.title}のサムネイル`}/>
                                            </Box>
                                          </Grid>
                                        <Grid item xs={10}>
                                          <Typography variant="body2">
                                            {book.date}
                                          </Typography>
                                          <Typography>
                                            第{book.count}話
                                          </Typography>
                                          <Typography variant="body2">
                                            {book.title}
                                          </Typography>
                                        </Grid>
                                      </Grid>
                                    </Box>
                                  </CardActionArea>
                                </Link>
                              </Card>
                            </Grid>
                          )
                        })}
                      </Grid>
                    </Card>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <Typography paragraph variant="h6" component="h6">
                          僕のイチオシ漫画
                        </Typography>
                      </Grid>
                      {comics.map((comic) => {
                        return(
                          <Grid item xs={4} key={comic.title}>
                            <Typography paragraph>
                              {comic.title}
                            </Typography>
                            <Typography>
                              <img src={comic.img} width="100%" height="auto"/>
                              全{comic.count}巻
                              {comic.continued ?
                                <Typography component="span">
                                  (連載中)
                                </Typography>
                                :
                                <Typography component="span">
                                  (完結)
                                </Typography>
                              }
                            </Typography>
                          </Grid>
                        )
                      })}
                    </Grid>
                  </Box>
                  <Box>
                    <Card variant="outlined">
                      <a className="twitter-timeline" href="https://twitter.com/shigu_p?ref_src=twsrc%5Etfw" height="400px">Tweets by shigu_p</a>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            </Container>
            <Box bgcolor="text.secondary" color="background.paper" p={2}>
              <Typography align="center" variant="body2">
                2020 Toshiki Shigihara
              </Typography>
            </Box>
          </Router>
        </Box>
      </MuiThemeProvider>
    );
  }
}

export default App;
