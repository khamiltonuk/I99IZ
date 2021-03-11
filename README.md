## I99IZ
---
Migration plan for a huge appication that is using **_prototype.js_** (1.7.X)  

The **goal** is to free the application from prototype.js

---

Let's try to list the problems directly caused by prototype.js:  
1) global scope is filled with a lot of stuff, ... some not even [documented](http://api.prototypejs.org/)  

2) some additional functions/properties pollute existing entities in BOM (e.g. document)  

3) prototype pollution, the involved constructors are the following ones:  
    Array, Date, Element, Event, Number, Object, RegExp, String  

4) [Sizzle](https://github.com/jquery/sizzle) in 2021 is [not needed](https://caniuse.com/?search=querySelector) (still some exceptions may apply)

5) prototype last version is dated Sep 2015, is no more mantained  

6) ... things we can't be aware of till our hands gets dirty 

## Before start thinking

Before listing some possible approaches it would be really useful to know how much prototype is used (weighting the usage of points 1 to 3), and also what is **not** used.  

Also is super important to have the resources to clear #6  

## So the first question is:  
given that we want to remove _prototype.js_ we need to answer the following questions:
- what do we want to solve exactly among [1, 4]? 
- hopefully #1 is a must, thus, move into an existing (there might be collisions, thus we need to change some names) or new namespace?  

## the agnostic approach
Let's assume **we dont have enough knowledge of javascript** (ES3) and what is the current wide supported apis (which also strictly depends on our target suppoorted browsers) to consider to graps the _prototype.js_ sourcecode. We dont have much choice then, given we want to remove _prototype.js_ and the listed effects we have to:
- remove _prototype.js_
- integrate a similar library (e.g. _jQuery_) for `$-ish` functions (at least some) and transform all occurrences
- ask an expert developer to rewrite all global `non $-ish` stuff (maybe just writing adapters to a well known alive library), and replace all occurrences
- integrate a utility library (e.g. _lodash_) to replace all _NCPPF_ (native constructor prototype polluting functions), and translate all occurrences

this approach is
- quite feasibe for a small application
- really unfeasible for a big application

## on the way
In case we're brave enough, we know exactly what we're doing and we can live leaving the global scope polluted with all names _prototype.js_ introduces in the global scope then we could write a small library that:
- defines globally all $-ish functions (using _querySelector_ where needed)
- implements all NCPPF in a well defined namespace. All occurrences must be translated.
- rewrite (or at least copy and cover 100%) all global non $-ish stuff and existing BOM polluted functions, no usage replacement is needed

this approach still:
- **CON**: leaves global scope as polluted as before
- **CON**: the caintenance burden is on us
- **PRO**: solved prototype pollution (but moves that maintenance burden on us, we still can use a _lodash-ish lib_ to delegate that)
- **PRO**: requires a workload that is **O(ncppf usage)** + some work
- **PRO**: no need to care about replacing `$-ish` usage

## 6th sense
As far as I can see it is extremely important to solve all problems paying particular attention on our dependencies choice since we would like to delay as much as possible problems caused by the 5th point.  

I'll assume now one or more available _ninjas_ are confident they **can** solve the problem, the point still is to plan the solution correctly, in order:  
1) create a namespace with configurable name (here **NS**), this will be the only global variable;   
2) in **NS** create a subnamespace for each polluted constructor containing the uncontextualized (no `this`) methods implemented in the polluted version.  Could be considered some way to avoid to do it manually, anyway all those methods should be covered 100%.  
Here we can still consider to either implement on our own (which makes a lot of sense since we have available ninjas) or rely for example on lodash or similar.  
This step is needed before others cause most of the other stuff inside __prototype.js__ rely internally on those NCPPF.  
For example:
``` javascript
var s = 'HELLO WORLD!'.capitalize(); // at least is not destructive
// will be translated in
var s = NS.String.capitalize('HELLO WORLD!') 
``` 
    
3) in NS we must also move all stuff _prototype.js_ puts in the global scope.  
Clearly also those must be rewritten and 100% covered (here also _lodash_ could speed up development, not sure execution)

4) in NS add also some functions _prototype.js_ adds to some DOM elements (e.g. `document`). Translate usage.

some considerations:  
- #1 and most of #2 and #3 needs to be done manually, but still the usage translations could be achieved via script.
- before starting is needed a small analysis to find out what actually is used in our application, so to avoid to write stuff that will never be used.
- as last step ...after all coverage is done we need to exploit ES5