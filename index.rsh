'reach 0.1';

// Common properties
const Part = {
    getBalance: Fun([], UInt),
    apply: Fun([], Address),
    informStatus: Fun([Bool], Null),
    confirmApplication: Fun([Data({ "None": Null, "Some": Address }), UInt], Null),
};


export const main = Reach.App(() => {
    // using Maps
    setOptions({ untrustworthyMaps: true });

    const Alice = Participant('Alice', {
        ...Part,
    });
    init();

    Alice.only(() => {
        const aliceAddress = declassify(interact.apply()); 
    });
    Alice.publish(aliceAddress);
    assert(typeof (aliceAddress) == Address); 

   // Mapping here
    const whitelist = new Map(Address); 
    const size = array(UInt, [0]); 

    if (size[0] < 5) {
        whitelist[Alice] = aliceAddress;
        Alice.only(() => {
            interact.informStatus(true);
            interact.confirmApplication
            (whitelist[Alice], size[0] + 1); 
            
        });
    } else {
        Alice.only(() => {
            interact.informStatus(false);
        });
    }
    commit(); 
});
