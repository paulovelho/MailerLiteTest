# MailerLite - FrontEnd JavaScript Developer Assignment

Build a simple drag & drop landing page builder using any of Vue.js, Angular, React. Extra points for using Vue.js.

## Requirements:
- [X] Create 2 draggable blocks: Text and Image.
- [X] The content of Text block should be editable.
- [X] Image block can be edited by selecting one of the 3-4 predefined images.
- [X] The user should be able to rearrange, duplicate and delete blocks.
- [X] Landing page data like the text content, links to images, block order, etc. should be exported to a JSON format when the user clicks the “Save” button (console.log is enough).
- [X] Style the application using CSS or a CSS framework of your choice (e.g., Tailwind CSS).
- [X] The application should be responsive.
- [ ] Test cases are a bonus.

## Instructions:
- Set up a new project.
- Implement the required features based on the given requirements.
- Commit your changes regularly, with clear and descriptive commit messages.
- Push your final implementation to your repository.
- Provide the repository URL for review.

Note: Feel free to use any additional libraries, tools, or plugins that you think would enhance the application.

**Deadline:** Within 5 calendar days of receiving the assignment.
**Delivery:** When the task is ready, please share the repository URL for review by email. 

---

## MailerLite feedback

**I failed at their process.**
I totally understand and respect them for it: Any company that decides not to hire me is doing something right (hi, potential recruiter that is looking at my profile, how are you?).
But, if you are working on MailerLite application process, there are one thing or other that you might learn from their feedback:


#### Things well completed:
- Functionalities such as drag, clone, delete, and export are working well
- The design adapts well to mobile devices

#### Areas for improvement (aspects that were missing or were not completed well):
- console warnings were present
- text editing in a modal
- 5 unused dependancies (npx depcheck)
- while tests are present, they are not running successfully
- commits could be more structured; all changes are condensed into eight commits, including one solely for the README.

### Regarding their feedback:
- console warnings are present when you run the project in developer mode (I imagine they did it).
- indeed, text is being edited in a modal. Couldn't it? Is it a problem? Is it considered "not completed well"?
- 5 unused dependencies: yeah, my bad. they are right on this one.
- tests presented are the default ones created by angular cli. I though I was clear (I was, you can see in the checkbox above) that tests are not implemented.
- commits were done as I was working on it (in a bunch of 10 minutes sessions through 4 days). maybe they're right about this one too, but I think that eight commits in 4 days is a good rate.


so, if you're in the middle of their application process, pay attention to this issues.


---
## Angular Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
