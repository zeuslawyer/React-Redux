const dummyAction = () => {
    console.log('dummy action just ran');
    return {
        type:"DUMMY_ACTION",
        payload: {name:'dummy action'}
    }
}

export {dummyAction};