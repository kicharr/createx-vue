
// makes post request to server
export async function makePostReq(url, data, headers) {
    const requestOptions = {
        method: "POST",
        headers: {
            data ? {"Content-Type": "application/json"} : null,
            headers
        },
        body: JSON.stringify(data)
    };
    const response = await fetch(url, requestOptions);
    const responseData = await response.json();
    const postId = responseData.id;
}