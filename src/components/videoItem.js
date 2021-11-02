import React from "react";
import { Grid, Paper, Typography } from '@material-ui/core';

const VideoItem = ({ video, onVideoSelect }) => {
  return(
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center", cursor: 'pointer'}} onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: '20px'}} width="40%" alt="Thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1" style={{fontSize: "15px"}}><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  ) 
}

export default VideoItem;