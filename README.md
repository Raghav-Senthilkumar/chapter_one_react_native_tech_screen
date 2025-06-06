# Task Manager App

A modern task management application built with React Native and Expo, featuring a clean interface, dark mode support, and intuitive task organization. This app helps users manage their tasks efficiently with a beautiful and user-friendly interface.

## Features

### Task Management
- **Create and Edit Tasks**
  - Add new tasks with names and descriptions
  - Edit existing tasks at any time
  - Set start dates for better organization
  - Automatic handling of duplicate task names with sequential numbering (e.g., "Meeting (1)", "Meeting (2)")

- **Task Status**
  - Mark tasks as complete/incomplete
  - Visual indicators for task status
  - Filter tasks by completion status
  - Clear all tasks with confirmation

### User Interface
- **Modern Design**
  - Clean and intuitive layout
  - Responsive design that works on all screen sizes
  - Smooth animations and transitions
  - Touch-friendly interface elements

- **Dark Mode**
  - Toggle between light and dark themes
  - Automatic color scheme adjustments
  - Consistent visual experience
  - Reduced eye strain in low-light conditions

- **Task Organization**
  - Sort tasks by creation date
  - Filter tasks by status (All, Active, Completed)
  - Clear all tasks at once
  - Visual status indicators for quick reference

## Technical Details

### Core Technologies
- **React Native**
  - Cross-platform mobile development framework
  - Native performance and look-and-feel
  - Reusable components and code
  - Hot reloading for faster development

- **Expo**
  - Development platform and toolchain
  - Simplified development workflow
  - Built-in access to native features
  - Easy deployment and testing
  - QR code scanning for quick device testing

- **TypeScript**
  - Type-safe JavaScript development
  - Better code reliability and maintainability
  - Enhanced IDE support and tooling
  - Improved developer experience

### Key Dependencies
- `expo`: Core Expo framework for development
- `react-native`: Core React Native framework
- `@expo/vector-icons`: Icon library (using Ionicons)
- `@types/react`: TypeScript definitions for React
- `@types/react-native`: TypeScript definitions for React Native

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (for Mac) or Android Emulator
- Expo Go app for physical device testing

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd task-manager-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Run the App**
   - Press `i` to open in iOS simulator
   - Press `a` to open in Android emulator
   - Scan QR code with Expo Go app for physical device

## Project Structure

```
task-manager-app/
├── components/           # Reusable UI components
│   ├── TaskList.tsx     # Task list rendering and management
│   └── TaskDetails.tsx  # Task details modal
├── App.tsx              # Main application component
├── styles.ts            # Global styles
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

### Component Details
- **TaskList**: Handles the display and interaction of task items
  - Renders task items with completion status
  - Manages task actions (edit, delete, complete)
  - Handles duplicate task name numbering
  - Supports dark mode and responsive design

- **TaskDetails**: Displays detailed task information
  - Shows full task description
  - Displays task status and dates
  - Provides edit and delete options
  - Supports dark mode

## Development Guidelines

### Code Organization
- Components are modular and reusable
- Styles are centralized in `styles.ts`
- TypeScript interfaces for type safety
- Consistent naming conventions

### State Management
- Task state managed in main App component
- Props passed down to child components
- Event handlers for user interactions
- Efficient re-rendering with React hooks

### Best Practices
- TypeScript for type safety
- Component-based architecture
- Responsive design principles
- Performance optimization
- Code documentation and comments

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Pull Request Guidelines
- Clear description of changes
- Updated documentation
- Passing tests (if applicable)
- Follow existing code style

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 