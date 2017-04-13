# Exercise 1
```rb
  Rails.application.routes.draw do
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    resources :users, only: [:show, :index, :create, :update, :delete] do
    member do
      get :posts, :recent_posts
      post :posts
    end

    collection do
      get :follow_users
    end

    namespace :supperadmin do
      get :admin_users, :posts
    end
  end
```

# Exercise 2
```
  1. Create: User
        first_name: String
        last_name: String
  2. Odd column: description : Text
  3. New column: description : Text => String
```

## The first way
Using 1 migrate and using migrate:reset.

1. Create `migrate file` with `User` table contain `description : Text` column.

2. Run `rails db:migrate` on Terminal.

3. Open `migrate file`, change `description : text` => `description : string`

4. Run `rails db:migrate:reset` on Terminal.

## The second way
Using 3 migrate and don't use migrate:reset

1. Create `migrate file` with `User` table not contain `description : Text` column.

2. Run `rails db:migrate` on Terminal.

3. Create `migrate file` add `description : Text` column.

4. Run `rails db:migrate` on Terminal.

5. Create `migrate file` change `description : Text` => `description : string`.

6. Run `rails db:migrate` on Terminal.

## The third way

Using 2 migrate and don't use migrate:reset

1. Create `migrate file` with `User` table not contain `description : Text` column.

2. Run `rails db:migrate` on Terminal.

3. Create `migrate file` add `description : Text` column.

4. Run `rails db:migrate` on Terminal.

5. Run `rails db:migrate:rollback` on Terminal.

6. Open `migrate file`, change `description : text` => `description : string`

7. Run `rails db:migrate` on Terminal.
