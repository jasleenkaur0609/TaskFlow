import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

type Task = {
  id: number;
  title: string;
  category: string;
  priority: 'Low' | 'Medium' | 'High';
  time: string;
  completed: boolean;
};

export default function TasksScreen() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Complete React Native practice',
      category: 'Development',
      priority: 'High',
      time: '10:00 AM',
      completed: false,
    },
    {
      id: 2,
      title: 'Review project documentation',
      category: 'Work',
      priority: 'Medium',
      time: '02:00 PM',
      completed: false,
    },
    {
      id: 3,
      title: "Plan tomorrow's tasks",
      category: 'Personal',
      priority: 'Low',
      time: '06:00 PM',
      completed: true,
    },
    {
      id: 4,
      title: 'Practice JavaScript',
      category: 'Development',
      priority: 'High',
      time: '08:00 PM',
      completed: false,
    },
  ]);

  const toggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <View>
            <Text style={styles.title}>My Tasks</Text>

            <Text style={styles.subtitle}>
              Stay organized and get things done.
            </Text>
          </View>

          <Pressable
            style={styles.addButton}
            onPress={() => router.push('/add-task')}
          >
            <Text style={styles.addButtonText}>+</Text>
          </Pressable>
        </View>

        {/* Task Summary */}

        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>
              {tasks.length}
            </Text>

            <Text style={styles.summaryLabel}>
              Total
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>
              {pendingTasks.length}
            </Text>

            <Text style={styles.summaryLabel}>
              Pending
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>
              {completedTasks.length}
            </Text>

            <Text style={styles.summaryLabel}>
              Completed
            </Text>
          </View>
        </View>

        {/* Pending Tasks */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Pending Tasks
          </Text>

          <Text style={styles.sectionCount}>
            {pendingTasks.length}
          </Text>
        </View>

        {pendingTasks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No pending tasks
            </Text>

            <Text style={styles.emptyText}>
              You're all caught up!
            </Text>
          </View>
        ) : (
          pendingTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
            />
          ))
        )}

        {/* Completed Tasks */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Completed Tasks
          </Text>

          <Text style={styles.sectionCount}>
            {completedTasks.length}
          </Text>
        </View>

        {completedTasks.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
              No completed tasks
            </Text>

            <Text style={styles.emptyText}>
              Complete a task to see it here.
            </Text>
          </View>
        ) : (
          completedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
            />
          ))
        )}

        {/* Add Task */}

        <Pressable
          style={styles.fullAddButton}
          onPress={() => router.push('/add-task')}
        >
          <Text style={styles.fullAddButtonText}>
            + Add New Task
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

type TaskCardProps = {
  task: Task;
  onToggle: () => void;
};

function TaskCard({
  task,
  onToggle,
}: TaskCardProps) {
  return (
    <View
      style={[
        styles.taskCard,
        task.completed && styles.completedCard,
      ]}
    >
      <View style={styles.taskMain}>
        {/* Checkbox */}

        <Pressable
          style={[
            styles.checkbox,
            task.completed && styles.checkedBox,
          ]}
          onPress={onToggle}
        >
          {task.completed && (
            <Text style={styles.checkmark}>✓</Text>
          )}
        </Pressable>

        {/* Task information */}

        <View style={styles.taskInfo}>
          <Text
            style={[
              styles.taskTitle,
              task.completed && styles.completedTitle,
            ]}
          >
            {task.title}
          </Text>

          <View style={styles.taskMeta}>
            <Text style={styles.category}>
              {task.category}
            </Text>

            <Text style={styles.separator}>
              •
            </Text>

            <Text
              style={[
                styles.priority,
                task.priority === 'High' &&
                  styles.highPriority,
                task.priority === 'Medium' &&
                  styles.mediumPriority,
                task.priority === 'Low' &&
                  styles.lowPriority,
              ]}
            >
              {task.priority}
            </Text>
          </View>

          <Text style={styles.taskTime}>
            {task.time}
          </Text>
        </View>
      </View>
    </View>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 26,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#222222',
  },

  subtitle: {
    marginTop: 5,
    fontSize: 14,
    color: '#777777',
  },

  addButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButtonText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '400',
    marginTop: -2,
  },

  summaryContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 30,
  },

  summaryCard: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E1E1E1',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },

  summaryNumber: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222222',
  },

  summaryLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#777777',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222222',
  },

  sectionCount: {
    marginLeft: 8,
    fontSize: 13,
    color: '#777777',
  },

  taskCard: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },

  completedCard: {
    backgroundColor: '#FAFAFA',
  },

  taskMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  checkbox: {
    width: 23,
    height: 23,
    borderWidth: 1.5,
    borderColor: '#999999',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
    marginTop: 1,
  },

  checkedBox: {
    backgroundColor: '#222222',
    borderColor: '#222222',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  taskInfo: {
    flex: 1,
  },

  taskTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222222',
    lineHeight: 21,
  },

  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },

  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  category: {
    fontSize: 12,
    color: '#777777',
  },

  separator: {
    marginHorizontal: 6,
    fontSize: 12,
    color: '#AAAAAA',
  },

  priority: {
    fontSize: 12,
    fontWeight: '600',
  },

  highPriority: {
    color: '#555555',
  },

  mediumPriority: {
    color: '#777777',
  },

  lowPriority: {
    color: '#999999',
  },

  taskTime: {
    marginTop: 7,
    fontSize: 12,
    color: '#999999',
  },

  emptyContainer: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 12,
    paddingVertical: 24,
    alignItems: 'center',
    marginBottom: 22,
  },

  emptyTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555555',
  },

  emptyText: {
    marginTop: 5,
    fontSize: 13,
    color: '#999999',
  },

  fullAddButton: {
    height: 54,
    borderRadius: 10,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },

  fullAddButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});