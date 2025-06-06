/**
 * Task Manager App
 * A React Native application for managing tasks with features like:
 * - Task creation, editing, and deletion
 * - Task completion tracking
 * - Dark mode support
 * - Date selection
 * - Task filtering
 */

// Import necessary components and libraries
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Modal,
  Alert,
  ActivityIndicator,
  Animated,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { styles } from './styles';
import TaskDetails from './components/TaskDetails';
import TaskList from './components/TaskList';

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

export default function App() {
  // =============== State Management ===============
  const [tasks, setTasks] = useState<Task[]>([]);  // Array of all tasks
  const [loading, setLoading] = useState(true);    // Loading state for initial app load
  const [filter, setFilter] = useState<"all" | "completed" | "incomplete">("all");  // Current task filter
  const [modalVisible, setModalVisible] = useState(false);  // Controls visibility of add/edit task modal
  const [newTask, setNewTask] = useState<Partial<Task>>({});  // Holds data for new/edited task
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);  // Currently selected task for details view
  const [fadeAnim] = useState(new Animated.Value(0));  // Animation value for fade-in effect
  const [isDarkMode, setIsDarkMode] = useState(false);  // Dark mode toggle state
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);  // Controls date picker visibility
  const [tempStartDate, setTempStartDate] = useState(new Date());  // Temporary storage for selected date
  const [tempDateSelected, setTempDateSelected] = useState(false);  // Tracks if a date has been selected
  const [nameInputRef, setNameInputRef] = useState<TextInput | null>(null);  // Reference to name input field
  const [descInputRef, setDescInputRef] = useState<TextInput | null>(null);  // Reference to description input field
  const [nextTaskId, setNextTaskId] = useState(1);  // Counter for generating unique task IDs

  // =============== Initial Loading Effect ===============
  useEffect(() => {
    // Simulate loading delay and trigger fade-in animation
    const timer = setTimeout(() => {
      setLoading(false);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // =============== Utility Functions ===============
  /**
   * Formats a Date object to YYYY-MM-DD string format
   */
  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  /**
   * Handles date selection from the date picker
   * Different behavior for iOS and Android
   */
  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (Platform.OS === 'android') {
      setShowStartDatePicker(false);
    }
    
    if (selectedDate) {
      setTempStartDate(selectedDate);
      setTempDateSelected(true);
    }
  };

  /**
   * Confirms the selected date and updates the task
   */
  const confirmDate = () => {
    if (tempDateSelected) {
      setNewTask({ ...newTask, startDate: formatDate(tempStartDate) });
      setShowStartDatePicker(false);
      setTempDateSelected(false);
    }
  };

  /**
   * Checks if a string contains only whitespace
   */
  const isOnlyWhitespace = (str: string) => {
    return str.trim().length === 0;
  };

  // =============== Task Management Functions ===============
  /**
   * Adds or edits a task
   * Includes validation and duplicate checking
   */
  const addTask = () => {
    if (!newTask.name) {
      Alert.alert(
        "Task Name Required",
        "Please enter a name for your task.",
        [{ text: "OK" }]
      );
      return;
    }

    // Check for duplicate task names, but handle editing differently
    const duplicateTask = tasks.find(task => 
      task.name.toLowerCase() === newTask.name?.toLowerCase() && 
      // If editing, only consider it a duplicate if it's a different task
      (!selectedTask || task.id !== selectedTask.id)
    );

    if (duplicateTask) {
      Alert.alert(
        "Duplicate Task Name",
        `A task with the name "${newTask.name}" already exists. Would you like to create it anyway?`,
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Create Anyway",
            onPress: () => createTask()
          }
        ]
      );
      return;
    }

    createTask();
  };

  /**
   * Creates or updates a task
   * Handles both new task creation and task editing
   */
  const createTask = () => {
    const taskToAdd = {
      id: nextTaskId.toString(),
      name: newTask.name!,
      description: newTask.description && !isOnlyWhitespace(newTask.description) 
        ? newTask.description 
        : "No description provided",
      startDate: newTask.startDate || formatDate(new Date()),
      completed: false,
    };

    if (selectedTask) {
      // Edit existing task
      Alert.alert(
        "Confirm Edit",
        "Are you sure you want to save these changes?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Save",
            onPress: () => {
              setTasks(
                tasks.map((task) =>
                  task.id === selectedTask.id
                    ? { ...taskToAdd, id: task.id }
                    : task
                )
              );
              setNewTask({});
              setSelectedTask(null);
              setModalVisible(false);
            },
          },
        ]
      );
    } else {
      // Add new task
      setTasks([...tasks, taskToAdd]);
      setNextTaskId(nextTaskId + 1);
      setNewTask({});
      setModalVisible(false);
    }
  };

  /**
   * Toggles the completion status of a task
   * Shows congratulatory message when task is completed
   */
  const toggleComplete = (id: string) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          const newCompleted = !task.completed;
          if (newCompleted) {
            Alert.alert(
              "Task Completed",
              "Great job! Task marked as complete."
            );
          }
          return { ...task, completed: newCompleted };
        }
        return task;
      })
    );
  };

  /**
   * Deletes a task after confirmation
   */
  const deleteTask = (id: string) => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this task?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          onPress: () => setTasks(tasks.filter((task) => task.id !== id)),
        },
      ]
    );
  };

  /**
   * Clears all tasks matching the current filter
   * Requires confirmation
   */
  const clearFilteredTasks = () => {
    Alert.alert(
      "Confirm Clear Filtered Tasks",
      "Are you sure you want to clear all tasks in the current filter?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          onPress: () =>
            setTasks(
              tasks.filter(
                (task) =>
                  !(filter === "completed"
                    ? task.completed
                    : filter === "incomplete"
                    ? !task.completed
                    : true)
              )
            ),
        },
      ]
    );
  };

  /**
   * Opens the edit modal for an existing task
   */
  const editTask = (task: Task) => {
    setSelectedTask(task);
    setNewTask(task);
    setModalVisible(true);
  };

  /**
   * Toggles dark mode
   */
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  /**
   * Formats task description by removing extra whitespace
   */
  const formatDescription = (description: string) => {
    return description.trim().replace(/\s+/g, ' ');
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  // =============== Loading Screen ===============
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  // =============== Main App UI ===============
  return (
    <Animated.View style={[
      styles.container,
      isDarkMode && styles.containerDark,
      { opacity: fadeAnim }
    ]}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={[
          styles.title,
          isDarkMode && styles.titleDark
        ]}>My Tasks</Text>
        <Text style={[
          styles.subtitle,
          isDarkMode && styles.subtitleDark
        ]}>Stay organized, stay productive</Text>
        <TouchableOpacity
          onPress={toggleDarkMode}
          style={styles.themeButton}
        >
          <Ionicons
            name={isDarkMode ? "sunny" : "moon"}
            size={24}
            color={isDarkMode ? "#ffd700" : "#343a40"}
          />
        </TouchableOpacity>
      </View>

      {/* Filter Buttons */}
      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => setFilter("all")}
          style={[styles.filterButton, filter === "all" && styles.activeFilter]}
        >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("completed")}
          style={[
            styles.filterButton,
            filter === "completed" && styles.activeFilter,
          ]}
        >
          <Text style={styles.filterText}>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("incomplete")}
          style={[
            styles.filterButton,
            filter === "incomplete" && styles.activeFilter,
          ]}
        >
          <Text style={styles.filterText}>Incomplete</Text>
        </TouchableOpacity>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>Add New Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={clearFilteredTasks}
          style={styles.clearButton}
        >
          <Text style={styles.clearButtonText}>Clear Filtered Tasks</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        isDarkMode={isDarkMode}
        onTaskPress={setSelectedTask}
        onToggleComplete={toggleComplete}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        formatDescription={formatDescription}
      />

      {/* Add/Edit Task Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <View style={[styles.modalContent, isDarkMode && styles.modalContentDark]}>
              <Text style={[styles.modalTitle, isDarkMode && styles.modalTitleDark]}>
                {selectedTask ? "Edit Task" : "Add New Task"}
              </Text>
              <TextInput
                ref={setNameInputRef}
                style={[styles.modalInput, isDarkMode && styles.modalInputDark]}
                placeholder="Task Name *"
                placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
                value={newTask.name}
                onChangeText={(text) => setNewTask({ ...newTask, name: text })}
                returnKeyType="next"
                onSubmitEditing={() => descInputRef?.focus()}
              />
              <TextInput
                ref={setDescInputRef}
                style={[styles.modalDescriptionInput, isDarkMode && styles.modalDescriptionInputDark]}
                placeholder="Description (optional)"
                placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
                value={newTask.description}
                onChangeText={(text) => setNewTask({ ...newTask, description: text })}
                multiline
                numberOfLines={4}
                returnKeyType="done"
                onSubmitEditing={() => setShowStartDatePicker(true)}
              />
              <View style={styles.dateContainer}>
                <TouchableOpacity
                  style={[styles.dateButton, isDarkMode && styles.dateButtonDark]}
                  onPress={() => setShowStartDatePicker(true)}
                >
                  <Text style={[styles.dateButtonText, isDarkMode && styles.dateButtonTextDark]}>
                    Start Date: {newTask.startDate || formatDate(new Date())}
                  </Text>
                </TouchableOpacity>
                {tempDateSelected && (
                  <TouchableOpacity
                    style={[styles.confirmDateButton, isDarkMode && styles.confirmDateButtonDark]}
                    onPress={confirmDate}
                  >
                    <Text style={styles.confirmDateButtonText}>Confirm Date</Text>
                  </TouchableOpacity>
                )}
              </View>
              {showStartDatePicker && (
                <DateTimePicker
                  value={tempStartDate}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={(event, date) => handleDateChange(event, date)}
                  textColor={isDarkMode ? "#fff" : "#000"}
                  themeVariant={isDarkMode ? "dark" : "light"}
                />
              )}
              <TouchableOpacity onPress={addTask} style={styles.modalAddButton}>
                <Text style={styles.modalAddButtonText}>
                  {selectedTask ? "Save Changes" : "Add Task"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setSelectedTask(null);
                  setNewTask({});
                  setTempDateSelected(false);
                }}
                style={styles.modalCancelButton}
              >
                <Text style={styles.modalCancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Task Details Modal */}
      <TaskDetails
        selectedTask={selectedTask}
        isDarkMode={isDarkMode}
        onClose={() => setSelectedTask(null)}
        formatDescription={formatDescription}
      />
      
      <StatusBar style="auto" />
    </Animated.View>
  );
}
