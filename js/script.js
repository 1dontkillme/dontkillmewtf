console.log('Hey, I think you are here because you saw a mistake in my layout. Please, if you have any suggestions or a code review, write to me at Discord. Im open to any feedback.')
console.log('https://discordapp.com/users/531462564304125962')

function goBack() {
    window.history.back();
}
// document.addEventListener('DOMContentLoaded', function() {
//     const scrollToTarget = document.getElementById('scrollToTarget');
//     const target = document.getElementById('skills');

//     scrollToTarget.addEventListener('click', function(e) {
//         e.preventDefault();
//         target.scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))