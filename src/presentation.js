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
import { Player } from 'video-react';

// Import Spectacle Code Slide
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';
import "../node_modules/video-react/dist/video-react.css";
import Emoji from 'react-emoji-render';

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
          <Heading size={3} textColor="primary">
            Topics We'll Cover
          </Heading>
          <List className="list">
            <ListItem>What is a service worker?</ListItem>
            <ListItem>How do they work?</ListItem>
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
            that don't require user interaction. 
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
              Has to be installed through Javascript on your website
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
            <small style={{ fontSize: '12px' }}>Gaunt, Matt. (2019, May 29). <a href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw-loader!./assets/register.example").default}
            ranges={[
              { loc: [0, 18], title: "Step 1: Register the Service Worker" },
              { loc: [0, 1], title: "Listen for the page to load" },
              { loc: [1, 2], title: "Check for support", note: 'Here, we`re checking for service worker support.' },
              { loc: [2, 3], title: "Register the service worker", note: "Browser will automatically check to see if it's registered already and handle it apropriately." },
              { loc: [4, 6], title: "Setup Firebase Cloud Messaging" },
              { loc: [6, 7], title: "Set initial UI state" },
              { loc: [14, 17], title: "Check for push notification support" }
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Configuring a Service Worker
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Step 1: Register the Service Worker
          </Text>
          <div style={{ float: 'left', width: '40%' }}>
            <div className="spacedText">
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              Shown in Chrome Dev Tools under the Application tab
            </Text>
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              Status will have a green dot if the service worker was successfully installed
            </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '57%', paddingTop: '40px' }}>
            <Image src="img/sw-registered-chromedevtools.jpg" />
          </div>
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
                Depending on the configuration you use, <strong>all</strong> files may need to be cached successfully to install the service worker
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Image src="img/sw-lifecycle-installing.jpg" width="450" />
            <small style={{ fontSize: '12px' }}>Gaunt, Matt. (2019, May 29). <a href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw-loader!./assets/install.example").default}
            ranges={[
              { loc: [0, 37], title: "Step 2: Install the Service Worker" },
              { loc: [0, 1], title: "Name the cache" },
              { loc: [1, 8], title: "List the files to cache", note: "You can't use file paths here like /js/*"},
              { loc: [9, 10], title: "Add an 'install' event listener" },
              { loc: [10, 11], title: "Tell browser to wait", note: "Accepts a promise and uses it to know how long installation takes." },
              { loc: [11, 12], title: "Open and name the cache" },
              { loc: [13, 14], title: "Add all URLs to the cache", note: "Service worker is only successfully installed if ALL of the files are successfully cached." },
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Configuring a Service Worker
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            The Chrome Dev Tools Application tab shows the cached resources
          </Text>
          <Image src="img/cached-resources-chromedevtools.jpg" />
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Caching Strategies
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            There are many, but we'll just look at a few:
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
            Caching Strategies
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            That being said, the demo app uses the cache first, fallback to network strategy to use cached resources 
            where available, but request them from the network as needed.
          </Text>
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw-loader!./assets/cachefetch.example").default}
            ranges={[
              { loc: [0, 19], title: "Cache First, Fallback to Network" },
              { loc: [0, 1], title: "Add a 'fetch' event listener" },
              { loc: [1, 2], title: "Provide our own response to the fetch event" },
              { loc: [2, 3], title: "Check cache for requested resource" },
              { loc: [3, 7], title: "Handle success", note: "If the resource is found in the cache, return it." },
              { loc: [8, 9], title: "Fallback to network", note: "Fetch the resource over the network" },
              { loc: [9, 14], title: "Cache the resource", note: "Open the cache and add the resource just requested so it's cached for future requests and then return it." },
              { loc: [15, 16], title: "Handled non-cached requests", note: "If user is offline and attempts to access a new page, return custom error message."},
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Let's Take This Offline
          </Heading>
          <div style={{ float: 'left', width: '47%' }}>
            <div className="spacedText">
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              By caching the resources needed for your website, you can provide an offline experience.
            </Text>
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              This can be hard for things like database queries, but Firestore has an offline caching option. <Emoji text="🎉" />
            </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '47%', paddingTop: '40px' }}>
            <Player
              playsInline
              autoPlay={true}
              src="videos/offline-video.webm"
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
              <Text>
                Once the <Code>activate</Code> event fires, you have to reload the page before it will be controlled by the service worker
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                After this step, service worker controls all pages that fall under its scope
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Can handle cache management during this step
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '40%' }}>
            <Image src="img/sw-lifecycle-activated.jpg" width="450" />
            <small style={{ fontSize: '12px' }}>Gaunt, Matt. (2019, May 29). <a href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
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
            <Image src="img/sw-lifecycle-action.jpg" width="450" />
            <small style={{ fontSize: '12px' }}>Gaunt, Matt. (2019, May 29). <a href="https://developers.google.com/web/fundamentals/primers/service-workers/">Service Workers: An Introduction</a></small>
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Push Notifications
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            1. Handle Subscribes
          </Text>
          <div style={{ float: 'left', width: '60%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                To get push notifications, the user has to subscribe. This is per device.
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Firebase Cloud Messaging for subscriber tokens and sending notifications
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Firebase Firestore database for storing subscriber tokens and website data.
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '40%', paddingTop: '40px' }}>
            <Player
                playsInline
                autoPlay={true}
                src="videos/subscribe.webm"
                style={{ width: '80%' }}
              />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Push Notifications
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            Subscriber Workflow
          </Text>
          <Image src="img/Subscribe-workflow.png" />
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw-loader!./assets/subscribe.example").default}
            ranges={[
              { loc: [2, 9], title: "Get permission to send push notifications" },
              { loc: [10, 11], title: "Get messaging token", note: "Get a messaging token from Firebase Cloud Messaging" },
              { loc: [11, 20], title: "Is this an existing subscriber?", note: "Check to see if the token is already in the subscriber collection in the Firestore database" },
              { loc: [20, 31], title: "Add new subscriber", note: "If device isn't already subscribed, add a new subscription to the database" },
              { loc: [33, 37], title: "Update UI", note: "Update component state if device is successfully subscribed"}
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Push Notifications
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            2. Handle Unsubscribes
          </Text>
          <br />
          <Text margin="10px 0 0" textColor="secondary" size={1}>
              Users need to be able to opt out of subscriptions at any point
            </Text>
            <Image src="img/Unsubscribe.png" />
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw-loader!./assets/unsubscribe.example").default}
            ranges={[
              { loc: [1, 2], title: "Delete messaging token", note: "Delete the subscriber token for the device from Firebase Cloud Messaging service" },
              { loc: [3, 8], title: "Delete the token from the database" },
              { loc: [10, 17], title: "Remove from local storage and update UI" },
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Push Notifications
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            3. Displaying Notifications
          </Text>
          <div style={{ float: 'left', width: '47%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Notifications are handled differently depending on whether the user is actively viewing the site when the notification is received
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                The <strong>service worker</strong> handles push notifications received when the website is not being actively viewed
              </Text>
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                The <strong>website</strong> handles push notifications received when it's actively viewed
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '47%', paddingTop: '40px' }}>
            <Player
              playsInline
              autoPlay={true}
              src="videos/onpage-notification.webm"
            />
          </div>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Push Notifications
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            3. Notifying Users When New Books Are Added
          </Text>
          <Image src="img/Notification-workflow.png" />
        </Slide>
        <CodeSlide
            transition={[]}
            lang="js"
            code={require("!raw-loader!./assets/cloudfunction.example").default}
            ranges={[
              { loc: [5, 12], title: "Listen for changes", note: "When there are write events, get the new book title from the URL. Ignore deletes." },
              { loc: [13, 14], title: "Connect to the Firestore database" },
              { loc: [15, 22], title: "Get subscriber tokens" },
              { loc: [23, 30], title: "Create the notification payload" },
              { loc: [31, 63], title: "Send the notification to each subscriber" },
            ]}
            style={{ fontSize: '0.7em' }}
        />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Push Notifications
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            3a. Handle Notifications Through Service Worker
          </Text>
          <div style={{ float: 'left', width: '47%' }}>
            <div className="spacedText">
              <Text margin="10px 0 0" textColor="secondary" size={1}>
                Service worker listens in the background for notifications from Firebase Cloud Messaging
              </Text>
            </div>
          </div>
          <div style={{ float: 'right', width: '47%', paddingTop: '40px' }}>
            <Player
              playsInline
              autoPlay={true}
              src="videos/background-notification.webm"
            />
          </div>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={require("!raw-loader!./assets/swmessagelistener.example").default}
          ranges={[
            { loc: [3, 5], title: "Import Firebase scripts" },
            { loc: [8, 12], title: "Initialize Firebase app in service worker" },
            { loc: [12, 19], title: "Handle notifications in the background" },
          ]}
          style={{ fontSize: '0.7em' }}
      />
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>
            Push Notifications
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={1}>
            3b. Handle Notifications Through Website
          </Text>
          <div className="spacedText">
            <Text margin="10px 0 0" textColor="secondary" size={1}>
              Website listens for notifications from Firebase Cloud Messaging while site is actively open
              (i.e., it's active in the window or the active tab)
            </Text>
          </div>
          <CodePane
            lang="js"
            source={require("!raw-loader!./assets/websitemessagelistener.example").default}
            className="code-pane"
          />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Thank You!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
