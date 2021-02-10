import React, { Component } from 'react'
import SearchBar from '../compnents/SearchBar'
import youtube from '../apis/youtube'
import VedioList from '../compnents/VedioList'
import VedioDetails from './VedioDetails'
export default class App extends Component {
  
  state = { videos: [], selectedVideo: null }
  
  componentDidMount(){
    this.onTermSubmit('technologies');
  }


  onTermSubmit = async (term) => {

    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }
  onVideoSelect = vedio => {
    this.setState({ selectedVideo: vedio });
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} vedios.
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VedioDetails vedio={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VedioList onVideoSelect={this.onVideoSelect} vedios={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
