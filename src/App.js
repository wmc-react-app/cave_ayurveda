import React, {Component} from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import {ParallaxProvider} from 'react-scroll-parallax'
import Footer from "./components/Footer/Footer";
import TermsConditions from "./components/TermsConditions/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import FAQs from "./components/FAQs/FAQs";
import HairWellness from "./components/HairWellness/HairWellness";
import SkinWellness from "./components/SkinWellness/SkinWellness";
import MindWellness from "./components/MindWellness/MindWellness";
import ImmunityBooster from "./components/ImmunityBooster/ImmunityBooster";
import Triphala from "./components/Triphala/Triphala";
import Ashwagandha from "./components/Ashwagandha/Ashwagandha";
import Spirulina from "./components/Spirulina/Spirulina";
import Shilajit from "./components/Shilajit/Shilajit";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import MainBlog from "./components/MainBlog/MainBlog";

class App extends Component {
  render() {
    return (
        <ParallaxProvider>
          <Router>
            <Header/>
            <Switch>
              <Route component={Home} path='/' exact/>
              <Route component={TermsConditions} path='/termsConditions'/>
              <Route component={PrivacyPolicy} path='/privacyPolicy'/>
              <Route component={FAQs} path='/faqs'/>
              <Route component={HairWellness} path='/hairWellness'/>
              <Route component={SkinWellness} path='/skinWellness'/>
              <Route component={MindWellness} path='/mindWellness'/>
              <Route component={ImmunityBooster} path='/immunityBooster'/>
              <Route component={Triphala} path='/triphala'/>
              <Route component={Ashwagandha} path='/ashwagandha'/>
              <Route component={Spirulina} path='/spirulina'/>
              <Route component={Shilajit} path='/shilajit'/>
              <Route component={About} path='/about'/>
              <Route component={Blog} path='/blog'/>
              <Route component={MainBlog} path='/mainBlog/:id'/>
            </Switch>
            <Footer/>
          </Router>
        </ParallaxProvider>
    )
  }
}

export default App;
