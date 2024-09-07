document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume-section');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value.split(',');
        document.getElementById('resume-name').innerText = name;
        document.getElementById('resume-email').innerText = email;
        document.getElementById('resume-education-content').innerText = education;
        document.getElementById('resume-work-experience-content').innerText = workExperience;
        var skillsList = document.getElementById('resume-skills-list');
        skillsList.innerHTML = '';
        skills.forEach(function (skill) {
            var li = document.createElement('li');
            li.innerText = skill.trim();
            skillsList.appendChild(li);
        });
        resumeSection.style.display = 'block';
    });
});
