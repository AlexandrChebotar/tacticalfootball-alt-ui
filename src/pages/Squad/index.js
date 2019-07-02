import React, {Component} from 'react';
import { connect } from 'react-redux';
import PlayersTable from '../../components/PlayersTable';
import {
  Tabs,
  Tab,
  Text,
  HTMLSelect,
  Checkbox,
} from "@blueprintjs/core";
import {getPlayers, clearPlayers, startFetchPlayers} from '../../store/actions';

import './style.scss';

const mapStateToProps = ({currentClub: {id, players}}) => {
  return {clubId: id, players};
};

const mapDispatchToProps = dispatch => {
  return {    
    getPlayers: ({clubId}) => dispatch(getPlayers({clubId})),
    clearPlayers: () => dispatch(clearPlayers()),
    startFetchPlayers: () => dispatch(startFetchPlayers()),
  }
};

class Squad extends Component {
  state = {
    activeTabId: 'forvards',
    skillsMode: 'combined',
    sortByPotential: false,
  };

  setSortByPotential = (event) => {
    this.setState({sortByPotential: event.target.checked});
  };

  handleTabChange = (id) => {
    this.setState({activeTabId: id});
  };

  handleSkillsModeChange = (event) => {
    this.setState({skillsMode: event.currentTarget.value});
  };

  getPlayersTable = ({players, filter}) => {
    const {skillsMode, sortByPotential} = this.state;
    debugger;
    return (
      <PlayersTable 
        players={players}
        filter={filter}
        skillsMode={skillsMode}
        sortByPotential={sortByPotential}
      />
    );
  };

  componentDidMount() {
    const {clubId, getPlayers} = this.props;
    getPlayers({clubId});
  };
  componentWillUnmount() {
    this.props.clearPlayers();
  }

  render() {
    const {
      state: {activeTabId, skillsMode, sortByPotential},
      props: {players},
      getPlayersTable,
      handleSkillsModeChange,
      handleTabChange,
      setSortByPotential,
    } = this;
    // const players = this.props.players
    players.sort(({potential:A},{potential:B})=>B-A).sort(({rating:A},{rating:B})=>B-A).sort(({age:A},{age:B})=>B-A);
    debugger;
    return (
      <div className="content">
        <Tabs
          animate
          id="playersTable"
          selectedTabId={activeTabId}
          onChange={handleTabChange}
          renderActiveTabPanelOnly
        >
          <Tab id="outfielders" title="All Outfielders" panel={getPlayersTable({players, filter: 'outfielders'})} />
          <Tab id="forvards" title="Forvards" panel={getPlayersTable({players, filter: 'forwards'})} />
          <Tab id="midlefielders" title="Midlefielders" panel={getPlayersTable({players, filter: 'midlefielders'})} />
          <Tab id="defenders" title="Defenders" panel={getPlayersTable({players, filter: 'defenders'})} />
          <Tab id="goalkeepers" title="Goalkeepers" panel={getPlayersTable({players, filter: 'goalkeepers'})} />
          <Tabs.Expander />
          {['combined', 'training'].includes(skillsMode) &&
            <Checkbox  className="bp3-tab"
              checked={sortByPotential}
              onChange={setSortByPotential}
              label="sort by potential"
            />
          }
          <Text className="bp3-tab-text">Skills mode:</Text>
          <HTMLSelect  className="bp3-tab"
            options={['current', 'potential', 'match', 'combined']}
            value={skillsMode}
            onChange={handleSkillsModeChange}
            minimal
          />
        </Tabs>
      </div> 
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Squad);
