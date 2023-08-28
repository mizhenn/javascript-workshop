const newPartyForm = document.querySelector('#new-party-form');
const partyContainer = document.querySelector('#party-container');

const PARTIES_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/parties';
const GUESTS_API_URL =
  'http://fsa-async-await.herokuapp.com/api/workshop/guests';
const RSVPS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/rsvps';
const GIFTS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/gifts';

// get all parties
const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    return parties;
  } catch (error) {
    console.error(error);
  }
};

// get single party by id
const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
    return party;
  } catch (error) {
    console.error(error);
  }
};

// delete party
const deleteParty = async (id) => {
  // your code here
};

// render a single party by id
const renderSinglePartyById = async (id) => {
  try {
    // fetch party details from server
    const  party = await getPartyById(id);

    // GET - /api/workshop/guests/party/:partyId - get guests by party id
    const guestsResponse = await fetch(`${GUESTS_API_URL}/party/${id}`);
    const guests = await guestsResponse.json();

    // GET - /api/workshop/rsvps/party/:partyId - get RSVPs by partyId
    const rsvpsResponse = await fetch(`${RSVPS_API_URL}/party/${id}`);
    const rsvps = await rsvpsResponse.json();

    // GET - get all gifts by party id - /api/workshop/parties/gifts/:partyId -BUGGY?
    // const giftsResponse = await fetch(`${PARTIES_API_URL}/party/gifts/${id}`);
    // const gifts = await giftsResponse.json();

    // Select relevant elements from the HTML
const partyContainer = document.querySelector('#party-container');{}

// API URLs for different resources
const PARTIES_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/parties';

const partyContainerr = document.querySelector('#party-container');


// Fetch all parties from the API
const getAllParties = async () => {
    try {
        const response = await fetch(PARTIES_API_URL);
        const parties = await response.json();
        return parties;
    } catch (error) {
        console.error(error);
    }
};

// Delete a party by its ID
const deleteParty = async (id) => {
    try {
        const response = await fetch(`${PARTIES_API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('Party deleted successfully.');
            renderParties();
        } else {
            console.error('Error deleting party:', response.statusText);
        }
    } catch (error) {
        console.error('Error deleting party:', error);
    }
};

// render a single party by id
const renderSinglePartyById = async (id) => {
    try {
        // fetch party details from server
        const party = await getPartyById(id);

        // GET - /api/workshop/guests/party/:partyId - get guests by party id
        const guestsResponse = await fetch(`${GUESTS_API_URL}/party/${id}`);
        const guests = await guestsResponse.json();

        // GET - /api/workshop/rsvps/party/:partyId - get RSVPs by partyId
        const rsvpsResponse = await fetch(`${RSVPS_API_URL}/party/${id}`);
        const rsvps = await rsvpsResponse.json();

        // Display party details on the page
        const partyDetailsElement = document.createElement('div');
        partyDetailsElement.classList.add('party-details');
        partyDetailsElement.innerHTML = `
            <h2>${party.title}</h2>
            <p>${party.event}</p>
            <p>${party.city}</p>
            <p>${party.state}</p>
            <p>${party.country}</p>
            <h3>Guests:</h3>
            <ul>
                ${guests.map((guest, index) => `
                    <li>
                        <div>${guest.name}</div>
                        <div>${rsvps[index].status}</div>
                    </li>
                `).join('')}
            </ul>
            <button class="close-button">Close</button>
        `;
        partyContainer.appendChild(partyDetailsElement);

        // Add event listener to the "Close" button
        const closeButton = partyDetailsElement.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
            partyDetailsElement.remove(); // Remove the details element when closed
        });
    } catch (error) {
        console.error(error);
    }
};

    }
};

// Initialize the app
const init = async () => {
    // Initial rendering of parties
    await renderParties();
};
init();
