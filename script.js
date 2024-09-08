var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
    form.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
        var name, username, response, data, uniqueUrl, urlDisplay, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    name = document.getElementById('name').value.trim();
                    username = name.toLowerCase().replace(/\s+/g, '');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch('https://resume-builder-2qwij5y0u-muhammad-alis-projects-5543e715.vercel.app/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ username: username }),
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    uniqueUrl = data.url;
                    urlDisplay = document.createElement('p');
                    urlDisplay.innerText = "Your unique resume URL: ".concat(uniqueUrl);
                    document.body.appendChild(urlDisplay);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error('Error:', error_1);
                    alert('Failed to generate URL. Please try again.');
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); });
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
