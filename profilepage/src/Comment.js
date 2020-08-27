import React from 'react';
import './App.css';
import { render } from 'react-dom';

class Comment extends React.Component{
    render(){
        return(
          
    <div class="container">
    <div class="row" postision='center'>
    <div class="col-sm-10">
    <h1>Ratings & Reviews</h1>

    <div class="row">
    <div class="col-2 col-sm-8">
    <form action="#" method="post"> 
    <fieldset>
      <legend><span class="number"></span> Leave a comment</legend>
      <textarea type="text" placeholder="Add to the conversation" required ></textarea>
      <br/>
      <input type="text" placeholder="Email (required but never shown)" required/>
      <br/>
      <input type="text" placeholder="Name (required)" required/>
      </fieldset>
    <button type="submit" value="submit" class="btn btn-secondary btn-lg" id = 'btSubmit' active>Post Comment</button>
    </form>
        </div>
        <div class="col-4 col-sm-4">
        <legend><span class="number"></span>Reviews</legend>
        </div>
      </div>
    </div>
    </div>
    </div>
   
        );

    }

}

export default Comment;