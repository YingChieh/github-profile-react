export const PROFILE_FETCHED = 'PROFILE_FETCHED';
export const PROFILE_EDITED = 'PROFILE_EDITED';

export function fetchProfile() {
    let header = new Headers({ "Content-Type": "application/json", "Authorization": "Token token" });

    return (dispatch) => {
        return fetch('https:api.github.com/users/YingChieh', {
            method: 'GET',
            headers: header
        })
            .then(response => response.json())
            .then(json => {
                //console.log(json)
                dispatch(loadProfile(json));
            })
            .catch(error => console.log(error));
    }
}

export function loadProfile(results) {
    return {
        type: PROFILE_FETCHED,
        payload: results
    }
}
