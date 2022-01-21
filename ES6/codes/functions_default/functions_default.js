// We can use this to prevent the "undefined" result if no value is passed to the function when it is called

function createProfile(name, age, id, bio){
    const PROFILE = {
        profileCard: `
        
            Name: ${name}
            Age: ${age}
            bio: ${bio}
            id: ${id}
        
        `
    }

    return PROFILE.profileCard
}

console.log(createProfile('Will', 16, 2, 'Lorem ipsum...')) //passing values

console.log(createProfile()) // with no values

function createProfile2_0(name = 'Will', age = 16, id = 1, bio = 'lorem ipsum...'){
    const PROFILE = {
        profileCard: `
        
            Name: ${name}
            Age: ${age}
            bio: ${bio}
            id: ${id}
        
        `
    }

    return PROFILE.profileCard
}

console.log(createProfile2_0()) // With the default parameters 