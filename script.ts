document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeSection = document.getElementById('resume-section') as HTMLElement;
    const educationContainer = document.getElementById('education-container') as HTMLElement;
    const workExperienceContainer = document.getElementById('work-experience-container') as HTMLElement;
    const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
    const addWorkExperienceButton = document.getElementById('add-work-experience') as HTMLButtonElement;
    const resumeImage = document.getElementById('resume-image') as HTMLImageElement;
    const resumeImageUpload = document.getElementById('resume-image-upload') as HTMLInputElement;
    

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

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const name = (document.getElementById('name') as HTMLInputElement).value.trim();
        const username = name.toLowerCase().replace(/\s+/g, ''); // Example username generation
    
        try {
            const response = await fetch('https://resume-builder-2qwij5y0u-muhammad-alis-projects-5543e715.vercel.app/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            const uniqueUrl = data.url;
    
            // Display the unique URL
            const urlDisplay = document.createElement('p');
            urlDisplay.innerText = `Your unique resume URL: ${uniqueUrl}`;
            document.body.appendChild(urlDisplay);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to generate URL. Please try again.');
        }
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

        // Update resume section
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

        resumeSection.style.display = 'block';
    });

    function validateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    resumeImage.addEventListener('click', () => {
        resumeImageUpload.click();
    });

    resumeImageUpload.addEventListener('change', (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                resumeImage.src = e.target?.result as string;
                resumeImage.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    const editableElements = document.querySelectorAll('[contenteditable="true"]') as NodeListOf<HTMLElement>;

    editableElements.forEach(element => {
        element.addEventListener('input', () => {
            // Save the content to local storage or a variable
            localStorage.setItem(element.id, element.innerText);
        });
    });

    // Load saved content on page load
    editableElements.forEach(element => {
        const savedContent = localStorage.getItem(element.id);
        if (savedContent) {
            element.innerText = savedContent;
        }
    });
    
});



