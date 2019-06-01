//Init Github
const gitHub = new GitHub();
//Init UI
const ui = new UI();

//Search input
const searchUser = document.getElementById('searchUser');



//Search input event listener
searchUser.addEventListener('keyup', (e) => {

    //get input text
    const userText = e.target.value;

    if(userText !== '') {
        //Make Http Request to fetch user
        gitHub.getUser(userText)
            .then(data => {
                if ( data.profile.message === 'Not Found') {
                    //Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    //Show profile
                    ui.showProfile(data.profile);
                    ui.showRepos (data.repos);
                }
            });
    } else {
        //Clear profile
        ui.clearProfile();
    }


    e.preventDefault();
});