import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { useTasks } from '../context/TaskContext';

export default function AddTaskScreen() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [priority, setPriority] = useState<
    'Low' | 'Medium' | 'High'
  >('Medium');

  const { addTask } = useTasks();

  const handleSaveTask = () => {
    if (!title.trim()) {
      console.log('Please enter a task title');
      return;
    }

    addTask({
      title: title.trim(),
      description: description.trim(),
      category: category.trim() || 'General',
      priority,
      time: 'Today',
      completed: false,
    });

    router.replace('/tasks');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backText}>‹</Text>
          </Pressable>

          <View>
            <Text style={styles.title}>Add New Task</Text>

            <Text style={styles.subtitle}>
              Create a task and stay organized.
            </Text>
          </View>
        </View>

        {/* Task Title */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Task Title</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter task title"
            placeholderTextColor="#999999"
            value={title}
            onChangeText={setTitle}
            autoCapitalize="sentences"
          />
        </View>

        {/* Description */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Description</Text>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Add task description"
            placeholderTextColor="#999999"
            value={description}
            onChangeText={setDescription}
            multiline
            textAlignVertical="top"
          />
        </View>

        {/* Category */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Category</Text>

          <TextInput
            style={styles.input}
            placeholder="e.g. Work, Personal, Development"
            placeholderTextColor="#999999"
            value={category}
            onChangeText={setCategory}
            autoCapitalize="words"
          />
        </View>

        {/* Priority */}

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Priority</Text>

          <View style={styles.priorityContainer}>
            {(['Low', 'Medium', 'High'] as const).map((item) => (
              <Pressable
                key={item}
                style={[
                  styles.priorityButton,
                  priority === item && styles.selectedPriority,
                ]}
                onPress={() => setPriority(item)}
              >
                <Text
                  style={[
                    styles.priorityText,
                    priority === item &&
                      styles.selectedPriorityText,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Save */}

        <Pressable
          style={styles.saveButton}
          onPress={handleSaveTask}
        >
          <Text style={styles.saveButtonText}>
            SAVE TASK
          </Text>
        </Pressable>

        {/* Cancel */}

        <Pressable
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelButtonText}>
            Cancel
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  backText: {
    fontSize: 32,
    color: '#222222',
    marginTop: -4,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222222',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: '#777777',
  },

  inputGroup: {
    marginBottom: 22,
  },

  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#222222',
    backgroundColor: '#FFFFFF',
  },

  textArea: {
    height: 120,
    paddingTop: 15,
  },

  priorityContainer: {
    flexDirection: 'row',
    gap: 10,
  },

  priorityButton: {
    flex: 1,
    height: 48,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedPriority: {
    backgroundColor: '#222222',
    borderColor: '#222222',
  },

  priorityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555555',
  },

  selectedPriorityText: {
    color: '#FFFFFF',
  },

  saveButton: {
    height: 54,
    backgroundColor: '#222222',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  cancelButton: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  cancelButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555555',
  },
});