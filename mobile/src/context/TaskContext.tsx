import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

export type Task = {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: 'Low' | 'Medium' | 'High';
  time: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

const initialTasks: Task[] = [
  {
    id: 1,
    title: 'Complete React Native practice',
    description: 'Continue building TaskFlow.',
    category: 'Development',
    priority: 'High',
    time: '10:00 AM',
    completed: false,
  },
  {
    id: 2,
    title: 'Review project documentation',
    description: 'Review TaskFlow project documentation.',
    category: 'Work',
    priority: 'Medium',
    time: '02:00 PM',
    completed: false,
  },
  {
    id: 3,
    title: "Plan tomorrow's tasks",
    description: 'Prepare tasks for tomorrow.',
    category: 'Personal',
    priority: 'Low',
    time: '06:00 PM',
    completed: true,
  },
];

export function TaskProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (task: Omit<Task, 'id'>) => {
    const newTask: Task = {
      ...task,
      id: Date.now(),
    };

    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);
  };

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

  const deleteTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id)
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error(
      'useTasks must be used inside TaskProvider'
    );
  }

  return context;
}