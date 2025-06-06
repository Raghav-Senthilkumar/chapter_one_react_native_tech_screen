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

## How to Use

### Creating Tasks
1. Tap the "Add Task" button at the top of the screen
2. Enter a task name (required)
3. Add an optional description
4. Set a start date (optional)
5. Tap "Add" to create the task
   - If the task name already exists, it will be automatically numbered (e.g., "Meeting (2)")

### Managing Tasks
- **View Task Details**
  - Tap on any task to view its full details
  - See the complete description and start date
  - Access edit and delete options

- **Edit a Task**
  - Tap the pencil icon on any task
  - Modify the name, description, or date
  - Tap "Save" to update the task

- **Delete a Task**
  - Tap the trash icon on any task
  - Confirm deletion in the popup dialog

- **Mark as Complete/Incomplete**
  - Tap the circle icon on the left of any task
  - Green checkmark indicates completion
  - Red circle indicates incomplete status

### Organizing Tasks
- **Filter Tasks**
  - Use the filter buttons at the top:
    - "All": Shows all tasks
    - "Active": Shows only incomplete tasks
    - "Completed": Shows only completed tasks

- **Clear Tasks**
  - Tap "Clear All" to remove all tasks
  - Confirmation required before deletion

### Dark Mode
- Tap the moon/sun icon in the top-right corner
- Toggle between light and dark themes
- Settings persist between app sessions

### Task List Features
- **Task Cards**
  - Show task name and truncated description
  - Display start date
  - Indicate completion status
  - Provide quick access to edit and delete

- **Duplicate Names**
  - Automatically numbered when duplicates exist
  - Numbers update when tasks are deleted
  - Maintains consistent numbering

- **Status Indicators**
  - Green background for completed tasks
  - Red background for incomplete tasks
  - Visual feedback for task state

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

### Third-Party Libraries

#### UI and Icons
- **@expo/vector-icons**
  - Version: ^13.0.0
  - Purpose: Provides a comprehensive icon library
  - Usage: Used for task actions (edit, delete) and UI elements
  - Features: Multiple icon sets, scalable vectors, easy integration

#### Development Tools
- **@types/react**
  - Version: ^18.0.0
  - Purpose: TypeScript definitions for React
  - Usage: Provides type checking for React components and hooks

- **@types/react-native**
  - Version: ^0.72.0
  - Purpose: TypeScript definitions for React Native
  - Usage: Provides type checking for React Native components and APIs

#### Expo Dependencies
- **expo**
  - Version: ^49.0.0
  - Purpose: Core Expo framework
  - Features: Development tools, build system, and native module access

- **expo-status-bar**
  - Version: ~1.6.0
  - Purpose: Status bar management
  - Usage: Handles status bar appearance and behavior

#### React Native Dependencies
- **react-native**
  - Version: 0.72.0
  - Purpose: Core React Native framework
  - Features: Native components, platform APIs, and development tools

- **react-native-safe-area-context**
  - Version: 4.6.3
  - Purpose: Safe area management
  - Usage: Handles device notches and system UI elements

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

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers. 