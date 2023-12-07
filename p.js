document.addEventListener("DOMContentLoaded", function () {
    const toggleCheckbox = document.getElementById('toggle');

    toggleCheckbox.addEventListener('change', () => {
        // Update background color based on the toggle state
        document.body.className = `state${getToggleState()}`;
    });

    function getToggleState() {
        // Return the current state based on checkbox checked status
        return toggleCheckbox.checked ? 1 : 2;
    }
});
