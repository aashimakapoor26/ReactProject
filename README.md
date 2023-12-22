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
custom hook

