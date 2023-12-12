// idea and usage of FormData taken from
// https://www.learnwithjason.dev/blog/get-form-values-as-json/
function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    let fName = data.get('fName');
    let lName = data.get('lName');
    let email = data.get('email');
    let comment = data.get('comments');

    const suInput ={ //sign up input
        FirstName: fName,
        LastName: lName,
        email: email,
        comment: comment
    };

    const jsonInput = JSON.stringify(suInput); //turn input into json
    console.log(jsonInput);

    const fetchOptions ={
            method: 'POST',
            headers:{
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
            body: jsonInput
        }
    return fetchOptions
}

const form = document.querySelector('#signUpForm');
form.addEventListener('submit', handleSubmit);

fetch ('http://localhost:3000/form',fetchOptions) //send to node?
    .then(onResponse)
    .then(onTextReady);