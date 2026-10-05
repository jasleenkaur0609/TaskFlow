import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning 👋</Text>
            <Text style={styles.userName}>Jasleen</Text>
          </View>

          <Pressable
            style={styles.profileButton}
            onPress={() => console.log('Profile pressed')}
          >
            <Text style={styles.profileText}>J</Text>
          </Pressable>
        </View>

        {/* Date */}
        <View style={styles.dateSection}>
          <Text style={styles.dateLabel}>Today</Text>
          <Text style={styles.dateText}>
            Wednesday, September 30
          </Text>
        </View>

        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Total Tasks</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>7</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>

        {/* Today's Tasks */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>

          <Pressable onPress={() => router.push('/tasks')}>
  <Text style={styles.viewAll}>View All</Text>
</Pressable>
        </View>

        {/* Task Card 1 */}
        <View style={styles.taskCard}>
          <View style={styles.taskContent}>
            <View style={styles.priorityDot} />

            <View style={styles.taskInfo}>
              <Text style={styles.taskTitle}>
                Complete React Native practice
              </Text>

              <Text style={styles.taskCategory}>
                Development • High Priority
              </Text>
            </View>
          </View>

          <Text style={styles.taskTime}>10:00 AM</Text>
        </View>

        {/* Task Card 2 */}
        <View style={styles.taskCard}>
          <View style={styles.taskContent}>
            <View style={styles.priorityDot} />

            <View style={styles.taskInfo}>
              <Text style={styles.taskTitle}>
                Review project documentation
              </Text>

              <Text style={styles.taskCategory}>
                Work • Medium Priority
              </Text>
            </View>
          </View>

          <Text style={styles.taskTime}>02:00 PM</Text>
        </View>

        {/* Task Card 3 */}
        <View style={styles.taskCard}>
          <View style={styles.taskContent}>
            <View style={styles.priorityDot} />

            <View style={styles.taskInfo}>
              <Text style={styles.taskTitle}>
                Plan tomorrow's tasks
              </Text>

              <Text style={styles.taskCategory}>
                Personal • Low Priority
              </Text>
            </View>
          </View>

          <Text style={styles.taskTime}>06:00 PM</Text>
        </View>

        {/* Add Task Button */}
        <Pressable
  style={styles.addButton}
  onPress={() => router.push('/add-task')}
>
          <Text style={styles.addButtonText}>+ Add New Task</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  greeting: {
    fontSize: 15,
    color: '#777777',
  },

  userName: {
    marginTop: 4,
    fontSize: 28,
    fontWeight: '700',
    color: '#222222',
  },

  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  dateSection: {
    marginTop: 32,
  },

  dateLabel: {
    fontSize: 14,
    color: '#777777',
  },

  dateText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },

  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
  },

  statCard: {
    flex: 1,
    minHeight: 100,
    borderRadius: 16,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statNumber: {
    fontSize: 25,
    fontWeight: '700',
    color: '#222222',
  },

  statLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#777777',
    textAlign: 'center',
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 34,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#222222',
  },

  viewAll: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555555',
  },

  taskCard: {
    minHeight: 82,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  taskContent: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },

  priorityDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#222222',
    marginRight: 12,
  },

  taskInfo: {
    flex: 1,
  },

  taskTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#222222',
  },

  taskCategory: {
    marginTop: 5,
    fontSize: 12,
    color: '#777777',
  },

  taskTime: {
    marginLeft: 10,
    fontSize: 11,
    color: '#888888',
  },

  addButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});