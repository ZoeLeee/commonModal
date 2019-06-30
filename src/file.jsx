import React, { Component } from 'react'

const InitData = Array(20).fill("http://cdn.dodream.top/下载.png");

const UlStyle = {
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
}

const LiStyle = {
  position:"relative",
  width: "20%",
  padding:"10px",
}

export default class file extends Component {
  render() {
    return (
      <ul style={UlStyle} ref={el=>this._el=el}>
          {
            InitData.map((d,i) => {
              return <li style={LiStyle} key={i}>
                <div style={{
                  height: 0,
                  paddingBottom: "100%",
                  position: "relative",
                  width: "100%",
                }}>
                  <img
                    style={{
                      position: "absolute"
                    }}
                    src={d} alt="" />
                </div>
              </li>
            })
          }
        </ul>
    )
  }
}
