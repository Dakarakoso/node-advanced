// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations, are recorded from myFile runnig
myFile.runContents();

function shouldContinue(){
    // check one: any pending setTimeout, setInterval, setImmediate?
    // check two: any pending OS tasks? (Like server listening to port)
    // check three: any pending long running operations?(Like fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

// Entire body executes in one 'tick'
while(shouldContinue()) {
    //1 - node looks at pendingTimers and sees if any functions 
    //are ready to be called. setTimeout, setInterval

    //2 -  node looks at pendingOSTasks and pendingOperations
    //and calls relevant callbacks

    //3 - Pause execution. Continue when...
    // - a new pendingOSTask is done
    // - a new pendingOperaiton is done
    // - a timer is about to complete

    //4 - look at pendingTimers. Call any setImmediate

    //5 - handle any 'close' events
}


// exit back to terminal node looks at pendingOSTasks and pendingOperations