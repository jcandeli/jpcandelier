import styled from '@emotion/styled';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const Body = styled.body`
  @font-face {
    font-family: 'Bebas-Neue';
    src: url('/fonts/BebasNeue.eot');
    src: url('/fonts/BebasNeue.eot?#iefix') format('embedded-opentype'),
      url('/fonts/BebasNeue.woff2') format('woff2'), url('/fonts/BebasNeue.woff') format('woff'),
      url('/fonts/BebasNeue.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Bebas-Neue-Light';
    src: url('/fonts/Bebas-Neue-Light.ttf.woff') format('woff'),
      url('/fonts/Bebas-Neue-Light.ttf.svg#Bebas-Neue-Light') format('svg'),
      url('/fonts/Bebas-Neue-Light.ttf.eot'),
      url('/fonts/Bebas-Neue-Light.eot?#iefix') format('embedded-opentype');
  }

  color: 383838;
  margin: 0;
  background-color: #fbfbfb;
  font-family: sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-family: 'Bebas-Neue';
    margin: 0;
  }

  a {
    color: #383838;
  }
`;

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="JP Candelier Photography" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jpcandelier.com" />
          <meta property="og:image" content="https://jpcandelier.com/img/screenshot.png" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Body>
          <div
            dangerouslySetInnerHTML={{
              __html: `<!-- 
                                                                   _ 
              |__| _   . _  _    _   | _  _ |    _  _ _     _  _|   )
              |  |(_|\/|| )(_)  (_|  |(_)(_)|(  (_|| (_)|_|| )(_|  . 
                            _/                                                                                                                                                                                                     
              Feel free to visit my Github repository to see the code and details for how I build this site!
              https://github.com/jcandeli/jpcandelier
              Website built with:
              React
              React Hooks
              Typescript
              Emotion
              NextJS
              Jest
              Storybook
              
          -->`,
            }}
          />
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}

export default MyDocument;