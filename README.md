# PropHunta Waitlist

A beautiful, modern single-page waitlist application for PropHunta - built with React, TypeScript, Tailwind CSS, and Formspree.

## 🚀 Features

- **Modern Design**: Clean, gradient-based UI matching PropEx design system
- **Formspree Integration**: Seamless form submission handling
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth animations using Framer Motion
- **Validation**: Client-side form validation
- **Accessibility**: Built with accessibility best practices

## 📋 Prerequisites

- Node.js 18+ and npm
- A Formspree account (free tier available)

## 🛠️ Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Formspree:**
   - Go to [Formspree.io](https://formspree.io) and create a free account
   - Create a new form
   - Copy your form ID (it looks like `xrgkqjpn`)

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Then edit `.env` and add your Formspree form ID:
   ```
   VITE_FORMSPREE_ENDPOINT=your_formspree_form_id_here
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Colors & Styling
Edit `src/index.css` to customize the color scheme and design tokens.

### Form Fields
Modify the form fields in `src/App.tsx` to add or remove fields as needed.

### Formspree Configuration
Update the form submission endpoint in `src/App.tsx` if using a different form service.

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Formspree** - Form handling
- **Lucide React** - Icons

## 🌐 Deployment

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable `VITE_FORMSPREE_ENDPOINT`
4. Deploy!

### Netlify
1. Push your code to GitHub
2. Import project in Netlify
3. Add environment variable `VITE_FORMSPREE_ENDPOINT`
4. Deploy!

### Other Platforms
Build the project with `npm run build` and deploy the `dist` folder to any static hosting service.

## 📝 Formspree Setup Guide

1. **Create Account**: Sign up at [formspree.io](https://formspree.io)
2. **Create Form**: Click "New Form" and give it a name
3. **Get Form ID**: Copy the form ID from the form settings
4. **Configure**: Add the form ID to your `.env` file
5. **Test**: Submit a test form to verify it's working

## 🔒 Privacy & Security

- All form submissions are handled securely by Formspree
- No data is stored locally
- Email addresses are only used for waitlist notifications
- Formspree is GDPR compliant

## 📄 License

This project is part of the PropHunta ecosystem.

## 🤝 Support

For issues or questions, please contact the development team.
