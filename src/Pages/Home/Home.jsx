import { useState } from "react";
import "./Home.css"

const Home = ({ reminders, setReminders }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [importance, setImportance] = useState('');
  
    const handleAddReminder = () => {
      if (name && date && importance) {
        const newReminder = {
          id: Date.now(),
          name,
          date,
          importance,
        };
        setReminders([...reminders, newReminder]);
        setName('');
        setDate('');
        setImportance('');
      } else {
        alert('Si prega di compilare tutti i campi');
      }
    };
  
    const handleDeleteReminder = (id) => {
      const updatedReminders = reminders.filter((reminder) => reminder.id !== id);
      setReminders(updatedReminders);
    };
  
    return (
      <div>
        <h2>Aggiungi un Promemoria</h2>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          value={importance}
          onChange={(e) => setImportance(e.target.value)}
        >
          <option value="">Seleziona Importanza</option>
          <option value="Bassa">Bassa</option>
          <option value="Media">Media</option>
          <option value="Alta">Alta</option>
        </select>
        <button onClick={handleAddReminder}>Aggiungi Promemoria</button>
        <h2>Promemoria</h2>
        <ul>
          {reminders.map((reminder) => (
            <li key={reminder.id}>
              <span>{reminder.name} - </span>
              <span>{reminder.date} - </span>
              <span className={reminder.importance.toLowerCase()}>{reminder.importance}</span>
              <button onClick={() => handleDeleteReminder(reminder.id)}>Elimina</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default Home;