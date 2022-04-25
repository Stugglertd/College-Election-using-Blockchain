// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Election{
  ////////////// For Adding Leader's ////////////////////
   struct Candidate{
       string prn_no;
       string name;
       uint votecount;
   }
   uint public candidatesCount;//count of leaders
   Candidate[] public arr;//leaders(in the form of struct candidate) array
   
   mapping(string => int)public mapCan;
   mapping(string => bool)public candidate_added;//to check presence of candidate

   function addCandidate(string memory prn_no,string memory name)public{
       require(candidate_added[prn_no]==false);
       candidatesCount++;
       arr.push(Candidate(prn_no,name,0));
       mapCan[prn_no] = int(arr.length-1); 
       candidate_added[prn_no]=true;
   }
   //to get arr
   function getCan()public view returns(Candidate[] memory){
     return arr;
   }

   //////////////// For adding Voters /////////////////////
   struct Voter{
     string prn_no;
     string name;
     bool voted;
   }
   mapping(string => bool) voter_presence;
   uint public no_of_voters=0;
   Voter[] private arr1;
  
   function addVoter(string memory prn_no,string memory name)public{
     require(voter_presence[prn_no]==false);
     no_of_voters++;
     arr1.push(Voter(prn_no,name,false));
     voter_presence[prn_no] = true;
   }
   function getVoters()public view returns(Voter[] memory){
     return arr1;
   }
   //////////////// Voting //////////////////////////
    
    mapping(string => bool)public votedornot;

    function Vote(string memory leaders_prn,string memory voters_prn)public{
     require(votedornot[voters_prn] == false);
     require(voter_presence[voters_prn] == true);

     arr[uint(mapCan[leaders_prn])].votecount+=1;
     votedornot[voters_prn] = true;   
    }
}