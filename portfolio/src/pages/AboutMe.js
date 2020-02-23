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
        <Box style={{height: "100%"}}>
          <Card>
            <CardHeader title={
              <Typography variant="h4" component="h4" align="center" paragraph>
                このサイトについて
              </Typography>
            }/>
            <CardContent>
              <Container maxWidth="lg">
                <Typography paragraph>
                  <Typography component="span" color="primary"><b>ある男の自己紹介サイト</b></Typography>である。
                </Typography>
                <Typography paragraph>
                  大学でプログラミングを始めとした技術を学んでいくうちに、男はweb制作の分野に興味を持った。
                  そうして今、男はエンジニアとして働きたいと考えていた。
                  しかし、就職活動を始めた男を待ち受けていたのはある事実であった。
                  「エンジニアは、技術的な成果物があるとよい」
                  男は驚愕した。
                  そこで、まずはポートフォリオサイトを作ろうと思い立ったのだ。が。
                </Typography>
                <Typography color="primary" paragraph>
                  <b>男は天邪鬼だった</b>。
                </Typography>
                <Typography paragraph>
                  「どうせ作るなら他と違う雰囲気を醸し出したい」という思いをもった男は、自分の好きなものについて考え始めた。
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
                ある男
              </Typography>
            }/>
            <Box p={2}>
              <CardMedia component="img" image={Shigi} />
            </Box>
          </Card>
        </Box>
      );
    case 4:
      return(
        <Box style={{height: "100%"}}>
          <Card>
            <CardHeader title={
              <Typography variant="h4" align="center" paragraph>
                男は漫画が好きだった
              </Typography>
            }/>
            <CardContent>
              <Container maxWidth="lg">
                <Typography paragraph>
                  それはもう好きだった。男は漫画が大好きで、小さいころから漫画と共に成長してきた。
                  よって、男は漫画と何か関係づけてポートフォリオサイトが出来ないか考えた。
                  webサイトと漫画。男がすぐに一つのアイデアを思いついた。
                </Typography>
                <Typography paragraph color="primary">
                  <b>電子書籍。</b>
                </Typography>
                <Typography paragraph>
                  電子書籍風味にすることで、他と違ったポートフォリオサイトが出来るのではないかと考えた。
                  そう思い立つと、男はすぐに制作に取り掛かった。
                </Typography>
                <Typography paragraph>
                  男はweb制作ではフロントエンドの分野について勉強していたので、早速React.jsを使用してコードを書こうとした。
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
                取り巻く技術
              </Typography>
            }/>
            <CardContent>
              <Typography paragraph>
                Reactを使っていた男は技術的に新しいことをするため、途中からReact Hooksを取り入れたり、
                HTML、CSSのコーディング規約について調べたり試行錯誤した。
                そうして男はポートフォリオサイトを完成させた。
              </Typography>
              <Typography paragraph>
                しかし男は、一つ問題を抱えていた。
              </Typography>
              <Typography paragraph>
                <Typography component="span" color="primary">
                  <b>男は、本番環境へデプロイするということを経験したことがなかった。</b>
                </Typography>
                そのため、友人の協力を得ることにした。
                そして聞くところによると、Netlifyなるサービスがあるらしい。
                友人から教えを請い、Netlifyにデプロイすることに成功した。男にとって初めての体験であった。
              </Typography>
              <Typography paragraph>
                男は、苦労するのは嫌いだが、新しい技術を学びたいという意欲があった。
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

              </Typography>
            }/>
            <CardContent>
              <Typography paragraph>
                男は会津大学に通う学生だった。
              </Typography>
              <Typography paragraph color="primary">
                <b>名を鴫原俊樹といった。</b>
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
