import router from 'router';
const Router=router();
//Route to create a new user in login
Router.post("/createUser",createUser);

//Route to delete a user 
Router.delete("/deleteUser",deleteUser);

//Route to find a user based upon id
Router.get("/:id",filterUser);

//Route to update a users details
Router.update("/updateUser",updateUser);

