// Theme Toggle
const themeToggle = document.getElementById("themeToggle")
const body = document.body

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  body.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
})

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light"
body.setAttribute("data-theme", savedTheme)

// Rotating Text Animation
const textItems = document.querySelectorAll(".text-item")
let currentIndex = 0

function rotateText() {
  textItems.forEach((item, index) => {
    item.classList.remove("active", "prev")
    if (index === currentIndex) {
      item.classList.add("active")
    } else if (index === (currentIndex - 1 + textItems.length) % textItems.length) {
      item.classList.add("prev")
    }
  })

  currentIndex = (currentIndex + 1) % textItems.length
}

if (textItems.length > 0) {
  setInterval(rotateText, 3000)
}

// Dropdown Menus
const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation()
    const dropdown = toggle.nextElementSibling
    const isActive = dropdown.classList.contains("active")

    // Close all dropdowns
    document.querySelectorAll(".dropdown-menu").forEach((menu) => {
      menu.classList.remove("active")
    })
    document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
      btn.classList.remove("active")
    })

    // Toggle current dropdown
    if (!isActive) {
      dropdown.classList.add("active")
      toggle.classList.add("active")
    }
  })
})

// Close dropdowns when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    menu.classList.remove("active")
  })
  document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
    btn.classList.remove("active")
  })
})

// Chat Widget
const chatToggle = document.getElementById("chatToggle")
const chatContainer = document.getElementById("chatContainer")
const chatClose = document.getElementById("chatClose")
const floatingChatBtn = document.getElementById("floatingChatBtn")
const messageInput = document.getElementById("messageInput")
const sendBtn = document.getElementById("sendBtn")
const chatMessages = document.querySelector(".chat-messages")

function toggleChat() {
  const isActive = chatContainer.classList.contains("active")

  if (isActive) {
    chatContainer.classList.remove("active")
    floatingChatBtn.classList.remove("hidden")
  } else {
    chatContainer.classList.add("active")
    floatingChatBtn.classList.add("hidden")
  }
}

if (chatToggle) {
  chatToggle.addEventListener("click", toggleChat)
}

if (floatingChatBtn) {
  floatingChatBtn.addEventListener("click", toggleChat)
}

if (chatClose) {
  chatClose.addEventListener("click", toggleChat)
}

function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div")
  messageDiv.className = `message ${isUser ? "user-message" : "bot-message"}`
  messageDiv.innerHTML = `<p>${message}</p>`

  chatMessages.appendChild(messageDiv)
  chatMessages.scrollTop = chatMessages.scrollHeight
}

function sendMessage() {
  const message = messageInput.value.trim()
  if (message) {
    addMessage(message, true)
    messageInput.value = ""

    // Simulate bot response
    setTimeout(() => {
      addMessage("Thanks for your message! We'll get back to you soon.")
    }, 1000)
  }
}

if (sendBtn) {
  sendBtn.addEventListener("click", sendMessage)
}

if (messageInput) {
  messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header")
  if (window.scrollY > 100) {
    header.style.opacity = "0.95"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.opacity = "0.9"
    header.style.backdropFilter = "none"
  }
})
