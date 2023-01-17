const BASE_URL = 'http://localhost:7890';

/* Auth related functions */

export async function getUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/me`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    if (resp.ok) {
        const user = await resp.json();
        return user;
    }
}

export async function signUpUser(email, password) {
    const resp = await fetch(`${BASE_URL}/api/v1/users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('./');
    } else {
        console.error(data.message);
    }
}

export async function signInUser(email, password) {
    const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        location.replace('/');
    } else {
        console.error(data.message);
    }
}

export async function signOutUser() {
    const resp = await fetch(`${BASE_URL}/api/v1/users/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (resp.ok) {
        location.replace('/auth');
    }
}

/* Data functions */

export async function fetchShoppingList() {
    const resp = await fetch(`${BASE_URL}/api/v1/items`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        return data;
    } else {
        console.error(data.message);
    }
}

export async function updateShoppingList(qty, description, bought) {
    const resp = await fetch(`${BASE_URL}/api/v1/items`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qty, description, bought }),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        return data;
    } else {
        console.error(data.message);
    }
}

export async function addToShoppingList(qty, description) {
    const resp = await fetch(`${BASE_URL}/api/v1/items`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ qty, description }),
        credentials: 'include',
    });
    const data = await resp.json();
    if (resp.ok) {
        return data;
    } else {
        console.error(data.message);
    }
}
