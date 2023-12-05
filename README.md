# User_Authentication

This project provides a complete authentication system that serves as a starter code for creating new applications. The system includes features like email-based sign-up, sign-in, sign-out, password reset, and Google login/signup. It ensures security by encrypting passwords stored in the database.

# Features

  * Sign up with email
    
  * Sign in with email
    
  * Sign out
    
  * Reset password after sign-in
    
  * Encrypted storage of passwords
    
  * Google login/signup (Social authentication)
    
  * Forgot password (Reset password link with expiration time)
    
  * Display notifications for:
    
    * Unmatching passwords during sign-up
    
    * Incorrect password during sign-in
      
  * Enable reCAPTCHA on both sign-up and login forms

# Technologies Used

  * Node.js
    
  * Express.js
    
  * MongoDB
    
  * Passport.js (for authentication)
    
  * bcrypt (for password hashing)
    
  * Google OAuth (for social authentication)

# Security Measures
  * Passwords are securely encrypted before storage in the database.
  * Notifications are displayed for unmatching passwords and incorrect sign-in attempts.
  * reCAPTCHA is implemented for additional security.

# Project Setup

  * Clone or Download the Repo.
    
  * `cd user-auth` goto the Repo using Terminal.
    
  * Put the Gmail Account Details in `./config/nodemailer.js` for Email Services.
        
  * Run `node server.js` to ignite the project.
    
    
