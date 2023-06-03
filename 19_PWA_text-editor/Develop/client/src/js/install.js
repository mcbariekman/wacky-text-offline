const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Event handler for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default behavior of the prompt
  event.preventDefault();

  // Store the event for later use
  const deferredPrompt = event;

  // Show the install button
  butInstall.style.display = 'block';

  // Event handler for the install button click
  butInstall.addEventListener('click', async () => {
    // Show the installation prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const result = await deferredPrompt.userChoice;

    // Reset the install button display
    butInstall.style.display = 'none';

    // Log the user's choice
    console.log('User choice:', result);

    // Clear the deferredPrompt variable
    deferredPrompt = null;
  });
});

// Event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Log the app installation
  console.log('App installed:', event);
});
