import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAllStories } from '@redux/actions/Stories';

/*
  This component is connected to the redux store
  `connect` is the HoC that enables this connection
  by populating `Stories` props with:

    `mapStateToProps`,
    `mapDispatchToProps`
  
  When plugged into `connect` as args, these functions
  tell `connect` which props get popluated on to Stories
*/

class Stories extends Component {
  componentDidMount() {
    const {
      actions: { fetchAllStories },
    } = this.props;
    fetchAllStories();
  }
  render() {
    return (
      <div>
        <p>Stories</p>
      </div>
    );
  }
}

// adds redux store data as props to `Stories`
// state === redux store
const mapStateToProps = state => ({
  Stories: state.Stories,
});

// adds our actions to the props of `Stories`
const mapDispatchToProps = dispatch => ({
  actions: {
    fetchAllStories: bindActionCreators(fetchAllStories, dispatch),
  },
});

/*
  connect is exported with out mapping functions first,
  then the component
  The component gets returned with `connect` having
  added this data to props:
    props: {
      Stories,
      actions: {
        fetchAllStories
      }
    }
*/
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stories);
