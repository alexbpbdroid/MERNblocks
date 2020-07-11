import { connect } from "react-redux";
import { fetchTrack, fetchTracks, destroyTrack } from "../../actions/track_actions";
import { fetchBlocks } from "../../actions/block_actions";
import TracksShow from "./tracks_show";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.user,
    tracks: state.tracks,
    blocks: state.blocks,
    errors: state.errors.tracks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTracks: (tracks) => dispatch(fetchTracks(tracks)),
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    fetchBlocks: (blocks) => dispatch(fetchBlocks(blocks)),
    destroyTrack: (id) => dispatch(destroyTrack(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksShow);
