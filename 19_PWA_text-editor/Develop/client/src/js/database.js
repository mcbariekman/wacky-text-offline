import { openDB } from 'idb';

// Function to initialize the database
const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      // Check if the object store already exists
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // Create a new object store named 'jate' with auto-incrementing keyPath
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Function to add content to the database
export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');

  // Add the content to the object store
  await store.put({ content });
  await tx.complete;

  console.log('Data added to database:', content);
};

// Function to retrieve all content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1);
  const tx = db.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');

  // Retrieve all the data from the object store
  const data = await store.getAll();
  await tx.complete;

  console.log('Data retrieved from database:', data);

  return data;
};

// Initialize the database
initdb();
