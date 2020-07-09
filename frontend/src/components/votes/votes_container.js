import { connect } from 'react-redux';
import Votes from './votes';
import {
  fetchTrackVotes,
  upvote,
  downvote
} from '../../actions/votes_actions';

// Filter votes that belong to a track
const trackRating = (trackId, votes) => {
  const votesArr = Object.values(votes);
  let rating = 0;

  votesArr.forEach(vote => {
    if (vote.track == trackId) {
      if (vote.rating > 0) rating += 1;
      else rating -= 1;
    }
  });
  return rating;
}

// make sure to pass VotesContainer the trackId
// like this <VotesContainer trackId={trackId}
const MSP = (state, ownProps) => ({
  rating: trackRating(ownProps.trackId, state.votes),
  trackId: ownProps.trackId,
  currentUser: state.session.user
});

const MDP = (dispatch) => ({
  fetchTrackVotes: trackId => dispatch(fetchTrackVotes(trackId)),
  upvote: trackId => dispatch(upvote(trackId)),
  downvote: trackId => dispatch(downvote(trackId)),
});

export default connect(MSP, MDP)(Votes);