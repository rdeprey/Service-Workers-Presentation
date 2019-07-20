/* eslint import/no-webpack-loader-syntax: off */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Image,
  Table,
  TableBody,
  TableRow,
  TableItem,
  CodePane,
  Code
} from 'spectacle';

// Import Spectacle Code Slide
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

// Custom CSS
require('./presentation.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Service Workers
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Add offline and native app capabilities to your web app
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={3} textColor="secondary">
            Topics We'll Cover
          </Heading>
          <List className="list">
            <ListItem>What is a service worker?</ListItem>
            <ListItem>How they work</ListItem>
            <ListItem>Demo
              <List>
                <ListItem>Configuring a Service Worker</ListItem>
                <ListItem>Caching Strategies</ListItem>
                <ListItem>Push Notifications</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            What is a Service Worker?
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            A script that your web app runs in the background, separate from a web page, that makes it possible to offer features
            that don't require a web page or user interaction. 
          </Text>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem style={{ width: '33%' }}>Caching</TableItem>
                <TableItem style={{ width: '33%' }}>Push Notifications</TableItem>
                <TableItem style={{ width: '33%' }}>Offline Capabilities</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={3} textColor="secondary" caps>
            What is a Service Worker?
          </Heading>
          <div className="spacedText">
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              Can only be registered on pages served over HTTPS
            </Text>
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              <a href="https://jakearchibald.github.io/isserviceworkerready/">Supported in many (but not all) browsers</a>
            </Text>
            <Image src="img/sw-support.jpg" width="700" />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
        <Heading size={3} textColor="secondary" caps>
            What is a Service Worker?
          </Heading>
          <div className="spacedText">
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              Let you manage how network requests from your app are handled
            </Text>
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              Can't access the DOM directly, but can communicate with pages which can manipulate the DOM
            </Text>
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              Terminated when not in use and restarted when needed again
            </Text>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            How do Service Workers Work?
          </Heading>
          <Heading size={6} textColor="primary" caps style={{ margin: '30px 0px' }}>
            Service Worker Lifecycle
          </Heading>
          <div style={{ float: 'left', width: '50%' }}>
            <Text margin="10px 0 0" textColor="primary" size={1}>
              Separate life cycle from your web page
            </Text>
            <br />
            <Text margin="10px 0 0" textColor="primary" size={1}>
              Has to be installed, which is done through Javascript
            </Text>
          </div>
          <div style={{ float: 'right', width: '50%' }}>
            <Image src="img/sw-lifecycle.jpg" width="450" />
            <small style={{ fontSize: '12px', color: '#ffffff' }}>Gaunt, Matt. (2019, May 29). <a style={{ color: '#ffffff' }} href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Demo
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
              This demo is built with:
          </Text>
          <List textColor="secondary" className="list">
            <ListItem>React.js</ListItem>
            <ListItem>Firebase Cloud Messaging</ListItem>
            <ListItem>Firebase Firestore</ListItem>
            <ListItem>Firebase Cloud Functions</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Configuring a Service Worker
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Step 1: Register the Service Worker
          </Text>
          <div style={{ float: 'left', width: '60%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Tells the browser where the Javascript for your service worker exists
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Should check to make sure that the browser supports service workers before registering one
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Service worker's scope is based on its location in the project
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Image src="img/sw-lifecycle-installing.jpg" width="450" />
            <small style={{ fontSize: '12px', color: '#ffffff' }}>Gaunt, Matt. (2019, May 29). <a style={{ color: '#ffffff' }} href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw-loader!./assets/register.example").default}
            ranges={[
              { loc: [0, 11], title: "Step 1: Register" },
              { loc: [0, 1], title: "Check for support", note: 'Here, we`re checking for service worker and push notification support.' },
              { loc: [1, 2], title: "Listen for the page to load" },
              { loc: [2, 3], title: "Register the service worker", note: "Browser will automatically check to see if it's registered already and handle it apropriately." },
              { loc: [3, 10], title: "Handle promise success/fail" },
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          ADD SLIDE SHOWING HOW TO CHECK WHETHER THE SW INSTALLED IN CHROME DEV TOOLS
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Configuring a Service Worker
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Step 2: Install the Service Worker
          </Text>
          <div style={{ float: 'left', width: '60%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Service worker script handles the install event
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Generally where you handle caching files
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                <strong>All</strong> files to be cached must be cached successfully to install the service worker
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Image src="img/sw-lifecycle-installing.jpg" width="450" />
            <small style={{ fontSize: '12px', color: '#ffffff' }}>Gaunt, Matt. (2019, May 29). <a style={{ color: '#ffffff' }} href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw-loader!./assets/install.example").default}
            ranges={[
              { loc: [0, 11], title: "Step 2: Install" },
              { loc: [0, 1], title: "Name the cache" },
              { loc: [1, 2], title: "Add an 'install' event listener" },
              { loc: [2, 3], title: "Tell browser to wait", note: "Accepts a promise and uses it to know how long installation takes." },
              { loc: [3, 4], title: "Open and name the cache" },
              { loc: [4, 5], title: "Add all URLs to the cache", note: "Service worker is only successfully installed if ALL of the files are successfully cached." },
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Caching Strategies
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            There are multiple, but the main three are:
          </Text>
          <List textColor="secondary" className="list">
            <ListItem>Cache Only</ListItem>
            <ListItem>Network Only</ListItem>
            <ListItem>Cache First, Fallback to Network</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Caching Strategies
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Cache Only
          </Text>
          <div style={{ float: 'left', width: '47%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Useful for anything you would consider static to a "version" of your site
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Things like images, CSS, and JS are commonly cached under this strategy
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Want to cache these static assets during the service worker install step
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '47%', paddingTop: '40px' }}>
            <CodePane 
              lang="jsx"
              source={require("!raw-loader!./assets/cacheonly.example").default}
              className="code-pane"
            />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Caching Strategies
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Network Only
          </Text>
          <div style={{ float: 'left', width: '47%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Useful for things that don't have an offline equivalent, like PUT requests
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '47%', paddingTop: '40px' }}>
            <CodePane 
              lang="jsx"
              source={require("!raw-loader!./assets/networkonly.example").default}
              className="code-pane"
            />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Caching Strategies
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Cache First, Fallback to Network
          </Text>
          <div style={{ float: 'left', width: '47%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                This is the best way to handle building offline-first apps
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Allows you to pull from cache for static assets, while still using network requests as needed
              </Text>
              <Text>
                Can rely on cache, but check for changes and update the cache in the background
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '47%', paddingTop: '40px' }}>
            <CodePane 
              lang="jsx"
              source={require("!raw-loader!./assets/cachefirstnetworkfallback.example").default}
              className="code-pane"
            />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Configuring a Service Worker
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Step 3: Activation
          </Text>
          <div style={{ float: 'left', width: '60%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Good place to handle management of old caches
              </Text>
              <Text>
                Once the <Code>activate</Code> event fires, you have to reload the page before it will be controlled by the service worker
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                After this step, service worker controls all pages that fall under its scope
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Image src="img/sw-lifecycle-activated.jpg" width="450" />
            <small style={{ fontSize: '12px', color: '#ffffff' }}>Gaunt, Matt. (2019, May 29). <a style={{ color: '#ffffff' }} href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Configuring a Service Worker
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Step 4: Do All The Things!
          </Text>
          <div style={{ float: 'left', width: '60%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Service worker can be in one of two states:
              </Text>
              <List textColor="secondary" className="list__expanded">
                <ListItem><strong>In fetch/message state,</strong> it handles fetch and message events that occur when a network request 
                or message is made from your page.</ListItem>
                <ListItem><strong>If terminated,</strong> it's removed to save memory.</ListItem>
              </List>
            </div>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Image src="img/sw-lifecycle-activated.jpg" width="450" />
            <small style={{ fontSize: '12px', color: '#ffffff' }}>Gaunt, Matt. (2019, May 29). <a style={{ color: '#ffffff' }} href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Push Notifications
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            
          </Text>
          <div style={{ float: 'left', width: '60%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Service worker can be in one of two states:
              </Text>
              <List textColor="secondary" className="list__expanded">
                <ListItem><strong>In fetch/message state,</strong> it handles fetch and message events that occur when a network request 
                or message is made from your page.</ListItem>
                <ListItem><strong>If terminated,</strong> it's removed to save memory.</ListItem>
              </List>
            </div>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Image src="img/sw-lifecycle-activated.jpg" width="450" />
            <small style={{ fontSize: '12px', color: '#ffffff' }}>Gaunt, Matt. (2019, May 29). <a style={{ color: '#ffffff' }} href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
      </Deck>
    );
  }
}
