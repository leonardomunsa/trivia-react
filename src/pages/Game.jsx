import React from 'react';
// import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Question from './Question';

const avatarPadrao = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y';

class Game extends React.Component {
  render() {
    const { playerName } = this.props;
    // const emailMD5 = md5(playerEmail).toString();

    return (
      <div>
        <header className="header-game">
          <p className="player-name" data-testid="header-player-name">{playerName}</p>
          <h4 className="score"> Score:</h4>
          <p className="header-score-points" data-testid="header-score">0</p>
          <img
            className="avatar-image"
            data-testid="header-profile-picture"
            src={ avatarPadrao }
            alt="Gravatar"
          />
        </header>
        <Question />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playerName: state.player.name,
  playerEmail: state.player.email,
});

Game.propTypes = {
  playerName: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Game);
