# Leet Hints: A Description

Leet Hints is a collection of coding problems that I've solved along with descriptions/hints of approaches to solve the problem.

## Important Links

- [GitHub API Repo](https://github.com/worldwide-coders/educational-store-api)
- [Deployed API](https://thawing-basin-32932.herokuapp.com)
- [GitHub Client Repo](https://github.com/worldwide-coders/educational-store)
- [Deployed Client](https://worldwide-coders.github.io/educational-store/#/)

## Planning Story

- Create the API models and routes.
- Test API connections.
- Build basic front end components.
- Test front end to back end connection.
- Integrate Stripe API to handle credit a
- Create styling for front end objects.
- Test, debug, troubleshoot and debug.
- Reach for stretch goals
- [Gantt Chart](https://docs.google.com/spreadsheets/d/1xvZ6CXHSKE_Q4nan2bH51XatrNw7pyXpcjKPrnNClT8/edit?usp=sharing)

## API End Points

| Verb   | URI Pattern            | Controller#Action           | Token Required  |
|--------|------------------------|-----------------------------|-----------------|
| POST   | `/sign-up`              | `users#signup`             | `false`         |
| POST   | `/sign-in`              | `users#signin`             | `false`         |
| DELETE | `/sign-out`             | `users#signout`            | `true`          |
| PATCH  | `/change-password`      | `users#changepw`           | `true`          |
| PATCH  | `/update-user`          | `users#updateuser`         | `true`          |
| GET    | `/items`                | `items#index`              | `true`          |
| GET    | `/items/:id`            | `items#show`               | `true`          |
| POST   | `/items`                | `items#create`             | `true`          |
| PATCH  | `/carts/:id`            | `carts#update`             | `true`          |
| DELETE | `/carts/:id`            | `carts#delete`             | `true`          |
| GET    | `/carts`                | `carts#index`              | `true`          |
| GET    | `/carts/:id`            | `carts#show`               | `true`          |
| POST   | `/carts`                | `carts#create`             | `true`          |
| PATCH  | `/carts/:id`            | `carts#update`             | `true`          |
| DELETE | `/carts/:id`            | `carts#delete`             | `true`          |
| POST   | `/create-payment-intent`| `payment-intent#create`    | `true`          |
| GET    | `/secret`               | `secret#show`              | `true`          |
| POST   | `/pay`                  | `pay#create`               | `true`          |

All data returned from API actions is formatted as JSON.

### Technologies Used

- React
- Javascript
- HTML
- CSS
- Bootstrap
- Express
- Stripe
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
