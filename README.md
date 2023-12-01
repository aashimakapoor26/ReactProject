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




