import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#007bff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#6c757d",
    marginTop: 5,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#e9ecef",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activeFilter: {
    backgroundColor: "#007bff",
  },
  filterText: {
    fontWeight: "bold",
    color: "#343a40",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  clearButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  list: {
    paddingBottom: 40,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskContent: {
    flex: 1,
    marginLeft: 10,
  },
  taskNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  duplicateIndicator: {
    padding: 2,
  },
  taskText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  taskDates: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
  },
  taskStatus: {
    fontSize: 12,
    color: "#007bff",
    fontWeight: "bold",
  },
  checkButton: {
    marginRight: 10,
    backgroundColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  checkButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    marginTop: 40,
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: "#007bff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#343a40",
  },
  modalLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#343a40",
    marginBottom: 5,
  },
  modalValue: {
    fontSize: 16,
    color: "#666",
    marginBottom: 15,
  },
  modalInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  modalDescriptionInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    height: 100,
    textAlignVertical: "top",
  },
  modalAddButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  modalAddButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalCancelButton: {
    backgroundColor: "#ccc",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  modalCancelButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalCloseButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 10,
  },
  modalCloseButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  statusContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  containerDark: {
    backgroundColor: "#1a1a1a",
  },
  taskItemDark: {
    backgroundColor: "#2d2d2d",
  },
  taskTextDark: {
    color: "#fff",
  },
  taskDescriptionDark: {
    color: "#ccc",
  },
  taskDatesDark: {
    color: "#aaa",
  },
  titleDark: {
    color: "#fff",
  },
  subtitleDark: {
    color: "#aaa",
  },
  modalContentDark: {
    backgroundColor: "#2d2d2d",
  },
  modalTitleDark: {
    color: "#fff",
  },
  modalInputDark: {
    backgroundColor: "#3d3d3d",
    color: "#fff",
    borderColor: "#555",
  },
  modalDescriptionInputDark: {
    backgroundColor: "#3d3d3d",
    color: "#fff",
    borderColor: "#555",
  },
  completedTaskItem: {
    opacity: 0.7,
  },
  completedTaskText: {
    opacity: 0.7,
  },
  checkButtonComplete: {
    backgroundColor: "#28a745",
  },
  checkButtonIncomplete: {
    backgroundColor: "#dc3545",
  },
  themeButton: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  dateButtonDark: {
    borderColor: '#555',
    backgroundColor: '#3d3d3d',
  },
  dateButtonText: {
    color: '#333',
    fontSize: 16,
  },
  dateButtonTextDark: {
    color: '#fff',
  },
  confirmDateButton: {
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 10,
  },
  confirmDateButtonDark: {
    backgroundColor: '#218838',
  },
  confirmDateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalLabelDark: {
    color: '#fff',
  },
  modalValueDark: {
    color: '#ccc',
  },
}); 