import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import TaskCard from '../components/TaskCard';
import ChatPopup from '../components/ChatPopup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import main from '../assets/main.png';

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Example Task', description: 'This is a task description', dueDate: '2024-12-25' },
  ]);

  const fetchUpdatedTasks = () => {
    console.log('Fetching updated tasks...');
  };

  return (
    <div className=" min-h-screen  bg-cover bg-center" style={{
      backgroundImage: `url(${main})`,
      
    }}>
      <Navbar />
      <div className="mx-auto p-8 ">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* Chat Popup */}
      <ChatPopup onTaskUpdate={fetchUpdatedTasks} />

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
