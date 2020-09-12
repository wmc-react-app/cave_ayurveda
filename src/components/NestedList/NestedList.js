import React, {Component} from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import {withStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import menuItems from '../menuItems'

const styles = {
  links: {
    textDecoration: 'none',
  }
};

class NestedList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
  handleClick(item) {
    this.setState(prevState => (
        {[item]: !prevState[item]}
    ))
  }

// if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
  handler(children) {
    const {classes} = this.props
    const {state} = this
    return children.map((subOption) => {
      if (!subOption.children) {
        return (
            <div key={subOption.name}>
              <ListItem
                  button
                  key={subOption.name}>
                <a
                    href={subOption.url}
                    className={classes.links}>
                  <ListItemText
                      inset
                      primary={subOption.name}
                  />
                </a>
              </ListItem>
            </div>
        )
      }
      return (
          <div key={subOption.name}>
            <ListItem
                button
                onClick={() => this.handleClick(subOption.name)}>
              <ListItemText
                  inset
                  primary={subOption.name}/>
              {state[subOption.name] ?
                  <ExpandLess/> :
                  <ExpandMore/>
              }
            </ListItem>
            <Collapse
                in={state[subOption.name]}
                timeout="auto"
                unmountOnExit
            >
              {this.handler(subOption.children)}
            </Collapse>
          </div>
      )
    })
  }

  render() {
    const {classes} = this.props
    return (
        <div className={classes.list}>
          <List>
            {this.handler(menuItems.data)}
          </List>

        </div>
    )
  }
}

export default withStyles(styles)(NestedList)
