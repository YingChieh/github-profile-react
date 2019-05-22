import {
    PROFILE_FETCHED
    // ,
    // PROFILE_EDITED
} from '../actions/actions_profile'

const profile = (state = {}, action) => {
    //console.log(action);
    switch (action.type) {
        case PROFILE_FETCHED:
            return action.payload;
        // case PROFILE_EDITED:
        //     var newState = JSON.parse(JSON.stringify(state));
        //     newState = replaceProfile(newState, action.payload);
        //     return newState;
        default:
            return state
    }
}

export default profile

// function replaceProfile(profiles, newProfile) {
//     var newProfiles = [];

//     profiles.array.forEach(element => {
//         if (element.name === newProfile.name) {
//             newProfiles.push(newProfile);
//         }
//         else {
//             newProfiles.push(element);
//         }
//     });

//     return newProfiles;
// }