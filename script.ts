document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

        (document.getElementById('resume-name') as HTMLElement).innerText = name;
        (document.getElementById('resume-email') as HTMLElement).innerText = email;
        (document.getElementById('resume-education-content') as HTMLElement).innerText = education;
        (document.getElementById('resume-work-experience-content') as HTMLElement).innerText = workExperience;

        const skillsList = document.getElementById('resume-skills-list') as HTMLElement;
        skillsList.innerHTML = '';
        skills.forEach(skill => {
            const li = document.createElement('li');
            li.innerText = skill.trim();
            skillsList.appendChild(li);
        });

        resumeSection.style.display = 'block';
    });
});

