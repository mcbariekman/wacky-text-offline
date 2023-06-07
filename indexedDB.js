// Open or create a database
const dbName = 'myDatabase';
const dbVersion = 1;

const request = indexedDB.open(dbName, dbVersion);

// Handle database upgrades and object store creation
request.onupgradeneeded = function(event) {
  const db = event.target.result;

  // Create an object store
  const objectStore = db.createObjectStore('myObjectStore', { keyPath: 'id' });

  // Create indexes if needed
  objectStore.createIndex('nameIndex', 'name', { unique: false });
};

// Handle success and error events
request.onsuccess = function(event) {
  const db = event.target.result;

  // Perform operations on the database
  const transaction = db.transaction('myObjectStore', 'readwrite');
  const objectStore = transaction.objectStore('myObjectStore');

  // Add an item to the object store
  const newItem = { id: 1, name: 'John Doe', age: 30 };
  const addRequest = objectStore.add(newItem);

  addRequest.onsuccess = function() {
    console.log('Item added to IndexedDB');
  };

  addRequest.onerror = function(event) {
    console.error('Error adding item to IndexedDB', event.target.error);
  };

  // Retrieve an item from the object store
  const getRequest = objectStore.get(1);

  getRequest.onsuccess = function() {
    const retrievedItem = getRequest.result;
    console.log('Retrieved item:', retrievedItem);
  };

  getRequest.onerror = function(event) {
    console.error('Error retrieving item from IndexedDB', event.target.error);
  };
};

request.onerror = function(event) {
  console.error('Error opening database', event.target.error);
};
