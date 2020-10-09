package com.dao;

import java.util.List;

import com.models.Posts;

public interface PostRepo {
	
public List<Posts> selectAllPosts();
	
	public void createPost(Posts post);
	
	public Posts updatePost(Posts post, int postid); //Will probably need to change 
	
	public Posts selectByPostId(int postid);
	
	public List<Posts> selectByUserId(String userID);
	
	public void deletePost(int postid);
	
	public void increaseUpvotes(int postid);
	
	public void increaseDownVotes(int postid);
}
