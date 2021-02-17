import React from "react"
import ReactPlayer from "react-player"

export default function TrackEntry({ url }) {
    return (
    <div>
      <ReactPlayer
        url={ url }
        height="120px"
      />
    </div>
    )
}