# Too Much Angular!

<img align="right" src="http://i.imgur.com/rsjm0ue.png">

After writing yet another angular application, I figured it would be best to create a scaffolder fine-tuned to my needs.

What's in the box?
 - Service for auth
 - Service for sessions
 - Starter page
 - Starter Sass files
 - Html templating

## Installation

```
npm install -g gulp yo generator-toomuchng
```

## Usage

### Scaffolding

#### Generation
```
mkdir my_new_project
cd my_new_project
yo toomuchng
```

Before running the app for the first time, you will need to create a new package for your project:

```
npm init
```

### Running Your Shiny, New App

There are prebuilt [gulp](http://gulpjs.com/) tasks that are generated for building, testing, and deploying your code.

#### Running
The build task supports [live reload](http://livereload.com/), and file watching for changes - keeping development as streamlined as possible. To build and run on a local server, simply type:

```
gulp
```

#### Testing
Test specs use [phantomjs](http://phantomjs.org/), which will give access to the DOM for assertions. Karma is used for running the specs. See the karma.conf.js file as well as [karma documentation](http://karma-runner.github.io/0.13/index.html) for more info. Run tests with:
```
gulp spec
```


#### Deploying
Currently, the only deploy option is to use an [AWS bucket](http://docs.aws.amazon.com/AmazonS3/latest/gsg/GetStartedWithS3.html), however more alternatives may be added in the future. It is required that you fill in your AWS id, password, and bucket in the `gulp_tasks/secrets.js` file. To deploy, use:

```
gulp deploy
```


### Scaffolding Subcomponents

#### Collection
Collections are objects purposed with holding their model counterparts. When creating a collection, you will also need to specify the model type that it will hold.
```
yo toomuchng:collection
? Collection name: Users
? Model of collection: User
   create assets/collections/Users.collection.js
```

#### Component
A component is a dynamic partial view. Creating a new component will gear you with a new [directive](https://docs.angularjs.org/guide/directive) file as well as html and sass files.
```
yo toomuchng:component
? Component name: Navigation
   create assets/components/Navigation.component.js
```

#### Directive
For [directives](https://docs.angularjs.org/guide/directive) that do not need html or css, use this generator! Although this is used less, it pairs very nicely with filters.
```
yo toomuchng:directive
? Directive name: phone
   create assets/directives/phone.directive.js
```

#### Filter
Creates a new [filter](https://docs.angularjs.org/guide/filter).
```
yo toomuchng:filter
? Filter name: phoneFilter
   create assets/filters/phoneFilter.filter.js
```

#### Modal
Not to be confused with "Model", modals are used to create a window overlay. This is most commonly used for forms when editing or creating models.
```
yo toomuchng:modal
? Modal name: User
   create assets/modals/userModal.controller.js
   create assets/modals/userModal.style.sass
   create assets/modals/userModal.template.html
```

#### Model
Model objects are used to hold business logic data. Be sure to checkout the collections generator.
```
yo toomuchng:model
? Model name: User
   create assets/models/User.model.js
```

#### Page
Creating a new page generate [controller](https://docs.angularjs.org/guide/controller), html and sass files for you. Be sure to update your router file with the correct information.
```
yo toomuchng:page
? Page name: dashboard
   create assets/pages/dashboard.page.js
```

#### Service
[Services](https://docs.angularjs.org/guide/services) are great for extraneous logic that you don't want cluttering your page controllers.
```
yo toomuchng:service
? Service name: urlService
   create assets/services/urlService.service.js
```


## File Tree
A sample file structure:

<img align="middle" src="http://i.imgur.com/FP7pwoM.png">

## Contribution
I will try to keep this repo updated with issues. If you're bored, feel free to grab one! Try to keep the styling similar.
