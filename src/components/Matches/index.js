import React from "react";
import {MatchesWrapper} from './style.js';
import MatchList from "./match-list.js";
import {connect} from 'react-redux';

class Matches extends React.Component {
 render() {
     console.log(this.props.matched)
 return (
 <MatchesWrapper>
     <MatchList></MatchList>
 </MatchesWrapper>
 );
 }
}
function mapStateToProps(state){
    return {
        matched: state.selectedUser
    }
}
export default connect(mapStateToProps)(Matches);