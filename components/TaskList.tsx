/**
 * TaskList Component
 * 
 * This component is responsible for rendering the list of tasks and handling task-related interactions.
 * It provides a scrollable list of task items, each with completion toggle, task details, and action buttons.
 * 
 * Features:
 * - Displays tasks in a scrollable list
 * - Handles task completion toggling
 * - Provides edit and delete actions
 * - Supports dark mode
 * - Shows task status and details
 * - Handles empty state
 * - Shows number for duplicate task names
 */

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../styles';

/**
 * Task Interface
 * Defines the structure of a task object
 */
interface Task {
  id: string;          // Unique identifier for the task
  name: string;        // Task name/title
  description: string; // Detailed description of the task
  startDate: string;   // Date when the task was created
  completed: boolean;  // Task completion status
}

/**
 * TaskListProps Interface
 * Defines the props required by the TaskList component
 */
interface TaskListProps {
  tasks: Task[];                                    // Array of tasks to display
  isDarkMode: boolean;                             // Current theme mode
  onTaskPress: (task: Task) => void;               // Handler for task selection
  onToggleComplete: (id: string) => void;          // Handler for completion toggle
  onEditTask: (task: Task) => void;                // Handler for task editing
  onDeleteTask: (id: string) => void;              // Handler for task deletion
  formatDescription: (description: string) => string; // Function to format task description
}

/**
 * TaskList Component
 * Renders the list of tasks with their details and action buttons
 */
const TaskList: React.FC<TaskListProps> = ({
  tasks,
  isDarkMode,
  onTaskPress,
  onToggleComplete,
  onEditTask,
  onDeleteTask,
  formatDescription
}) => {
  /**
   * Gets the duplicate number for a task name
   * @param taskName - The name to check
   * @param taskId - The ID of the current task
   * @returns number indicating the position in sequence (1 if no duplicates)
   */
  const getDuplicateNumber = (taskName: string, taskId: string) => {
    // Get all tasks with the same name (including current task)
    const sameNameTasks = tasks
      .filter(task => task.name.toLowerCase() === taskName.toLowerCase())
      .sort((a, b) => a.id.localeCompare(b.id)); // Sort by ID to maintain consistent order
    
    // Find the position of current task in the sorted array
    const position = sameNameTasks.findIndex(task => task.id === taskId) + 1;
    
    // Only show number if there are duplicates
    return sameNameTasks.length > 1 ? position : 0;
  };

  /**
   * Renders an individual task item
   * Includes completion toggle, task details, and action buttons
   * 
   * @param item - The task object to render
   * @returns A TouchableOpacity containing the task item
   */
  const renderTask = ({ item }: { item: Task }) => {
    const duplicateNumber = getDuplicateNumber(item.name, item.id);
    const hasDuplicateName = duplicateNumber > 0;

    return (
      <TouchableOpacity onPress={() => onTaskPress(item)}>
        <View style={[
          styles.taskItem,
          isDarkMode && styles.taskItemDark,
          item.completed && styles.completedTaskItem
        ]}>
          {/* Task completion toggle button */}
          <TouchableOpacity
            onPress={() => onToggleComplete(item.id)}
            style={[
              styles.checkButton,
              item.completed ? styles.checkButtonComplete : styles.checkButtonIncomplete
            ]}
          >
            <Text style={styles.checkButtonText}>
              {item.completed ? "✓" : "○"}
            </Text>
          </TouchableOpacity>

          {/* Task content section */}
          <View style={styles.taskContent}>
            {/* Task name with duplicate number */}
            <View style={styles.taskNameContainer}>
              <Text 
                style={[
                  styles.taskText,
                  isDarkMode && styles.taskTextDark,
                  item.completed && styles.completedTaskText
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name}
                {hasDuplicateName && ` (${duplicateNumber})`}
              </Text>
            </View>

            {/* Task description - truncated to one line */}
            <Text
              style={[
                styles.taskDescription,
                isDarkMode && styles.taskDescriptionDark,
                item.completed && styles.completedTaskText
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {formatDescription(item.description)}
            </Text>

            {/* Task date */}
            <Text style={[
              styles.taskDates,
              isDarkMode && styles.taskDatesDark,
              item.completed && styles.completedTaskText
            ]}>
              {item.startDate}
            </Text>

            {/* Task status indicator */}
            <View style={[
              styles.statusContainer,
              { backgroundColor: item.completed ? '#d4edda' : '#f8d7da' }
            ]}>
              <Text style={[
                styles.taskStatus,
                { color: item.completed ? '#155724' : '#721c24' }
              ]}>
                {item.completed ? "Complete" : "Incomplete"}
              </Text>
            </View>
          </View>

          {/* Task action buttons */}
          <View style={styles.actionButtons}>
            {/* Edit button */}
            <TouchableOpacity
              onPress={() => onEditTask(item)}
              style={styles.iconButton}
            >
              <Ionicons name="pencil" size={24} color={isDarkMode ? "#ffd700" : "#ffc107"} />
            </TouchableOpacity>

            {/* Delete button */}
            <TouchableOpacity
              onPress={() => onDeleteTask(item.id)}
              style={styles.iconButton}
            >
              <Ionicons name="trash" size={24} color="#ff4d4d" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={renderTask}
      contentContainerStyle={styles.list}
      ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet.</Text>}
    />
  );
};

export default TaskList; 