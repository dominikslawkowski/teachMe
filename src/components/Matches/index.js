import React from "react";
import {MatchesWrapper} from './style.js';
import MatchList from "./match-list.js";

export default class Matches extends React.Component {
 render() {
 return (
 <MatchesWrapper>
     <MatchList></MatchList>
 </MatchesWrapper>
 );
 }
}