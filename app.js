if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
// 1. SCROLL ANIMATION (Intersection Observer)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 // Triggers when 10% of element is visible
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 2. NETFLIX CAROUSEL LOGIC
function scrollCerts(direction) {
    const container = document.getElementById('certList');
    const scrollAmount = 400; // Adjust for scroll distance
    if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

const projectData = {
    helium: {
        title: "Helium OS",
        img: "https://placehold.co/600x400/1a1a1a/FFF?text=Helium+OS",
        desc: "Helium OS is an AI-powered security layer designed for Linux environments. It actively monitors CPU behavior to detect side-channel attacks (like Spectre/Meltdown) in real-time. By utilizing PyTorch and TensorFlow models, it dynamically adjusts system resources to mitigate threats while maintaining less than 5% performance overhead."
    },
    nano: {
        title: "Nano-pesu",
        img: "https://placehold.co/600x400/1a1a1a/FFF?text=Nano-pesu",
        desc: "A specialized AI educational platform built for university students. Unlike generic AI wrappers, Nano-pesu is fine-tuned on specific university syllabi and past exam papers to provide relevant, curriculum-aligned answers. I worked on the Backend Team using FastAPI and Transformers to handle the retrieval-augmented generation (RAG) pipeline."
    },
    task: {
        title: "Task Scheduler",
        img: "https://placehold.co/600x400/1a1a1a/FFF?text=Task+Scheduler",
        desc: "A high-performance task management system written in C. It uses a custom MinHeap data structure to efficiently manage task priorities and a Hash Map for O(1) lookups. This project demonstrates low-level memory management and algorithm optimization for real-time scheduling scenarios."
    },
    chat: {
        title: "G-M8 Chat",
        img: "https://placehold.co/600x400/1a1a1a/FFF?text=G-M8+Chat",
        desc: "A full-stack real-time messaging application. Built with Node.js and Express for the backend, it leverages Socket.io for instant bi-directional communication. The frontend is React-based, ensuring a smooth user experience, while MongoDB handles persistent message storage."
    }
};

function openProject(projectKey) {
    const data = projectData[projectKey];
    if (data) {
        openModal(data.img, data.title, data.desc);
    }
}

// 3. MODAL LOGIC
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');

function openModal(imgSrc, title) {
    modal.style.display = 'flex';
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    // Prevent background scrolling
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.style.display = 'none';
    // Restore background scrolling
    document.body.style.overflow = 'auto'; 
}

// Close modal if clicking outside the content area
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// --- EMAIL COPY FUNCTION ---
function copyEmail() {
    const email = "kmitesh2006@gmail.com"; // CHANGE THIS TO YOUR ACTUAL EMAIL
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
        // Show Toast Notification
        const toast = document.getElementById("email-toast");
        toast.innerText = `Email copied: ${email}`; // Set text dynamically
        toast.classList.add("show-toast");

        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove("show-toast");
        }, 3000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

