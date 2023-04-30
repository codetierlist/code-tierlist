import sleep from "sleep-promise";

/**
 * Sends a POST request to the API with the code and id.
 * @param {string} code The code to send to the API.
 * @param {string} id The id of the project to send to the API.
 * @param {string} url The url to send the request to. Defaults to "tests". Either "tests" or "code".
 * @returns true if the request was successful, false if it was not.
 */
export const postCodeToAPI = async ({code, id = "bruh", url = "tests"}) => {
    // make post request to api
    // HACK hardcoded api url
    const response = await fetch(`http://api.codetierlist.tech/${url}/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "text/plain"
        },
        body: code
    }).then(sleep(1000));

    console.log("====");
    console.log(response);
    console.log(code);
    console.log("====");

    // check if 200 or 400. 200 means success, 400 means failure
    // return true if 200, false if 400
    if (response.status === 200) {
        return true;
    }
    return false;
}
