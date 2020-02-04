import React, { Component } from "react";
import AppContext from "../context/AppContext";

class NewsCard extends Component {
  componentDidMount() {
    this.context.apiCall(this.props.path)
  }
  render() {
    return (
      <AppContext.Consumer>
        {(context) => {
          return (
            <React.Fragment>
              {context.state[this.props.path].map((news, i) => {
                return (
                  <div key={i} className='news-card'>
                    {news.imageUrl &&
                      <div className='thumbnail'>
                        <img src={news.imageUrl} alt={news.title} />
                      </div>
                    }
                    <div className='news-content'>
                      <p className='section-tag'>{news.section}</p>
                      <h3><a href={news.url}>{news.title}</a></h3>
                      <p>{news.description}</p>
                    </div>
                  </div>
                )
              })}
            </React.Fragment>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
NewsCard.contextType = AppContext
export default NewsCard