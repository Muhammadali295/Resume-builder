document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume-section');
    var educationContainer = document.getElementById('education-container');
    var workExperienceContainer = document.getElementById('work-experience-container');
    var addEducationButton = document.getElementById('add-education');
    var addWorkExperienceButton = document.getElementById('add-work-experience');
    addEducationButton.addEventListener('click', function () {
        var newEducationEntry = document.createElement('div');
        newEducationEntry.classList.add('education-entry');
        newEducationEntry.innerHTML = "\n            <label for=\"education\">Education:</label>\n            <input type=\"text\" class=\"education\" name=\"education\" required>\n        ";
        educationContainer.appendChild(newEducationEntry);
    });
    addWorkExperienceButton.addEventListener('click', function () {
        var newWorkExperienceEntry = document.createElement('div');
        newWorkExperienceEntry.classList.add('work-experience-entry');
        newWorkExperienceEntry.innerHTML = "\n            <label for=\"work-experience\">Work Experience:</label>\n            <input type=\"text\" class=\"work-experience\" name=\"work-experience\" required>\n        ";
        workExperienceContainer.appendChild(newWorkExperienceEntry);
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var skills = document.getElementById('skills').value.trim();
        var educationElements = document.querySelectorAll('.education');
        var educationList = Array.from(educationElements).map(function (input) { return input.value.trim(); });
        var workExperienceElements = document.querySelectorAll('.work-experience');
        var workExperienceList = Array.from(workExperienceElements).map(function (input) { return input.value.trim(); });
        // Validation
        if (!name) {
            alert('Name is required.');
            return;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (educationList.some(function (education) { return !education; })) {
            alert('All education fields must be filled out.');
            return;
        }
        if (workExperienceList.some(function (workExperience) { return !workExperience; })) {
            alert('All work experience fields must be filled out.');
            return;
        }
        if (!skills) {
            alert('Skills are required.');
            return;
        }
        document.getElementById('resume-name').innerText = name;
        document.getElementById('resume-email').innerText = email;
        var educationContent = document.getElementById('resume-education-content');
        educationContent.innerHTML = '';
        educationList.forEach(function (education) {
            var p = document.createElement('p');
            p.innerText = education;
            educationContent.appendChild(p);
        });
        var workExperienceContent = document.getElementById('resume-work-experience-content');
        workExperienceContent.innerHTML = '';
        workExperienceList.forEach(function (workExperience) {
            var p = document.createElement('p');
            p.innerText = workExperience;
            workExperienceContent.appendChild(p);
        });
        var skillsList = document.getElementById('resume-skills-list');
        skillsList.innerHTML = '';
        skills.split(',').forEach(function (skill) {
            var li = document.createElement('li');
            li.innerText = skill.trim();
            skillsList.appendChild(li);
        });
        resumeSection.style.display = 'block';
    });
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
