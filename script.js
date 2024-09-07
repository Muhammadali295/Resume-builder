document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeSection = document.getElementById('resume-section');
    var educationContainer = document.getElementById('education-container');
    var workExperienceContainer = document.getElementById('work-experience-container');
    var addEducationButton = document.getElementById('add-education');
    var addWorkExperienceButton = document.getElementById('add-work-experience');
    var resumeImage = document.getElementById('resume-image');
    var resumeImageUpload = document.getElementById('resume-image-upload');
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
        // Update resume section
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
        resumeSection.style.display = 'block';
    });
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    resumeImage.addEventListener('click', function () {
        resumeImageUpload.click();
    });
    resumeImageUpload.addEventListener('change', function (event) {
        var _a;
        var file = (_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                resumeImage.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
                resumeImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });
    var editableElements = document.querySelectorAll('[contenteditable="true"]');
    editableElements.forEach(function (element) {
        element.addEventListener('input', function () {
            // Save the content to local storage or a variable
            localStorage.setItem(element.id, element.innerText);
        });
    });
    // Load saved content on page load
    editableElements.forEach(function (element) {
        var savedContent = localStorage.getItem(element.id);
        if (savedContent) {
            element.innerText = savedContent;
        }
    });
});
