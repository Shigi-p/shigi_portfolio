import React from 'react'

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography,
} from "@material-ui/core";

import Shigi from "./Image.jpg";

export default function AboutMe(page){
  switch(page){
    case 0:
      return(
        <div className="Page0"/>
      );
    case 1:
      return(
        <Box style={{height: "100%"}}>
          <Card>
            <CardHeader title={
              <Typography variant="h4" component="h4" align="center" paragraph>
                {/*Shigi's portfolio.*/}
                作品名
              </Typography>
            }/>
            <CardContent>
              <Typography variant="h4" component="h4" align="center">
                第一話
              </Typography>
              <Typography variant="h4" component="h4" align="center">
                {/*書く、自由に。*/}
                タイトル
              </Typography>
            </CardContent>
          </Card>
        </Box>
      );
    case 2:
      return(
        <Box style={{height: "100%"}}>
          <Card>
            <CardHeader title={
              <Typography variant="h4" component="h4" align="center" paragraph>
                {/*ポートフォリオサイト、作りました。*/}
                タイトル
              </Typography>
            }/>
            <CardContent>
              <Container maxWidth="lg">
                <Typography paragraph>
                  文章
                {/*  会津大学に通う学生、Shigiと申します。この度ポートフォリオサイトを作りました。*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*  天邪鬼なので、自分のポートフォリオを作る際に「他と違ったものにしたい！」と思ったら電子書籍風になってしましました。*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*  自由に文章をごちゃごちゃ書き綴っていこうかと思います。*/}
                </Typography>
              </Container>
            </CardContent>
          </Card>
        </Box>
      );
    case 3:
      return(
        <Box style={{height: "100%"}}>
          <Card>
            <CardHeader title={
              <Typography variant="h4" align="center">
                {/*ある男*/}
                タイトル
              </Typography>
            }/>
            <Typography paragraph>
              文章
            </Typography>
            {/*<Box p={2}>*/}
            {/*  <CardMedia component="img" image={Shigi} />*/}
            {/*</Box>*/}
          </Card>
        </Box>
      );
    case 4:
      return(
        <Box style={{height: "100%"}}>
          <Card>
            <CardHeader title={
              <Typography variant="h4" align="center" paragraph>
                {/*男は漫画が好きだった*/}
              </Typography>
            }/>
            <CardContent>
              <Container maxWidth="lg">
                <Typography paragraph>
                  文章
                {/*  それはもう好きだった。男は漫画が大好きで、小さいころから漫画と共に成長してきた。*/}
                {/*  よって、男は漫画と何か関係づけてポートフォリオサイトが出来ないか考えた。*/}
                {/*  webサイトと漫画。男がすぐに一つのアイデアを思いついた。*/}
                {/*</Typography>*/}
                {/*<Typography paragraph color="primary">*/}
                {/*  <b>電子書籍。</b>*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*  電子書籍風味にすることで、他と違ったポートフォリオサイトが出来るのではないかと考えた。*/}
                {/*  そう思い立つと、男はすぐに制作に取り掛かった。*/}
                {/*</Typography>*/}
                {/*<Typography paragraph>*/}
                {/*  男はweb制作ではフロントエンドの分野について勉強していたので、早速React.jsを使用してコードを書こうとした。*/}
                </Typography>
              </Container>
            </CardContent>
          </Card>
        </Box>
      );
    case 5:
      return(
        <Box style={{height: "100%"}}>
          <Card>
            <CardHeader title={
              <Typography variant="h4" component="h4" align="center" paragraph>
                {/*取り巻く技術*/}
                タイトル
              </Typography>
            }/>
            <CardContent>
              <Typography paragraph>
                文章
              {/*  Reactを使っていた男は技術的に新しいことをするため、途中からReact Hooksを取り入れたり、*/}
              {/*  HTML、CSSのコーディング規約について調べたり試行錯誤した。*/}
              {/*  そうして男はポートフォリオサイトを完成させた。*/}
              {/*</Typography>*/}
              {/*<Typography paragraph>*/}
              {/*  しかし男は、一つ問題を抱えていた。*/}
              {/*</Typography>*/}
              {/*<Typography paragraph>*/}
              {/*  <Typography component="span" color="primary">*/}
              {/*    <b>男は、本番環境へデプロイするということを経験したことがなかった。</b>*/}
              {/*  </Typography>*/}
              {/*  そのため、友人の協力を得ることにした。*/}
              {/*  そして聞くところによると、Netlifyなるサービスがあるらしい。*/}
              {/*  友人から教えを請い、Netlifyにデプロイすることに成功した。男にとって初めての体験であった。*/}
              {/*</Typography>*/}
              {/*<Typography paragraph>*/}
              {/*  男は、苦労するのは嫌いだが、新しい技術を学びたいという意欲があった。*/}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      );
    case 6:
      return(
        <Box style={{height: "100%"}}>
          <Card>
            <CardHeader title={
              <Typography variant="h4" component="h4" align="center" paragraph>
                {/*男の名は。*/}
                タイトル
              </Typography>
            }/>
            <CardContent>
              <Typography paragraph>
                文章
              {/*  男は会津大学に通う学生だった。*/}
              {/*</Typography>*/}
              {/*<Typography paragraph color="primary">*/}
              {/*  <b>名を鴫原俊樹といった。</b>*/}
              {/*</Typography>*/}
              {/*<Typography paragraph>*/}
              {/*  彼はwebのフロントエンドを中心に勉強していた。*/}
              {/*  彼の通う会津大学はC、Java、C++を中心としたプログラミングや*/}
              {/*  アルゴリズム、基本的なコンピュータアーキテクチャをを学ぶものの、*/}
              {/*  webの講義は少なかった。*/}
              {/*  web制作に興味があった彼は、それらの知識を自分で学ぶしかなかった。*/}
              {/*  友人を巻き込み、先輩の協力を借りながらweb制作を学んでいった。*/}
              {/*</Typography>*/}
              {/*<Typography paragraph>*/}
              {/*  始めは何からしていいかわからず、とりあえずHTMLとcssを書いていた。*/}
              {/*  しかし、冷静に考えると動的なページやページ遷移などweb制作に必要なものが揃っていないことに気がついた。*/}
              {/*  そこで彼はjsのフレームワークを勉強しはじめた。*/}
              {/*  Vue.js、React.jsを使えるようになってから、制作できるものの幅が増えた。*/}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      );
    case 7:
      return(
        <Box style={{height: "100%"}}>
          <Card>
            <CardContent>
              <Typography paragraph>
                文章
              {/*  hogehoge*/}
              {/*</Typography>*/}
              {/*<Typography paragraph>*/}
              {/*  hogehoge*/}
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
