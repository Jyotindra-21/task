const setCookie = (name, json) => {

    let cookieValue = '';
    let expire = '';
    let period = '';

    //Specify the cookie name and value
    cookieValue = name + '=' + JSON.stringify(json) + ';';

    //Specify the path to set the cookie
    cookieValue += 'path=/ ;';

    //Specify how long you want to keep cookie
    period = 30; //days to store
    expire = new Date();
    expire.setTime(expire.getTime() + 1000 * 3600 * 24 * period);
    expire.toUTCString();
    cookieValue += 'expires=' + expire + ';';

    //Set cookie
    document.cookie = cookieValue;
};
const getCookie = () => {

    let cookieValue = '';
    let cookieArray = new Array();
    let result = new Array();

    //Get cookie
    cookieValue = document.cookie;

    //Divide the cookie into an array and convert them to JSON
    if (cookieValue) {
        cookieArray = cookieValue.split(';');

        cookieArray.forEach(data => {
            data = data.split('=');

            //data[0]: Cookie name
            //data[1]: Cookie value

            result[data[0]] = JSON.parse(data[1]);
        });
    }
    return result;
}