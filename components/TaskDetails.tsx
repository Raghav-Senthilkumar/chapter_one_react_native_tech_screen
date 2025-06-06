/**
 * TaskDetails Component
 * 
 * This component displays detailed information about a selected task in a modal.
 * It shows all task properties including name, status, description, and start date.
 * The component supports dark mode and provides a clean, organized view of task details.
 * 
 * Features:
 * - Modal display of task information
 * - Dark mode support
 * - Formatted task description
 * - Clear visual hierarchy
 * - Easy dismissal
 */

import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
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
 * TaskDetailsProps Interface
 * Defines the props required by the TaskDetails component
 */
interface TaskDetailsProps {
  selectedTask: Task | null;                        // The task to display details for
  isDarkMode: boolean;                             // Current theme mode
  onClose: () => void;                             // Handler for closing the modal
  formatDescription: (description: string) => string; // Function to format task description
}

/**
 * TaskDetails Component
 * Displays detailed information about a selected task in a modal
 */
const TaskDetails: React.FC<TaskDetailsProps> = ({
  selectedTask,
  isDarkMode,
  onClose,
  formatDescription
}) => {
  // Don't render anything if no task is selected
  if (!selectedTask) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!selectedTask}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={[styles.modalContent, isDarkMode && styles.modalContentDark]}>
          {/* Modal Title */}
          <Text style={[styles.modalTitle, isDarkMode && styles.modalTitleDark]}>Task Details</Text>
          
          {/* Task Name Section */}
          <Text style={[styles.modalLabel, isDarkMode && styles.modalLabelDark]}>Name:</Text>
          <Text style={[styles.modalValue, isDarkMode && styles.modalValueDark]}>{selectedTask.name}</Text>
          
          {/* Task Status Section */}
          <Text style={[styles.modalLabel, isDarkMode && styles.modalLabelDark]}>Status:</Text>
          <Text style={[styles.modalValue, isDarkMode && styles.modalValueDark]}>
            {selectedTask.completed ? "Complete" : "Incomplete"}
          </Text>
          
          {/* Task Description Section */}
          <Text style={[styles.modalLabel, isDarkMode && styles.modalLabelDark]}>Description:</Text>
          <Text style={[styles.modalValue, isDarkMode && styles.modalValueDark]}>
            {formatDescription(selectedTask.description)}
          </Text>
          
          {/* Task Date Section */}
          <Text style={[styles.modalLabel, isDarkMode && styles.modalLabelDark]}>Start Date:</Text>
          <Text style={[styles.modalValue, isDarkMode && styles.modalValueDark]}>{selectedTask.startDate}</Text>
          
          {/* Close Button */}
          <TouchableOpacity
            onPress={onClose}
            style={styles.modalCloseButton}
          >
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default TaskDetails; 