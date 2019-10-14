import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class TabsRender extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://raw.githubusercontent.com/tess-build-week/TESS-FE/master/picture-of-the-earth-height-of-20000px-Google-Search.png) center / cover'}} >Nasa's T.E.S.S.</CardTitle>
        <CardText>
          Built the front-end for this project with my team. Has multiple api calls, uses react router, and displays Api data on a onclick event.
          </CardText>
        <CardActions border>
          <Button colored href ="https://github.com/tess-build-week">GitHub</Button>
         
          <Button colored href ="https://thenasaprojecttess.netlify.com/">Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
        </CardMenu>
        </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(http://pluspng.com/img-png/instagram-png-instagram-png-logo-1455.png) center / cover'}} >instagram clone</CardTitle>
            <CardText>
              This is my instagram clone. I remade instagram in a week. This project demonstrates my profeciency within react. 
            </CardText>
            <CardActions border>
              <Button colored href = "https://github.com/Bryce-Soghigian/React-Insta-Clone/tree/master/instagram-app">GitHub</Button>
              
              <Button colored href = "https://bryces-instagram-clone.netlify.com/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'blue', height: '176px', background: 'url(https://cdn4.iconfinder.com/data/icons/academic-disciplines-color/64/current-events-512.png) center / cover'}} >Lambda Times</CardTitle>
            <CardText>
              Welcome to lambda times! Your newsfeed for anything software related! I programmed this app in a two hour time constraint.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/Bryce-Soghigian/Sprint-Challenge-Lambda-Times-React">GitHub</Button>
              
              <Button colored href ="https://lambda-times-react-edition.netlify.com/">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
          
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
        ////////////////////
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-naxfTaCgG1a8rmsmFkDixXn4fwKqrftkhAlMP16Saepn_Xr1g) center / cover'}} >My Portfolio</CardTitle>
            <CardText>
              My Portfolio.The code for this website showcases everything you need from a react frontend Developer! Don't believe me check out the code!
              </CardText>
            <CardActions border>
              <Button colored href ="https://github.com/Bryce-Soghigian/React-Portfolio-Site">GitHub</Button>
             
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Sprint Challenges</h1>
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.agilesparks.com/wp-content/uploads/2019/04/250px-chessset.jpg) center / cover'}} >Code Sprints!</CardTitle>
            <CardText>
              What is a sprint challenge? Well check out my repo for more, but the basic description is we get a project every friday and 3 hours to complete it.Do or die.All 30 sprints will be posted in the repo below !
              </CardText>
            <CardActions border>
              <Button colored href ="https://github.com/Bryce-Soghigian/Deployed-Sprints">GitHub</Button>
             
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Python Projects</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          {/* <Tab>Angular</Tab> */}
          <Tab>Portfolio code</Tab>
         <Tab>Code Sprints</Tab> 
          {/* <Tab>MongoDB</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default TabsRender;