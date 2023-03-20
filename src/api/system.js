import request from '@/request';


export function getMemory(token) {
    return request({
        url: "api/v2/mem",
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export function getSys(token) {
    return request({
        url: "api/v2/sys",
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export function getCpu(token) {
    return request({
        url: "api/v2/cpu",
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}