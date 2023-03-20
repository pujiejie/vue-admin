import request from '@/request';

export function login(payload) {
    return request({
        url: 'signin',
        data: {
            ...payload
        },
        method: "POST"
    })
}

export function getUserInfo(token) {
    return request({
        url: "profile",
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
