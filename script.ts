document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

        // Populate resume
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

        // Handle image upload
        const imageInput = document.getElementById('image') as HTMLInputElement;
        const resumeImage = document.getElementById('resume-image') as HTMLImageElement;
        if (imageInput.files && imageInput.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                resumeImage.src = e.target?.result as string;
                resumeImage.style.display = 'block';
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            resumeImage.style.display = 'none';
        }

        // Show resume section
        resumeSection.style.display = 'block';
    });
});


