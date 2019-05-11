import React, { Component } from 'react';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBAuS89Fs2X28EP8EiQJc4a6oRhHwGqeq4';



class FighterDetails extends Component {
  fighterArray = this.props.data[this.props.match.params.id]
  containerColor = this.fighterArray.containerColor

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    var fighterSearch = this.fighterArray.name + ' smash bros ultimate';

    this.videoSearch(fighterSearch);

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term, maxResults: 25}, (videos) => { // (videos) => is same as 'function(videos)'. This is a different videos than this.state
      this.setState({
        videos: videos,
        //videos: videos.unshift(),
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    // const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
    // <div className="fighter-image">
    //   <img src={('../assets/' + this.fighterArray.img + '.png')} alt="Fighter"></img>
    // </div>


    return (
      <div className="fighter-detail-page">

        <div ID="fighter-title">
        {this.fighterArray.name}
        </div>

        <div className="fighter-video" style={{}}>
          <VideoDetail
            video={this.state.selectedVideo}
            entryVideo={this.fighterArray.entryVideo} />
        </div>
        <div className="container">
          <div className="fighter-video-list">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo}) } // {selectedVideo} is video:selectedVideo
              videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default FighterDetails;
