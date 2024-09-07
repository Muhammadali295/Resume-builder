document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    const educationContainer = document.getElementById('education-container') as HTMLElement;
    const workExperienceContainer = document.getElementById('work-experience-container') as HTMLElement;
    const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
    const addWorkExperienceButton = document.getElementById('add-work-experience') as HTMLButtonElement;

    addEducationButton.addEventListener('click', () => {
        const newEducationEntry = document.createElement('div');
        newEducationEntry.classList.add('education-entry');
        newEducationEntry.innerHTML = `
            <label for="education">Education:</label>
            <input type="text" class="education" name="education" required>
        `;
        educationContainer.appendChild(newEducationEntry);
    });

    addWorkExperienceButton.addEventListener('click', () => {
        const newWorkExperienceEntry = document.createElement('div');
        newWorkExperienceEntry.classList.add('work-experience-entry');
        newWorkExperienceEntry.innerHTML = `
            <label for="work-experience">Work Experience:</label>
            <input type="text" class="work-experience" name="work-experience" required>
        `;
        workExperienceContainer.appendChild(newWorkExperienceEntry);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value.trim();
        const email = (document.getElementById('email') as HTMLInputElement).value.trim();
        const skills = (document.getElementById('skills') as HTMLInputElement).value.trim();

        const educationElements = document.querySelectorAll('.education') as NodeListOf<HTMLInputElement>;
        const educationList = Array.from(educationElements).map(input => input.value.trim());

        const workExperienceElements = document.querySelectorAll('.work-experience') as NodeListOf<HTMLInputElement>;
        const workExperienceList = Array.from(workExperienceElements).map(input => input.value.trim());

        // Validation
        if (!name) {
            alert('Name is required.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (educationList.some(education => !education)) {
            alert('All education fields must be filled out.');
            return;
        }

        if (workExperienceList.some(workExperience => !workExperience)) {
            alert('All work experience fields must be filled out.');
            return;
        }

        if (!skills) {
            alert('Skills are required.');
            return;
        }

        (document.getElementById('resume-name') as HTMLElement).innerText = name;
        (document.getElementById('resume-email') as HTMLElement).innerText = email;

        const educationContent = document.getElementById('resume-education-content') as HTMLElement;
        educationContent.innerHTML = '';
        educationList.forEach(education => {
            const p = document.createElement('p');
            p.innerText = education;
            educationContent.appendChild(p);
        });

        const workExperienceContent = document.getElementById('resume-work-experience-content') as HTMLElement;
        workExperienceContent.innerHTML = '';
        workExperienceList.forEach(workExperience => {
            const p = document.createElement('p');
            p.innerText = workExperience;
            workExperienceContent.appendChild(p);
        });

        const skillsList = document.getElementById('resume-skills-list') as HTMLElement;
        skillsList.innerHTML = '';
        skills.split(',').forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill.trim();
            skillsList.appendChild(li);
        });

        resumeSection.style.display = 'block';
    });

    function validateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});


