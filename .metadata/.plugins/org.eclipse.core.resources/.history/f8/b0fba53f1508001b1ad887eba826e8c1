package com.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dao.UserRepoImpl;
import com.models.User;

@Controller("SessionController")
@CrossOrigin(origins = "*")
public class SessionController {
	
	UserRepoImpl uri = new UserRepoImpl();
	
	@PostMapping(value = "login", produces = "application/json")
	public @ResponseBody String login(HttpServletRequest req) {
		HttpSession session = req.getSession();
		
		
		//User user = uri.selectByUserName(username);
		
		session.setAttribute("loggedInUser", "bobby");
		//System.out.println(session.getAttribute("loggedInUser"));
		return "Logged in";
	}
	
	@PostMapping(value = "logout", produces = "application/json")
	public @ResponseBody String logout(HttpSession session) {
		
		session.invalidate();
		
		return "logged out";
		
		
	}
	@PostMapping(value = "getLoggedInfo")
	public @ResponseBody User getLoggedInUser(HttpSession session) {
		System.out.println(session.getAttribute("loggedInUser"));
//		User currentUser;
//		
//		currentUser = (User) session.getAttribute("loggedInUser");
//		
////		if (currentUser == null) {
////			currentUser = new User ("invalid user")
////		}
//		
		
		return null;
		
	}
}
