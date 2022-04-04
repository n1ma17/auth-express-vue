# Authentication with express.js and vue3  

## Project sections
- api  
- client  

### Description  

- this project contains two part. express js for back-end and vue 3 for front-end  
- my express project is in api folder and the vue project is in client folder
- in express project i generate access token with jwt, this token expire after 30s, after that generate new access token and new refresh token  
- in vue project i render a form for login and register the user  

> ### Express.js

>> **Packages**  

- JWT  
i use jwt for generate access token and refresh token  
- cors  

>> **Description**

- first of all i create two functions, one for generate access token and another for generate refresh token, after generated refresh token pushed it in a list called refreshTokensList  

- i create a method to take an old refresh token from user and then generate new access token and new refresh token  
- i create a post method for login the user, take username and password from user and then return an object with access token and refresh token  
- i create two other methodes for delete and logout the users  


>> **Project setup**  
```
cd api  
npm install  
npm start
```  
> ### Vue


