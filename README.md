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

### Requirements
Gulp
```
npm install -g gulp
```

Yeoman
```
npm install -g yo
```

### Too Much Angular

Install the generator through the [npm package](https://www.npmjs.com/package/generator-toomuchng).
```
npm install -g generator-toomuchng
```

## Usage

First, create a project directory and cd into it. After that, run any/all of the below items:

### Scaffolding

#### Generation
```
yo toomuchng
```

_Note: the following subcommands are for generating different components, it is recommended to use a capital letter as the first character._

#### Collection
```
yo toomuchng:collection
? Collection name: Users
? Model of collection: User
   create assets/collections/Users.collection.js
```

#### Component
Creating a new component will also generate html and sass files for you.
```
yo toomuchng:component
? Component name: Navigation
   create assets/components/Navigation.component.js
```

#### Directive
```
yo toomuchng:directive
? Directive name: phone
   create assets/directives/phone.directive.js
```

#### Filter
```
yo toomuchng:filter
? Filter name: phoneFilter
   create assets/filters/phoneFilter.filter.js
```

#### Model
```
yo toomuchng:model
? Model name: User
   create assets/models/User.model.js
```

#### Page
Creating a new page will also generate html and sass files for you.
```
yo toomuchng:page
? Page name: dashboard
   create assets/pages/dashboard.page.js
```

#### Service
```
yo toomuchng:service
? Service name: urlService
   create assets/services/urlService.service.js
```

### Running Your Shiny, New App

There are prebuilt [gulp](http://gulpjs.com/) tasks for building, testing, and deploying your code.

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


## File Tree

<img align="middle" src="http://i.imgur.com/FP7pwoM.png">

## Contribution
I will try to keep this repo updated with issues. If you're bored, feel free to grab one! Try to keep the styling similar.
