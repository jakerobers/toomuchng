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
npm install -g generator-toomuchng
```

## Usage

First, create a project directory and cd into it. After that, run any/all of the below items:

### Basic Scaffolding
```
yo toomuchng
```

_Note: the following subcommands are for generating different components, it is recommended to use a capital letter as the first character._

### Collection
```
yo toomuchng:collection
? Collection name: Users
? Model of collection: User
   create assets/collections/Users.collection.js
```

### Component
Creating a new component will also generate html and sass files for you.
```
yo toomuchng:component
? Component name: Navigation
   create assets/components/Navigation.component.js
```

### Directive
```
yo toomuchng:directive
? Directive name: phone
   create assets/directives/phone.directive.js
```

### Filter
```
yo toomuchng:filter
? Filter name: phoneFilter
   create assets/filters/phoneFilter.filter.js
```

### Model
```
yo toomuchng:model
? Model name: User
   create assets/models/User.model.js
```

### Page
Creating a new page will also generate html and sass files for you.
```
yo toomuchng:page
? Page name: dashboard
   create assets/pages/dashboard.page.js
```

### Service
```
yo toomuchng:service
? Service name: urlService
   create assets/services/urlService.service.js
```
## File Tree

<img align="middle" src="http://i.imgur.com/FP7pwoM.png">

## Contribution
I will try to keep this repo updated with issues. If you're bored, feel free to grab one! Try to keep the styling similar.
