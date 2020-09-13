import React, {Component} from 'react';
import BlogData from '../MainBlogData'
import {Route, Switch, useHistory} from "react-router-dom";
import {Link} from 'react-router-dom'
import blog1_heading from '../../assets/images/blog1_heading.png'
import MainBlog from '../MainBlog/MainBlog'

const onClickReadMore = (value, props) => {
  props.history.push({pathname: `/mainBlog/${value.id}`, state: value})

};
const Blog = (props) => {
  console.log(BlogData);
  const {match} = props;

  return (
      <div className='blog mb-80'>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className='section-title'>BLOG</h1>
            </div>
          </div>
          {BlogData.map((value, key) => {
                return (
                    <div className='row' key={value.id}>
                      <div className="col-md-6">
                        <div className='blogThumbnail'>
                          <img src={value.image} alt="Heading"
                               className='img-thumbnail w-100 m-auto'/>
                        </div>
                      </div>
                      <div className="col-md-6 blogPreface">
                        <h4 className='colorChange'>{value.title}</h4>
                        <p>{value.synopsis}...<span><Link to={`/mainBlog/${value.id}`} target='_blank' className='text-success '>Read More</Link></span>
                        </p>
                      </div>

                      {/*<div className="col-md-12">
                        <Route path={`${match.path}/:id`} component={MainBlog}/>
                      </div>*/}
                    </div>
                )
              }
          )
          }
        </div>
      </div>
  )
}

export default Blog
