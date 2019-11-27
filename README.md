## Summary

Context system gets data from a parent component to *__any__* nested child component

Two ways to get information *__in__*
  1. using default value `React.createContext(defaultValue)`
  2. create a `Provider component`

Two ways to get information *__out__*
1. using `this.context`
2. create a `Consumer component`

If multiple different context values are needed, use `Provider` and `Consumer` otherwise use default value, define context type `static contextType` and access data via reference from `this.context`

GOTCHAS: Each separate use of `Context.Provider` creates a new, separate flow of information


```
// value will be red
<ColourContext.Provider value='red'>
    ...
</ColourContext.Provider>


// value will be whatever is in the state
<ColourContext.Provider value={{ ...this.state.colour}}>
    ...
</ColourContext.Provider>
```