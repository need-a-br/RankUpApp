## READ ME
# This file will add all documentation for the RankUp app


# Environment Setup -
    $ rails new rankupapp -d postgresql -T
    $ cd rankupapp
    $ rails db:create

# add to github repo
- Add the remote from team GitHub repository
- Create a default branch (main)
- Make an initial commit to the repository

# add Rspec
    $ bundle add rspec-rails
    $ rails generate rspec:install

# add React
    $ bundle add webpacker
    $ bundle add react-rails
    $ rails webpacker:install
    $ rails webpacker:install:react
    $ yarn add @babel/preset-react
    $ yarn add @rails/activestorage
    $ yarn add @rails/ujs
    $ rails generate react:install
    $ rails generate react:component App

# add Devise
    $ bundle add devise
    $ rails generate devise:install
    $ rails generate devise User
    $ rails db:migrate
    - in config/environments/development.rb
        add 
            config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
    - in config/initializers/devise.rb
        add
            # Find this line:
            config.sign_out_via = :delete
            # And replace it with this:
            config.sign_out_via = :get

# Rails Routing
    $ rails generate controller Home index
    - in app/views/home/index.html.erb
        add
            <%= react_component 'App', {
            logged_in: user_signed_in?,
            current_user: current_user,
            new_user_route: new_user_registration_path, sign_in_route: new_user_session_path, sign_out_route: destroy_user_session_path
            } %>
    - in app/views/layouts/application.html.erb
        add
            // Find this line:
            <%= javascript_importmap_tags %>

            // And replace it with this:
            <%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
    - in config/routes.rb
        add
            get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
            root 'home#index'

# React Routing
    $ yarn add react-router-dom
    in app/javascript/components/App.js
        add
            import { BrowserRouter, Routes, Route } from "react-router-dom"

# Adding Reactstrap
    $ bundle add bootstrap
    $ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
    $ yarn add reactstrap
    - in app/assets/stylesheets/application.scss
        add
            @import "bootstrap";

# Rankup Resourse
    * the Devise user model is going to thave an association with the Student model
$ rails g resource Student name:string notes:text rank:string image:text user_id:integer
$ rails db:migrate

# User and Student Associations
*the students will belong to a user and the user will have many students
    -in app/models/student.rb
        add
            class Student < ApplicationRecord
            belongs_to :user
            end
    -in app/models/user.rb
        add
            class User < ApplicationRecord
            # Include default devise modules. Others available are:
            # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
            devise :database_authenticatable, :registerable,
                    :recoverable, :rememberable, :validatable
            has_many :students
            end                
## App.js for starter
*starter app js if we want for bare bones need*
    -in app/javascript/components/App.js
        add
            import React from "react"

            const App = ({
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
            }) => {
            console.log("logged_in:", logged_in)
            console.log("current_user:", current_user)
            console.log("new_user_route:", new_user_route)
            console.log("sign_in_route:", sign_in_route)
            console.log("sign_out_route:", sign_out_route)
            return (
                <>
                <h1>Student App</h1>
                </>
            )
            }

            export default App


## Icebox Testing
# for protected index

//   it("shows student data", () => {
//     render(
//       <BrowserRouter>
//         <ProtectedStudentIndex students={mockStudents} />
//       </BrowserRouter>
//     )
//     mockStudents.forEach((student) => {
//         const studentName = screen.getByText(student.name)
//         expect(studentName).toBeInTheDocument()
        
//     })
//   })