This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project setup
- Save boilerplate and use it in future projects, lots of setup time required and installing
libraries
## Additional notes elaborating on past sections
- Container — you can create dispatch functions inside here and handle logic instead of
putting it into Actions
- Actions — passing in header information for a FETCH call
- Many ways to handle rendering, display of components, and more inside components; use
variables to render, or use React Router in larger projects
- Events — binding variables using .bind(), this as event moves to end when bound
- Reducers — ensure you copy state if you make changes to it before returning inside the
switch statement
- Components — check how you initialize props and state to make sure data appears in the
order that you need

- Add a set of data from the Github API (github-profile-react\src\actions\actions_profile.js line 6 & line 23 "the_token" should be replaced to yours: https://github.com/settings/profile > Developer settings > Personal access tokens)
