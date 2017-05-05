import React, { Component } from 'react';
import './Cast.css'

class Cast extends Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-2">
        <div className="panel panel-default">
          <div className="panel-body">
            <div>
            <img src={`https://image.tmdb.org/t/p/w150${this.props.item.profile_path}`} alt="" />
            </div>
            <p>{this.props.item.name}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cast;