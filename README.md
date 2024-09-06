# Namste Food App

/*
Header
- Logo
- Navitem
Body
- Search
- RestaurantContainer
 - RestaurantCard
Footer
- copyright
- Links
- Address
- Contact
*/



# TWO types of export/import
1) Default - export default compName - import compName from "path"
2) Named -  export const compName - import { compName } from "path"


# React Hooks

data layer and UI layer should be tied together
react is fast in dom manipulation
if you have to keep your data and ui layer tied to each other we need framework/library
Efficient/fast dom manipulation

React element - plain js object
React Component - plain js function

React hook -> normal js utility function given by ReactJS ( funtion has a super power)

useState() -> super powerful state variable in React


whenever a state variable updates React rerenders the component
core logic of react - it's great at dom manipulation

virtual DOM -> js representation in object form
why react is fast
because it has virtual DOM , it has a diff algo which is efficient in dom manipulation
react keeps an eye on state variable, whenever state changes react rerenders the component and update those nodes which changed by comparing two virtual doms using diff algo


React has one of the best render mechanism



# Shimmer UI
for loading replacement


# why state variables
js variables dont get updated on UI after changing the value so it doesn't render the updated value (value gets changed but not reflected on UI)

whenever state variable changes using set function, react will rerender the component
dynamic variables - usestate

React fibre - new reconcilliateion algorithm which compares two copies of virtual don and update only the changes in real dom. Thats why react is fast


# CORS
when you are trying to make api call from one origin(domainname) to another origin - <localhost to swiggy.com>
Browser doesn't allow this and you get cors error

corsProxy.io
copy link and paste it before your api


# Single page application
React has only one page it just changes the component, it doesn't reload the whole website and fetches page from server.

2 types of routing 
client side - React approach
server side - traditional way



Functional comp -> a function which return a piece of jsx
Class based Comp - class which extend React.component and has a render method which return a piece of jsx

super(props) -> to use this inside constructor 


React lifecycle-
Batches all children render phase first then goes to commit phase (because render phase is fast)
DOM is expensive, react ries to batch updatinn dom for all children




# Optimising app
hook - utility function
single responsibility principle makes our app - 
Readable
Reuseable
maintainable
testable

take out some responsibility from component and assign it to a hook. 
custom hooks


#
chunking
code splitting
dynamic bundling
lazy loading
on demand loading
dynmaic import

load only when we click on that link
not load FileSystemDirectoryHandle, only when required (when user go to the particular page)
distribute code into multiple chunks

CSS frameworks

Chakra
materilui
bootstrap
scss/sass
css
styled components
Tailwind
Ant design

Postcss - tool used by tailwind css to transform css along with js behind the scenes
npx - invoking/initializing/executing

# Parcel will use postcssrc to understand tailwind.
# the content attribute inside tailwind.config takes a list of all the files where I can use my tailwind css.
# Telling our project we can use tailwind css anywhere under src folder and have one of these extensions.
# IMPORTING TAILWIND INTO INDEX.CSS FILE



# Higher order component
A function that takes a component as input and enhances that compoennt and returns a new component 
Use to enhance the component
Pure function -> doesnot change the input


# controlled /uncontrolled components
components which are not controlled by their parents but have their own state to control themselves are uncontrolled

Lifting the state up to control children
eg - accordian in this app

# props drilling
passing props from parent to last child via other child components
multiple level of nesting
solution - react context
there are some piece of data which we need to access anywhere in the app
Only the data which is being used at multiple places should be kept inside createcontext
useContext() - functional comp
<Usercontext.Consumer>{(data) => console.log(data)}</Usercontext.Consumer> class based components - old way

Provide updated value to the whole app, use Usercontext.Provider
for small applications - dont need redux, use context is enough


# Store

Its not mandatory, use it only for large scale applications
Redux is not the only library
zustand - lightweight library use to manage state
Redux toolkit and react-redux - newer way of writing redux
Redux toolkit - > reduced complexity which was there in vanilla redux - best and latest way of writing redux
React-redux -> bridge between react and redux

Redux store-> a big object with lot of data and its kept in a global central place
slices in redux store-> different files for diff logical operation
Cart slice
user slice
Theme slice

Add btn -> dispatch an Action -> calls a func (Reducer) -> modifies slice of the store
Store -> selector -> give data in view (selectore -> sybscribing to a store)

component is subscribed to the store and reads the store data


# Redux toolkit - steps
 - Install libraries-> @reduxjs/tollkit and react-redux
 - Build our store
 - Connect our store to our app
 - Create a cart slice 
 - Dispatch an action
 - read data via selector

why provider is coming from react-redux - providing store to react main application 
configure store is a redux job thats why coming from toolkit


useSelector((store) => store) - wrong way
Always subscribe to the small portion of the store

# unit testing
Even a single line of code can mess up your whole application. We should worry about every line of code we write.
 - Manual testing
 - By writing unit test cases

# Types of testing a developer can do
 - Unit Testing - test react components in isolation
 - Integration Testing - testing the integration of the components
 - End to end testing - Testing react application -  what the user will do throughout the app - selenium tool
As a developer we are concered about first two testing

# Setting up testing in our app
- Install RTL
- Install Jest
- Install Babel dependencies
- configure babel.config.js
- Configure parcel config file to disable babel default transpilation (disbaling so that we can use above two babel configurations we made for jest)
- Jest configuraion (npx jest --init  (npx -> executing))
  (select jsdom - which is a library which is like a browser and give features of browser to run test code)
- Install jsdom library (with jest 28 and higher version we need to install this library seperately)
-Install @babel/preset-react - to make jsx work in test cases
- Include @babel/preset-react in the babel config
- Install @testing-library/jest-dom - to access dom method like tobeinthedocument

# Parcel uses Babel behind the scenes and has its own configurations which will conflict with our babel config

# jsx -> react element -> js object


Testing

Render
screen.getByText
Expect().tobe();


