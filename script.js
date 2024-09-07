document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume-section');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var workExperience = document.getElementById('work-experience').value;
        var skills = document.getElementById('skills').value.split(',');
        // Populate resume
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
        // Handle image upload
        var imageInput = document.getElementById('image');
        var resumeImage = document.getElementById('resume-image');
        if (imageInput.files && imageInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                resumeImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                resumeImage.style.display = 'block';
            };
            reader.readAsDataURL(imageInput.files[0]);
        }
        else {
            resumeImage.style.display = 'none';
        }
        // Show resume section
        resumeSection.style.display = 'block';
    });
});
