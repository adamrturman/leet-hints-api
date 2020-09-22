# Leet Hints: A Description

Developers of all skill levels want
Leet Hints is a collection of coding problems that I've solved along with descriptions/hints of approaches to solve the problem. A user can create an account, view existing challenges and hints, or add their own. A user can also comment on challenges posted by other users. The goal of my app is two-fold: connect developers as they build their skills and as a way of displaying my growing knowledge of algorithms and data structures to others in the field.

## Important Links

- [GitHub API Repo](https://github.com/adamrturman/leet-hints-api)
- [Deployed API](https://nameless-anchorage-32520.herokuapp.com)
- [GitHub Client Repo](https://github.com/adamrturman/leet-hints-client)
- [Deployed Client](https://adamrturman.github.io/leet-hints-client/#/)

## Planning Story

- Create the API models and routes.
- Test API connections.
- Build challenge component.
- Build comment component.
- Test front end to back end connection.
- Create styling for front end objects.
- Test, debug, troubleshoot and debug.
- Reach for stretch goals
- [Gantt Chart](https://docs.google.com/spreadsheets/d/1jMsdbGDk3BtpUTYFcJaJ0UisjW4lh4EhNEzdovmv4jI/edit?usp=sharing)

## Set Up Instructions
- Fork and clone this repository.
- Once inside the directory, install dependencies with `npm install`
- Be sure `nodemon` is not included in the package.json, install it with `npm install -g nodemon`.
- Start the server with `npm run server`.

## API End Points

| Verb   | URI Pattern                    | Controller#Action   | Token Required |
|--------|--------------------------------|---------------------|-------------|
| POST   | `/sign-up`                     | `users#signup`      | `false`     |
| POST   | `/sign-in`                     | `users#signin`      | `false`     |
| DELETE | `/sign-out`                    | `users#signout`     | `true`      |
| PATCH  | `/change-password`             | `users#changepw`    | `true`      |
| PATCH  | `/update-user`                 | `users#updateuser`  | `true`      |
| GET    | `/challenges`                  | `challenges#index`  | `true`      |
| GET    | `/challenges/:id`              | `challenges#show`   | `true`      |
| POST   | `/challenges`                  | `challenges#create` | `true`      |
| PATCH  | `/challenges/:id`              | `challenges#update` | `true`      |
| DELETE | `/challenges/:id`              | `challenges#delete` | `true`      |
| POST   | `/challenges/:id/comments`     | `comments#create`   | `true`      |
| DELETE | `/challenges/:id/comments/:id` | `comments#delete`   | `true`      |


All data returned from API actions is formatted as JSON.

### Technologies Used

- React
- Javascript
- HTML
- CSS
- Bootstrap
- Express
- Mongoose
- MongoDB

## Images

#### ERD:
A single user can create many challenges.
A single challenge can have many comments.
A single user create many comments.

![ERD](https://user-images.githubusercontent.com/67024033/93880186-aa487c00-fca2-11ea-9340-de66916f2164.png)
