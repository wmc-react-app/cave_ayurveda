import React, {Component} from 'react';
import BlogData from '../MainBlogData'

const MainBlog = ({location}) => {
  console.log(location);
  const path = location.pathname.split('/')[2];
  const data = BlogData.find(item => item.id === path);
  console.log()
  return (
      <div className='blogDetail mb-80'>
        <div className="row">
          <div className="col-md-12">
            <img src={data.image} alt="" className='img-responsive w-100 m-auto'/>
          </div>
        </div>
        <div className='blogContent'>
          <div className="container">
            <div className="row">
              <div className="col-md-12 section-title">
                <h1 className='text-center'>{data.title}</h1>

              </div>
              <div className='col-md-12 '>
                {data.html()}
              </div>
            </div>
          </div>
        </div>

      </div>
  )
}

export default MainBlog
