# Leet Hints: A Description

Developers of all skill levels want
Leet Hints is a collection of coding problems that I've solved along with descriptions/hints of approaches to solve the problem. A user can create an account, view existing challenges and hints, or add their own. A user can also comment on challenges posted by other users. The goal of my app is two-fold: connect developers as they build their skills and as a way of displaying my growing knowledge of algorithms and data structures to others in the field.

## Important Links

- [GitHub API Repo](https://github.com/worldwide-coders/educational-store-api)
- [Deployed API](https://thawing-basin-32932.herokuapp.com)
- [GitHub Client Repo](https://github.com/worldwide-coders/educational-store)
- [Deployed Client](https://worldwide-coders.github.io/educational-store/#/)

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
- Run the server with `npm run server`.

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
| PATCH  | `/challenges/:id/comments/:id` | `comments#update`   | `true`      |
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

### Unsolved Problems

- Ability to search for an item by name
- Better styling for multiple media queries
- Would like to have additional resources to share, such as books, movies, tools etc.
- Would like to add thank comments to each resource.
- Would like to actually send a request to the owner of the resource, so that a person can borrow said item.

## Images

#### ERD:

![ERD](https://i.imgur.com/iwe6nV4.png)
